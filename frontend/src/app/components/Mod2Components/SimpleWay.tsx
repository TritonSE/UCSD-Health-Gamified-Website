import Checkbox from "../Checkbox/Checkbox";

import styles from "./mod2.module.css";

export default function SimpleWay() {
  return (
    <section className={styles.container}>
      <div className={styles.headerText}>A SIMPLE WAY TO REMEMBER THE MAIN STUFF</div>
      <div className={styles.text}>
        By performing a regular ABC bike check, you can identify and address potential problems
        before they become more serious.
      </div>
      <Checkbox />
    </section>
  );
}
