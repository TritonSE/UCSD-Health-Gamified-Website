"use client";

import { useState } from "react";

import ForgotPasswordEmailSent from "../components/forgotPasswordEmailSent";
import ForgotPasswordForm from "../components/forgotPasswordForm";
import LeftSide from "../components/leftSide";

import styles from "./forgotPassword.module.css";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <LeftSide />
      </div>
      <div className={styles.forgotPasswordForm}>
        {!email && (
          <ForgotPasswordForm
            setEmailState={(e) => {
              setEmail(e);
            }}
          />
        )}
        {email && <ForgotPasswordEmailSent email={email} />}
      </div>
    </div>
  );
}
