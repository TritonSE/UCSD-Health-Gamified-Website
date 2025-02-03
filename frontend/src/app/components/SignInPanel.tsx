"use client";
import { LoginButton } from "./LoginButton";
import styles from "./SignInPanel.module.css";
import { TextBox } from "./TextBox";
import { useState } from "react";

export default function SignInPanel() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailInputError, setEmailInputError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  const trackEmail = (name: string, setErrorFunction: (error: string) => void) => {
    if (name == "" || name == null) {
      setErrorFunction("This field is required.");
    } else if (!name.includes("@") || !name.split("@")[1].includes(".")) {
      setErrorFunction("Please enter a valid email address.");
    } else {
      setErrorFunction("");
    }
  };

  const trackPassword = (password: string) => {
    if (password == "" || password == null) {
      setPasswordError("Please enter a password.");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className={styles.rightSideContainer}>
      <h1 className={styles.loginTitle}>Sign-In</h1>
      <div className={styles.createAccount}>
        <TextBox
          label="Email"
          type="text"
          placeholder="janedoe@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => trackEmail(email, setEmailInputError)}
          error={emailInputError}
        />
      </div>
      <div>
        <TextBox
          label="Password"
          type="password"
          placeholder="••••••"
          caption="Must be at least six characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => trackPassword(password)}
          error={passwordError}
        />
        <a className={styles.forgotPassword} href="">
          Forgot password?
        </a>
      </div>
      <br />
      <div className={styles.createAccount}>
        <LoginButton label="Sign in" />
        <p className={styles.signInLink}>
          Don&apos;t have an account?{" "}
          <a className={styles.underlined} href="/signup">
            Sign-up
          </a>
        </p>
      </div>
    </div>
  );
}
