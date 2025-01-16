import { LoginButton } from "./loginButton";
import styles from "./rightSide.module.css";
import { TextBox } from "./textBox";

export default function RightSide() {
  return (
    <div>
      <h1 className={styles.loginTitle}>Sign In</h1>
      <div className={styles.login}>
        <TextBox label="Email" type="text" />
      </div>
      <div className={styles.login}>
        <TextBox label="Password" type="password" link="" linkLabel="Forgot Password?" /> <br />
      </div>
      <div className={styles.login}>
        <LoginButton />
        <p className={styles.signUpLink}>
          Don&lsquo;t have an account? <a href="">Sign up</a>
        </p>
      </div>
    </div>
  );
}
