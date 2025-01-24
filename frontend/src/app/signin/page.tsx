import LeftSide from "../components/leftSide";
import { LoginButton } from "../components/loginButton";
import { TextBox } from "../components/textBox";

import styles from "./SignIn.module.css";

export default function SignIn() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <LeftSide />
      </div>

      <div className={styles.rightSide}>
        <div>
          <h1 className={styles.loginTitle}>Sign-In</h1>
          <div className={styles.createAccount}>
            <TextBox label="Email" type="text" placeholder="name@gmail.com" />
          </div>
          <div>
            <TextBox label="Password" type="password" placeholder="••••••" showPasswordToggle />
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
      </div>
    </div>
  );
}
