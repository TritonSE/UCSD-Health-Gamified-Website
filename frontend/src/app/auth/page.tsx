"use client";

import { applyActionCode } from "firebase/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import WelcomePanel from "../components/WelcomePanel/WelcomePanel";
// import { useAuth } from "../contexts/AuthContext";
import { auth } from "../firebase-config.js";

import styles from "./Auth.module.css";

export default function Auth() {
  // Example usage of useAuth
  // const { currentUser } = useAuth();

  const router = useRouter();
  const searchParams = useSearchParams();
  const actionExecuted = useRef(false);

  const [titleMessage, setTitleMessage] = useState("Redirecting...");
  const [message, setMessage] = useState("Please wait a moment...");

  useEffect(() => {
    if (actionExecuted.current) return;

    let mode = searchParams.get("mode") ?? new URLSearchParams(window.location.search).get("mode");;
    let oobCode = searchParams.get("oobCode") ?? new URLSearchParams(window.location.search).get("oobCode");

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
            console.log("email verified!");
            window.location.href = "/emailverified";
          })
          .catch((error) => {
            alert(error);
            setTitleMessage("Error Verifying Email");
            setMessage("Please try again.");
          });
        break;
      default:
        setTitleMessage("Error Authenticating");
        setMessage("");
    }
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
      </section>
    </main>
  );
}
