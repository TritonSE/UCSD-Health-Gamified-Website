import Image from "next/image";

import styles from "./WelcomePanel.module.css";

export default function WelcomePanel() {
  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.components}>
        <div className={styles["svg-container"]}>
          <Image
            src="/Timmy.svg"
            alt="Timmy, the tire mascot"
            width={320}
            height={417}
            aria-hidden
          />
        </div>
        <div className={styles.positionedText}>
          <h2>Welcome to the E-Bike Training Course!</h2>
        </div>
        {/* <div>
          <Image src="/logos.svg" alt="Business Logos" width={350} height={55} />
        </div> */}
      </div>
    </div>
  );
}
