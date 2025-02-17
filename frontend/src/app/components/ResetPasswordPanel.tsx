import { confirmPasswordReset } from "firebase/auth";
import React, { useState } from "react";

import { auth } from "../firebase-config.js";

import BackToSignIn from "./BackToSignIn";
import styles from "./ForgotPasswordForm.module.css";
import { LoginButton } from "./LoginButton";
import { TextBox } from "./TextBox";

export default function ResetPasswordPanel() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [passwordReset, setPasswordReset] = useState(false);

  const handleSubmit = () => {
    const getOobCodeFromUrl = (url: string) => {
      const urlParams = new URLSearchParams(url);
      return urlParams.get("oobCode");
    };

    const code = getOobCodeFromUrl(window.location.search) ?? "";

    confirmPasswordReset(auth, code, password)
      .then(() => {
        setPasswordReset(true);
      })
      .catch((error: unknown) => {
        const firebaseError = error as { code?: string; message: string };
        const errorCode = firebaseError.code ?? "unknown_error";
        const errorMessage = firebaseError.message;

        console.log(errorCode, errorMessage);
        setPasswordReset(false);
      });
  };

  const trackPassword = () => {
    if (password.length < 6) {
      setPasswordError("Password must be at least six characters");
    } else if (password === "") {
      setPasswordError("Please enter a valid password");
    } else {
      setPasswordError("");
    }
  };

  const trackConfirmPassword = () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  return (
    <>
      {!passwordReset ? (
        <div className={styles.formContainer}>
          {/* back to sign in */}
          <BackToSignIn />
          {/* content */}
          <h1 className={styles.formTitle}>Reset Password</h1>
          <div className={styles.formField}>
            <TextBox
              label="Password"
              type="password"
              placeholder="••••••"
              caption="Must be at least 6 characters"
              value={password}
              onChange={(value) => {
                setPassword(value);
              }}
              onBlur={() => {
                trackPassword();
              }}
              error={passwordError}
            />
          </div>
          <div className={styles.formField}>
            <TextBox
              label="Confirm Password"
              type="password"
              placeholder="••••••"
              value={confirmPassword}
              onChange={(value) => {
                setConfirmPassword(value);
              }}
              onBlur={() => {
                trackConfirmPassword();
              }}
              error={confirmPasswordError}
            />
          </div>
          <div className={styles.formField}>
            <LoginButton
              label="Reset"
              disabled={password !== confirmPassword || password === "" || confirmPassword === ""}
              onClick={() => {
                handleSubmit();
              }}
            />
          </div>
        </div>
      ) : (
        <div className={styles.formContainer}>
          <h1 className={styles.formTitle}>Password Reset</h1>
          <div className={styles.formField}>Your password has been successfully reset!</div>
          <div className={styles.formField}>
            <LoginButton
              label="Sign In"
              disabled={false}
              onClick={() => {
                window.location.href = "/signin";
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
