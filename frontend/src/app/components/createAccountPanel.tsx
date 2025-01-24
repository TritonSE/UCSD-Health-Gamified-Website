import { LoginButton } from "./loginButton";
import styles from "./createAccountPanel.module.css";
import { TextBox } from "./textBox";

export default function CreateAccountPanel() {
  return (
    <div>
      <h1 className={styles.loginTitle}>Create an Account</h1>
      <div className={styles.createAccount}>
        <TextBox label="First Name" type="text" placeholder="Jane" />
      </div>
      <div className={styles.createAccount}>
        <TextBox label="Last Name" type="text" placeholder="Doe" />
      </div>
      <div className={styles.createAccount}>
        <TextBox label="Email" type="text" placeholder="janedoe@gmail.com" />
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
