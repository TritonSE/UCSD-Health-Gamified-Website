import { LoginButton } from "./LoginButton";
import styles from "./SignInPanel.module.css";
import { TextBox } from "./TextBox";

export default function SignInPanel() {
  return (
    <div className={styles.rightSideContainer}>
      <h1 className={styles.loginTitle}>Sign-In</h1>
      <div className={styles.createAccount}>
        <TextBox label="Email" type="text" placeholder="name@gmail.com" />
      </div>
      <div>
        <TextBox label="Password" type="password" placeholder="••••••" />
        <a className={styles.forgotPassword} href="">
          Forgot password?
        </a>
      </div>
      <br />
      <div className={styles.createAccount}>
        <LoginButton label="Sign in" />
        <p className={styles.signInLink}>
          Don&apos;t have an account?{" "}
          <a className={styles.underlined} href="">
            Sign-up
          </a>
        </p>
      </div>
    </div>
  );
}
