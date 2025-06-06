import SignInPanel from "../components/SignInPanel";
import WelcomePanel from "../components/WelcomePanel/WelcomePanel";

import styles from "./SignIn.module.css";

export default function SignIn() {
  return (
    <main className={styles.container}>
      <section className={styles.leftSide}>
        <WelcomePanel />
      </section>
      <section className={styles.rightSide}>
        <SignInPanel />
      </section>
    </main>
  );
}
