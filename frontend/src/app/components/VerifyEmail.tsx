"use client";
import { sendEmailVerification } from "firebase/auth";
import Image from "next/image";
import { useEffect, useState } from "react";

import { auth } from "../firebase-config.js";

import BackToSignIn from "./BackToSignIn";
import styles from "./VerifyEmail.module.css";

export default function VerifyEmail() {
  const [email, setEmail] = useState<string>("");
  const [verificationError, setVerificationError] = useState("");

  const resendEmail = () => {
    const user = auth.currentUser;
    if (user) {
      sendEmailVerification(user)
        .then(() => {
          console.log("Email sent.");
        })
        .catch((error: unknown) => {
          console.error("Error sending verification email: ", error);

          const firebaseError = error as { code?: string; message: string };
          const errorCode = firebaseError.code ?? "unknown_error";

          if (errorCode === "auth/too-many-requests") {
            setVerificationError("Too many requests. Please try again later.");
          }
        });
    } else {
      console.error("No user found.");
    }
  };

  useEffect(() => {
    const emailForSignIn = localStorage.getItem("emailForSignIn");

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
