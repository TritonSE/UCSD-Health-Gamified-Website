"use client";
import WelcomePanel from "../components/WelcomePanel";
import { useEffect, useState } from "react";
import { LoginButton } from "../components/LoginButton";

import styles from "./EmailVerified.module.css";

export default function SignUp() {
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const emailForVerify = localStorage.getItem("emailForVerify");
    console.log("Retrieved email from localStorage:", emailForVerify);
    if (emailForVerify) {
      setEmail(emailForVerify);
      localStorage.removeItem("emailForVerify");
    } else {
      console.error("No email found: ", emailForVerify);
    }
  }, []);

  const redirect = () => {
    window.location.href = "/signin";
  };

  return (
    <main className={styles.container}>
      <section className={styles.leftSide}>
        <WelcomePanel />
      </section>
      <section className={styles.rightSide}>
        <div className={styles.verifyEmail}>
          <h1>Email Verified!</h1>
          <p className={styles.verifyEmailText}>
            Your email <span className={styles.email}>{email}</span> has been successfully verified.{" "}
            <br />
            Sign in to get started!
          </p>
          <br />
          <LoginButton label="Sign In" onClick={redirect} />
        </div>
      </section>
    </main>
  );
}
