"use client";
import WelcomePanel from "../components/WelcomePanel";
import { useState, useEffect } from "react";

import styles from "./VerifyEmail.module.css";
import { auth } from "../firebase-config.js";
import { sendEmailVerification } from "firebase/auth";

export default function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const email = localStorage.getItem("emailForSignIn");
    const user = localStorage.getItem("user");
    if (email) {
      setEmail(email);
      localStorage.removeItem("emailForSignIn");
      localStorage.setItem("emailForVerify", email);
      console.log("Email for verify: ", localStorage.getItem("emailForVerify"));
    }
  });

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

  return (
    <main className={styles.container}>
      <section className={styles.leftSide}>
        <WelcomePanel />
      </section>
      <section className={styles.rightSide}>
        <div className={styles.verifyEmail}>
          <div className={styles.backToSignIn}>
            <button onClick={() => (window.location.href = "/signin")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.7071 6.29289C15.0976 6.68342 15.0976 7.31658 14.7071 7.70711L10.4142 12L14.7071 16.2929C15.0976 16.6834 15.0976 17.3166 14.7071 17.7071C14.3166 18.0976 13.6834 18.0976 13.2929 17.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L13.2929 6.29289C13.6834 5.90237 14.3166 5.90237 14.7071 6.29289Z"
                  fill="#1C3A29"
                />
              </svg>
              <p>Back to Sign-in</p>
            </button>
          </div>
          <h1>Verify Your Email</h1>
          <p className={styles.wrapText}>
            We sent an email to <span className={styles.email}>{email}</span>
            <br /> to verify your account.
          </p>
          <br />
          <br />
          <p>
            Didn't receive an email?{" "}
            <a href="#" onClick={resendEmail}>
              Click to resend
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
