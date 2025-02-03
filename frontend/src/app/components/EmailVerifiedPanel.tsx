"use client";

import { useEffect, useState } from "react";

import styles from "./EmailVerifiedPanel.module.css";
import { LoginButton } from "./LoginButton";

export default function EmailVerifiedPanel() {
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
    <div className={styles.verifyEmail}>
      <h1>Email Verified!</h1>
      <p className={styles.verifyEmailText}>
        Your email <span className={styles.email}>{email}</span> has been successfully verified.{" "}
        <br />
        Sign in to get started!
      </p>
      <br />
      <LoginButton disabled={false} label="Sign In" onClick={redirect} />
    </div>
  );
}
