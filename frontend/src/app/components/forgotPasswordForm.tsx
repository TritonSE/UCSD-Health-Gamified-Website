import React, { useState } from "react";

import BackToSignIn from "./backToSignIn";
import styles from "./forgotPasswordForm.module.css";
import { LoginButton } from "./loginButton";
import { TextBox } from "./textBox";

export default function RightSide({ setEmailState }: { setEmailState: (email: string) => void }) {
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className={styles.formField}>
        <LoginButton
          label="Send link"
          onClick={() => {
            setEmailState(email);
          }}
        />
      </div>
    </div>
  );
}
