"use client";
import { sendEmailVerification } from "firebase/auth";
import Image from "next/image";
import { useState } from "react";

import { auth } from "../firebase-config.js";

import BackToSignIn from "./BackToSignIn";
import styles from "./VerifyEmail.module.css";

export type VerifyEmailProps = {
  email: string;
};

export default function VerifyEmail({ email }: VerifyEmailProps) {
  const [verificationError, setVerificationError] = useState("");
  const [emailResent, setEmailResent] = useState("");

  const resendEmail = () => {
    const user = auth.currentUser;

    const redirectUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}/auth`
        : "https://ucsd-health-gamified-website.vercel.app/auth";

    if (user) {
      sendEmailVerification(user, { url: redirectUrl })
        .then(() => {
          setVerificationError("");
          setEmailResent("Email resent! Please wait 1 minute before trying again.");
        })
        .catch((error: unknown) => {
          console.error("Error sending verification email: ", error);

          const firebaseError = error as { code?: string; message: string };
          const errorCode = firebaseError.code ?? "unknown_error";

          if (errorCode === "auth/too-many-requests") {
            setEmailResent("");
            setVerificationError("Too many requests. Please try again later.");
          }
        });
    } else {
      console.error("No user found.");
    }
  };

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
      {emailResent && (
        <div className={styles.emailresent}>
          <p>{emailResent}</p>
        </div>
      )}
    </div>
  );
}
