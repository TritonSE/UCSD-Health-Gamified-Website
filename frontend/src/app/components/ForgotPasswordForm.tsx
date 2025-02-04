import React, { useState } from "react";

import BackToSignIn from "./BackToSignIn";
import styles from "./ForgotPasswordForm.module.css";
import { LoginButton } from "./LoginButton";
import { TextBox } from "./TextBox";

export default function ForgotPasswordForm({
  setEmailState,
}: {
  setEmailState: (email: string) => void;
}) {
  const [email, setEmail] = useState("");

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
            setEmailState(email);
          }}
        />
      </div>
    </div>
  );
}
