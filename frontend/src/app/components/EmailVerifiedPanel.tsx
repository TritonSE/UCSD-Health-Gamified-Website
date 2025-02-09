"use client";

import styles from "./EmailVerifiedPanel.module.css";
import { LoginButton } from "./LoginButton";

export default function EmailVerifiedPanel() {
  const redirect = () => {
    window.location.href = "/signin";
  };

  return (
    <div className={styles.verifyEmail}>
      <h1>Email Verified!</h1>
      <p className={styles.verifyEmailText}>
        Your email has been successfully verified. <br />
        Sign in to get started!
      </p>
      <br />
      <LoginButton disabled={false} label="Sign In" onClick={redirect} />
    </div>
  );
}
