import LeftSide from "../components/leftSide";
import RightSide from "../components/rightSide";

import styles from "./createAccount.module.css";

export default function createAccount() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <LeftSide />
      </div>
      <div className={styles.rightSide}>
        <RightSide />
      </div>
    </div>
  );
}
