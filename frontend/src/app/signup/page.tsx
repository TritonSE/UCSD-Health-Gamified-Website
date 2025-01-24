import CreateAccountPanel from "../components/CreateAccountPanel";
import WelcomePanel from "../components/WelcomePanel";

import styles from "./SignUp.module.css";

export default function SignUp() {
  return (
    <main className={styles.container}>
      <section className={styles.leftSide}>
        <WelcomePanel />
      </section>
      <section className={styles.rightSide}>
        <CreateAccountPanel />
      </section>
    </main>
  );
}
