import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";

import { auth } from "../firebase-config.js";

import BackToSignIn from "./BackToSignIn";
import styles from "./ForgotPasswordForm.module.css";
import { LoginButton } from "./LoginButton";
import { TextBox } from "./TextBox";

export type ForgotPasswordFormProps = {
  setEmailState: (email: string) => void;
};

export default function ForgotPasswordForm({ setEmailState }: ForgotPasswordFormProps) {
  const [email, setEmail] = useState("");

  const sendResetEmail = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setEmailState(email);
      })
      .catch((error: unknown) => {
        const firebaseError = error as { code?: string; message: string };
        const errorCode = firebaseError.code ?? "unknown_error";
        const errorMessage = firebaseError.message;

        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className={styles.formContainer}>
      {/* back to sign in */}
      <BackToSignIn />
      {/* content */}
      <h1 className={styles.formTitle}>Forgot Password?</h1>
      <div className={styles.formField}>
        Please enter your email address to reset your password.
      </div>
      <div className={`${styles.formField} ${styles.smallSpaceBelow}`}>
        <TextBox
          label="Email address"
          type="text"
          placeholder="name@gmail.com"
          value={email}
          onChange={(value) => {
            setEmail(value);
          }}
        />
      </div>
      <div className={styles.formField}>
        <LoginButton
          label="Send link"
          disabled={!email.includes("@") || !email.split("@")[1].includes(".")}
          onClick={() => {
            sendResetEmail();
          }}
        />
      </div>
    </div>
  );
}
