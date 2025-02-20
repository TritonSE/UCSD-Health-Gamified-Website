import Image from "next/image";

import styles from "./Mod1Intro.module.css";

export default function Mod1Intro() {
  return (
    <div className={styles.container}>
      <span>
        <h1 className={styles.title}>INTRODUCTION</h1>
        <p className={styles.description}>
          E-bikes are popular for commuting, recreation, and transportation. To ensure a safe and
          enjoyable experience, it&apos;s crucial to understand the different e-bike classifications
          and the importance of riding legal e-bikes. This module will guide you through the process
          of choosing the best e-bike for your needs.
        </p>
      </span>
      <span className={styles.imageContainer}>
        <Image src="/bike.svg" width={446} height={229} alt="bike" className={styles.image} />
      </span>
    </div>
  );
}
