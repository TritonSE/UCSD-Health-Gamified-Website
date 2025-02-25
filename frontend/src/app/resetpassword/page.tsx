"use client";

import ResetPasswordPanel from "../components/ResetPasswordPanel";
import WelcomePanel from "../components/WelcomePanel";

import styles from "./ResetPassword.module.css";

export default function ResetPassword() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <WelcomePanel />
      </div>
      <div className={styles.rightSide}>
        <ResetPasswordPanel />
      </div>
    </div>
  );
}
