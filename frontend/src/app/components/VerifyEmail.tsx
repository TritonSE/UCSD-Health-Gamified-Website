"use client";
import { sendEmailVerification } from "firebase/auth";
import { useEffect, useState } from "react";

import { auth } from "../firebase-config.js";

import BackToSignIn from "./BackToSignIn";
import styles from "./VerifyEmail.module.css";

export default function VerifyEmail() {
  const [email, setEmail] = useState<string>("");
  //const [user, setUser] = useState<any>(null);

  const resendEmail = () => {
    const user = auth.currentUser;
    if (user) {
      sendEmailVerification(user)
        .then(() => {
          console.log("Email sent.");
        })
        .catch((error) => {
          console.error("Error sending verification email: ", error);
        });
    } else {
      console.error("No user found.");
    }
  };

  useEffect(() => {
    const emailForSignIn = localStorage.getItem("emailForSignIn");
    //const user = localStorage.getItem("user");
    if (emailForSignIn) {
      setEmail(emailForSignIn);
      localStorage.removeItem("emailForSignIn");
      localStorage.setItem("emailForVerify", emailForSignIn);
      console.log("Email for verify: ", localStorage.getItem("emailForVerify"));
    }
  });

  return (
    <div className={styles.verifyEmail}>
      <BackToSignIn />
      <h1>Verify Your Email</h1>
      <p className={styles.wrapText}>
        We sent an email to <span className={styles.email}>{email}</span>
        <br /> to verify your account.
      </p>
      <br />
      <br />
      <p>
        Didn&apos;t receive an email?{" "}
        <a href="#" onClick={resendEmail}>
          Click to resend
        </a>
      </p>
    </div>
  );
}
