import Image from "next/image";

import styles from "./leftSide.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.components}>
        <div className={styles["svg-container"]}>
          <Image src="/Timmy.svg" alt="Timmy!" width={320} height={417} />
        </div>
        <div className={styles.positionedText}>
          <h1>Welcome to the E-Bike Training Course!</h1>
        </div>
        <div>
          <Image src="/logos.svg" alt="Business Logos" width={350} height={55} />
        </div>
      </div>
    </div>
  );
}
