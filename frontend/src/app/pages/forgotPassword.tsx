"use client";

import { useState } from "react";

import WelcomePanel from "../components/WelcomePanel";
import ForgotPasswordEmailSent from "../components/forgotPasswordEmailSent";
import ForgotPasswordForm from "../components/forgotPasswordForm";

import styles from "./forgotPassword.module.css";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <WelcomePanel />
      </div>
      <div className={styles.forgotPasswordForm}>
        {!email && (
          <ForgotPasswordForm
            setEmailState={(e) => {
              setEmail(e);
            }}
          />
        )}
        {email && <ForgotPasswordEmailSent _email={email} />}
      </div>
    </div>
  );
}
