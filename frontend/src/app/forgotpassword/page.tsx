"use client";

import { useState } from "react";

import ForgotPasswordEmailSent from "../components/ForgotPasswordEmailSent";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import WelcomePanel from "../components/WelcomePanel/WelcomePanel";

import styles from "./ForgotPassword.module.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <WelcomePanel />
      </div>
      <div className={styles.forgotPasswordForm}>
        {!email ? (
          <ForgotPasswordForm
            setEmailState={(e) => {
              setEmail(e);
            }}
          />
        ) : (
          <ForgotPasswordEmailSent _email={email} />
        )}
      </div>
    </div>
  );
}
