import Image from "next/image";

import Mod2Title from "../Mod2Title";

import styles from "./Mod1Intro.module.css";

export default function Mod1Intro() {
  return (
    <>
      <span className={styles.top}>
        <Mod2Title module_num={1} module_name="WHAT IS AN E BIKE?" />
      </span>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <span className={`${styles.textContainer} ${styles.float}`}>
            <h1 className={styles.title}>INTRODUCTION</h1>
            <p className={styles.description}>
              E Bikes are popular for commuting, recreation, and transportation. To ensure a safe
              and enjoyable experience, it&#39;s crucial to understand the different E Bike
              classifications and the importance of riding legal E Bikes. This module will guide you
              through the process of choosing the best E Bike for your needs.{" "}
            </p>
          </span>
          <span className={`${styles.imageContainer} ${styles.float}`}>
            <Image
              src="/TimmyRiding.svg"
              width={446}
              height={229}
              alt="bike"
              className={styles.image}
            />
          </span>
        </div>
      </div>
    </>
  );
}
