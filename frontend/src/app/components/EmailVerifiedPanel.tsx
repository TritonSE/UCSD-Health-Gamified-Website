"use client";

import styles from "./EmailVerifiedPanel.module.css";
import { LoginButton } from "./LoginButton";

export default function EmailVerifiedPanel() {
  const redirect = () => {
    window.location.href = "/signin";
  };

  // Handle Enter key press
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      redirect();
    }
  };

  return (
    <div className={styles.verifyEmail} onKeyDown={handleKeyDown}>
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
