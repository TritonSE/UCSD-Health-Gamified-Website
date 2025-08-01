"use client";

import { applyActionCode } from "firebase/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import WelcomePanel from "../components/WelcomePanel/WelcomePanel";
// import { useAuth } from "../contexts/AuthContext";
import { auth } from "../firebase-config.js";

import styles from "./Auth.module.css";
import { LoginButton } from "../components/LoginButton";

export default function Auth() {
  // Example usage of useAuth
  // const { currentUser } = useAuth();

  const router = useRouter();
  const searchParams = useSearchParams();
  const actionExecuted = useRef(false);

  const [titleMessage, setTitleMessage] = useState("Redirecting...");
  const [message, setMessage] = useState("Please wait a moment...");

  const redirect = () => {
    window.location.href = "/signin";
  };

  useEffect(() => {
    if (actionExecuted.current) return;
    actionExecuted.current = true;

    const run = async () => {
      await new Promise((res) => {
        setTimeout(res, 250);
      });

      let mode =
        searchParams.get("mode") ?? new URLSearchParams(window.location.search).get("mode");

      let oobCode =
        searchParams.get("oobCode") ?? new URLSearchParams(window.location.search).get("oobCode");

      if (!mode || !oobCode) {
        const urlParams = new URLSearchParams(window.location.search);
        mode = mode ?? urlParams.get("mode");
        oobCode = oobCode ?? urlParams.get("oobCode");
      }

      if (!oobCode) {
        setTitleMessage("Error Authenticating");
        setMessage("");
        return;
      }

      switch (mode) {
        case "resetPassword":
          actionExecuted.current = true;
          router.replace(`/resetpassword?oobCode=${oobCode}`);
          break;
        case "verifyEmail":
          actionExecuted.current = true;

          setTitleMessage("Verifying Email...");
          setMessage("");

          applyActionCode(auth, oobCode)
            .then(() => {
              router.push("/emailverified");
            })
            .catch((error) => {
              const code = (error as { code?: string })?.code ?? "unknown";

              if (code === "auth/invalid-action-code") {
                setTitleMessage("Your email may already be verified.");
                setMessage("Try signing in again or request a new verification email.");
              } else {
                console.error("Verification error:", error);
                setTitleMessage("Error Verifying Email");
                setMessage("Please try again or contact support.");
              }
            });
          break;
        default:
          setTitleMessage("Error Authenticating");
          setMessage("");
      }
    };

    void run();
  }, [searchParams]);

  return (
    <main className={styles.container}>
      <section className={styles.leftSide}>
        <WelcomePanel />
      </section>
      <section className={styles.rightSide}>
        <div className={styles.title}>
          <h1>{titleMessage}</h1>
          <p className={styles.text}>{message}</p>
        </div>
        <LoginButton disabled={false} label="Back to Sign In" onClick={redirect} />
      </section>
    </main>
  );
}
