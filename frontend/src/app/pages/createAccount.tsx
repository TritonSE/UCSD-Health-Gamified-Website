import WelcomePanel from "../components/welcomePanel";
import CreateAccountPanel from "../components/createAccountPanel";

import styles from "./createAccount.module.css";

export default function CreateAccount() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <WelcomePanel />
      </div>
      <div className={styles.rightSide}>
        <CreateAccountPanel />
      </div>
    </div>
  );
}
