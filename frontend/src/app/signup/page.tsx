"use client";

import { useState } from "react";

import CreateAccountPanel from "../components/CreateAccountPanel";
import VerifyEmail from "../components/VerifyEmail";
import WelcomePanel from "../components/WelcomePanel";

import styles from "./SignUp.module.css";

export default function SignUp() {
  const [isAccountCreated, setIsAccountCreated] = useState(false);

  return (
    <main className={styles.container}>
      <section className={styles.leftSide}>
        <WelcomePanel />
      </section>
      <section className={styles.rightSide}>
        {!isAccountCreated && <CreateAccountPanel setIsAccountCreated={setIsAccountCreated} />}
        {isAccountCreated && <VerifyEmail />}
      </section>
    </main>
  );
}
