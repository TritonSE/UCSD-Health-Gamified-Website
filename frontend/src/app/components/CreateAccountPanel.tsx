"use client";
import styles from "./CreateAccountPanel.module.css";
import { LoginButton } from "./LoginButton";
import { TextBox } from "./TextBox";
import { auth } from "../firebase-config.js";
import { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

export default function CreateAccountPanel() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailInputError, setEmailInputError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = () => {
    if (
      firstNameError ||
      lastNameError ||
      emailInputError ||
      passwordError ||
      !firstName ||
      !lastName ||
      !email ||
      !password
    ) {
      setError("Please fill out all fields appropriately.");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setError("");
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          sendEmailVerification(user)
            .then(() => {
              localStorage.setItem("emailForSignIn", email);
              localStorage.setItem("user", JSON.stringify(user));
              window.location.href = "/verifyemail";
            })
            .catch((error) => {
              console.error("Error sending verification email: ", error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          if (errorCode === "auth/email-already-in-use") {
            setError("Email already in use!");
          }
          setEmail("");
          setPassword("");
        });
    }
  };

  const trackField = (name: string, setErrorFunction: (error: string) => void) => {
    if (name == "" || name == null) {
      setErrorFunction("This field is required.");
    } else {
      setErrorFunction("");
    }
  };

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
    if (password.length < 6) {
      setPasswordError("Password must be at least six characters.");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className={styles.createAccountContainer}>
      <h1 className={styles.loginTitle}>Create an Account</h1>
      <div className={styles.inputContainer}>
        <TextBox
          label="First Name"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          onBlur={() => trackField(firstName, setFirstNameError)}
          placeholder="Jane"
          error={firstNameError}
        />
        <TextBox
          label="Last Name"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          onBlur={() => trackField(lastName, setLastNameError)}
          placeholder="Doe"
          error={lastNameError}
        />
        <TextBox
          label="Email"
          type="text"
          placeholder="janedoe@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => trackEmail(email, setEmailInputError)}
          error={emailInputError}
        />
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
      </div>
      {error && (
        <div className={styles.error}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <circle cx="9" cy="9" r="6" fill="#B93B3B" />
            <path
              d="M9 11.25C9.41421 11.25 9.75 11.5858 9.75 12C9.75 12.4142 9.41421 12.75 9 12.75C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25Z"
              fill="white"
            />
            <path
              d="M9.5625 10.125C9.5625 10.4357 9.31066 10.6875 9 10.6875C8.68934 10.6875 8.4375 10.4357 8.4375 10.125V6C8.4375 5.68934 8.68934 5.4375 9 5.4375C9.31066 5.4375 9.5625 5.68934 9.5625 6V10.125Z"
              fill="white"
            />
          </svg>
          <p>{error}</p>
        </div>
      )}
      <div className={styles.createAccount}>
        <LoginButton label="Sign Up" onClick={handleSignIn} />
        <p className={styles.signInLink}>
          Already have an account? <a href="/signin">Sign-in</a>
        </p>
      </div>
    </div>
  );
}
