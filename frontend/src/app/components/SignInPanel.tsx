"use client";
import { UserCredential, signInWithEmailAndPassword } from "firebase/auth";

import { useEffect, useState } from "react";
import Image from "next/image";

import { LoginButton } from "./LoginButton";
import styles from "./SignInPanel.module.css";
import { TextBox } from "./TextBox";
import { auth } from "../firebase-config.js";

export default function SignInPanel() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [signInError, setSignInError] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const firebaseAuth = (): Promise<UserCredential> => {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, loginInfo.email, loginInfo.password)
        .then((userCredential) => {
          const user = userCredential.user;
          resolve(userCredential);
        })
        .catch((error) => {
          const firebaseError = error as { code?: string; message: string };
          const errorCode = firebaseError.code ?? "unknown_error";
          const errorMessage = firebaseError.message;
          console.log(errorCode, errorMessage);
          reject(error);
        });
    });
  };

  const handleChange = (field: string, value: string) => {
    setLoginInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    firebaseAuth()
      .then((userCredential) => {
        console.log("Firebase sign in successful");
        setSignInError("");
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error during the sign-in process:", error);
        setSignInError("Incorrect email or password.");
      });
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
        <a className={styles.forgotPassword} href="/forgotpassword">
          Forgot password?
        </a>
      </div>
      <br />
      <div>
        {signInError && (
          <div className={styles.error}>
            <Image src="/red_exclamation.svg" alt="Warning!" width={18} height={18} />
            <p>{signInError}</p>
          </div>
        )}
      </div>
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
