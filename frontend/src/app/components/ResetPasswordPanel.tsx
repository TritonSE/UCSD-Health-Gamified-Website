import { confirmPasswordReset } from "firebase/auth";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { auth } from "../firebase-config.js";

import BackToSignIn from "./BackToSignIn";
import { LoginButton } from "./LoginButton";
import styles from "./ResetPasswordPanel.module.css";
import { TextBox } from "./TextBox";

export default function ResetPasswordPanel() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordReset, setPasswordReset] = useState(false);
  const [resetError, setResetError] = useState("");

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

        if (process.env.NODE_ENV !== "production") {
          console.error("Password reset failed:", errorCode, errorMessage);
        }
        setPasswordReset(false);
        setResetError("Already reset password!");
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

  // Handle Enter key press for reset password form
  const handleKeyDownReset = (event: React.KeyboardEvent) => {
    const isFormValid = password !== confirmPassword || password === "" || confirmPassword === "";
    if (event.key === "Enter" && !isFormValid) {
      event.preventDefault();
      handleSubmit();
    }
  };

  // Handle Enter key press for success screen
  const handleKeyDownSuccess = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      window.location.href = "/signin";
    }
  };

  useEffect(() => {
    if (password !== "" && confirmPassword !== "") {
      trackPassword();
      trackConfirmPassword();
    }
  }, [password, confirmPassword]);

  return (
    <>
      {!passwordReset ? (
        <div className={styles.formContainer} onKeyDown={handleKeyDownReset}>
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
          {resetError && (
            <div className={styles.error}>
              <Image src="/red_exclamation.svg" alt="Warning!" width={18} height={18} />
              <p>{resetError}</p>
            </div>
          )}
          <div>
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
        <div className={styles.formContainer} onKeyDown={handleKeyDownSuccess}>
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
