import CreateAccountPanel from "../components/CreateAccountPanel";
import WelcomePanel from "../components/WelcomePanel";

import styles from "./SignUp.module.css";

export default function SignUp() {
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
