"use client";
import { sendEmailVerification } from "firebase/auth";
import { useEffect, useState } from "react";

import { auth } from "../firebase-config.js";

import BackToSignIn from "./BackToSignIn";
import styles from "./VerifyEmail.module.css";
import Image from "next/image";

export default function VerifyEmail() {
  const [email, setEmail] = useState<string>("");
  const [verificationError, setVerificationError] = useState("");
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
          if (error.code === "auth/too-many-requests") {
            setVerificationError("Too many requests. Please try again later.");
          }
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
      {verificationError && (
        <div className={styles.error}>
          <Image src="/red_exclamation.svg" alt="Warning!" width={18} height={18} />
          <p>{verificationError}</p>
        </div>
      )}
    </div>
  );
}
