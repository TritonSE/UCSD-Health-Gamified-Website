import { sendPasswordResetEmail } from "firebase/auth";

import { auth } from "../firebase-config.js";

import BackToSignIn from "./BackToSignIn";
import styles from "./ForgotPasswordForm.module.css";

export default function ForgotPasswordEmailSent({ _email }: { _email: string }) {
  const resendResetEmail = () => {
    const redirectUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}/auth`
        : "https://ucsd-health-gamified-website.vercel.app/auth";

    sendPasswordResetEmail(auth, _email, { url: redirectUrl })
      .then(() => {
        console.log("Success!");
      })
      .catch((error: unknown) => {
        const firebaseError = error as { code?: string; message: string };
        const errorCode = firebaseError.code ?? "unknown_error";
        const errorMessage = firebaseError.message;

        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className={styles.formContainer}>
      {/* sign in link */}
      <BackToSignIn />
      {/* heading */}
      <h1 className={styles.formTitle}>Email Sent!</h1>
      {/* description */}
      <div className={`${styles.formField} ${styles.smallSpaceBelow}`}>
        We sent an email to <b>{_email}</b> with a link to reset your password.
      </div>
      {/* click to resend */}
      <div className={`${styles.formField} ${styles.largeSpaceBelow}`}>
        Didn&apos;t see an email?{" "}
        <a href="#" onClick={resendResetEmail} className={styles.link}>
          Click to resend
        </a>
      </div>
    </div>
  );
}
