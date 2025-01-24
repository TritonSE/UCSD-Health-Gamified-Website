import styles from "./CreateAccountPanel.module.css";
import { LoginButton } from "./LoginButton";
import { TextBox } from "./TextBox";

export default function CreateAccountPanel() {
  return (
    <div className={styles.createAccountContainer}>
      <h1 className={styles.loginTitle}>Create an Account</h1>
      <div className={styles.inputContainer}>
        <TextBox label="First Name" type="text" placeholder="Jane" />
        <TextBox label="Last Name" type="text" placeholder="Doe" />
        <TextBox label="Email" type="text" placeholder="janedoe@gmail.com" />
        <TextBox
          label="Password"
          type="password"
          placeholder="••••••"
          caption="Must be at least six characters"
        />
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
