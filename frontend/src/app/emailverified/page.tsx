"use client";

import EmailVerifiedPanel from "../components/EmailVerifiedPanel";
import WelcomePanel from "../components/WelcomePanel/WelcomePanel";

import styles from "./EmailVerified.module.css";

export default function EmailVerified() {
  return (
    <main className={styles.container}>
      <section className={styles.leftSide}>
        <WelcomePanel />
      </section>
      <section className={styles.rightSide}>
        <EmailVerifiedPanel />
      </section>
    </main>
  );
}
