"use client";

import { useState } from "react";

import CreateAccountPanel from "../components/CreateAccountPanel";
import VerifyEmail from "../components/VerifyEmail";
import WelcomePanel from "../components/WelcomePanel/WelcomePanel";

import styles from "./SignUp.module.css";

export default function SignUp() {
  const [accountCreated, setAccountCreated] = useState("");

  return (
    <main className={styles.container}>
      <section className={styles.leftSide}>
        <WelcomePanel />
      </section>
      <section className={styles.rightSide}>
        {accountCreated !== "" ? (
          <VerifyEmail email={accountCreated} />
        ) : (
          <CreateAccountPanel setAccountCreated={setAccountCreated} />
        )}
      </section>
    </main>
  );
}
