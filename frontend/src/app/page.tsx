import styles from "./page.module.css";
import LeftSide from "./components/leftSide";
import RightSide from "./components/rightSide";

export default function Home() {
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
