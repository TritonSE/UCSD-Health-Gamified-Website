"use client";

import Checkbox from "../../Checkbox/Checkbox";
import styles from "./SimpleWay.module.css";

export default function SimpleWay() {
  return (
    <section className={styles.container}>
      <div className={styles.header_container}>
        <h2 className={styles.headerText}>A SIMPLE WAY TO REMEMBER THE MAIN STUFF</h2>
        <p className={styles.headerSubtext}>
          By performing a regular ABC bike check, you can identify and address potential problems
          before they become more serious.
        </p>
      </div>
        <Checkbox />
        <p className={styles.text}>Click checklist to see the tips on the right!</p>
    </section>
  );
}