import { LoginButton } from "./loginButton";
import styles from "./rightSide.module.css";
import { TextBox } from "./textBox";

export default function RightSide() {
  return (
    <div>
      <h1 className={styles.loginTitle}>Create an Account</h1>
      <div className={styles.createAccount}>
        <TextBox label="Full Name" type="text" placeholder="First Last" />
      </div>
      <div className={styles.createAccount}>
        <TextBox label="Email" type="text" placeholder="name@gmail.com" />
      </div>
      <div className={styles.login}>
        <TextBox
          label="Password"
          type="password"
          placeholder="••••••"
          caption="Must be at least six characters"
        />
        <br />
      </div>
      <div className={styles.createAccount}>
        <LoginButton label="Sign Up" />
        <p className={styles.signInLink}>
          Already have an account? <a href="">Sign-in</a>
        </p>
      </div>
    </div>
  );
}