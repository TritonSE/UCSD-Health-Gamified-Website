import BackToSignIn from "./BackToSignIn";
import styles from "./ForgotPasswordForm.module.css";

export default function ForgotPasswordEmailSent({ _email }: { _email: string }) {
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
        <a href="" className={styles.link}>
          Click to resend
        </a>
      </div>
    </div>
  );
}
