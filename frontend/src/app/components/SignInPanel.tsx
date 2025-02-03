"use client";

import { useEffect, useState } from "react";

import { LoginButton } from "./LoginButton";
import styles from "./SignInPanel.module.css";
import { TextBox } from "./TextBox";

export default function SignInPanel() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleChange = (field: string, value: string) => {
    setLoginInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("placeholder");
  };

  const trackEmail = (name: string) => {
    if (!name.includes("@") || !name.split("@")[1].includes(".")) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const checkFormValidity = () => {
    const { email, password } = loginInfo;
    const isValid = email !== "" && password !== "" && emailError === "";
    setIsButtonEnabled(isValid);
  };

  useEffect(() => {
    checkFormValidity();
  }, [loginInfo, emailError]);

  return (
    <div className={styles.rightSideContainer}>
      <h1 className={styles.loginTitle}>Sign-In</h1>
      <div className={styles.createAccount}>
        <TextBox
          label="Email"
          type="text"
          placeholder="name@gmail.com"
          value={loginInfo.email}
          onChange={(value) => {
            handleChange("email", value);
          }}
          onBlur={() => {
            trackEmail(loginInfo.email);
          }}
          error={emailError}
        />
      </div>
      <div>
        <TextBox
          label="Password"
          type="password"
          placeholder="••••••"
          value={loginInfo.password}
          onChange={(value) => {
            handleChange("password", value);
          }}
        />
        <a className={styles.forgotPassword} href="">
          Forgot password?
        </a>
      </div>
      <br />
      <div className={styles.createAccount}>
        <LoginButton label="Sign in" disabled={!isButtonEnabled} onClick={handleSubmit} />
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
