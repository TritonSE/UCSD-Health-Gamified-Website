import { sendPasswordResetEmail } from "firebase/auth";
import Image from "next/image";
import React, { useState } from "react";

import { getUser } from "../api/user";
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
  const [errorMessage, setErrorMessage] = useState("");

  const sendResetEmail = () => {
    getUser(email)
      .then((result) => {
        if (result.success) {
          sendPasswordResetEmail(auth, email)
            .then(() => {
              setEmailState(email);
            })
            .catch((error: unknown) => {
              const firebaseError = error as { code?: string; message: string };
              const errorCode = firebaseError.code ?? "unknown_error";
              const errorM = firebaseError.message;
              console.error("Password reset failed:", errorCode, errorM);
            });
        } else {
          return Promise.reject(new Error("No account associated with this email."));
        }
      })
      .catch((error: Error) => {
        setErrorMessage(error.message);
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
      {errorMessage && (
        <div className={styles.error}>
          <Image src="/red_exclamation.svg" alt="Warning!" width={18} height={18} />
          <p>{errorMessage}</p>
        </div>
      )}
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
