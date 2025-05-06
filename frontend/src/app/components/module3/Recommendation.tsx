import Image from "next/image";
import React from "react";

import styles from "./Recommendation.module.css";

export default function Recommendation() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recommendation</h1>
      <div className={styles.svgs}>
        <Image
          width="301"
          height="231"
          src="/module3/helmet_rated.svg"
          alt="We recommend using helmets rated for higher speeds which will provide additional head coverage and protection!"
          className={styles.icon}
        />
        <Image
          width={382}
          height={461}
          src="/TimmyHelmet.svg"
          alt="Timmy with helmet"
          className={styles.icon}
        />
        <Image
          width="269"
          height="224"
          src="/module3/moped_rated.svg"
          alt="Moped rated or light motorcycle rated helmets will provide greater protection when compared to bicycle helmets."
          className={`${styles.icon} ${styles.mopedHelmet}`}
        />
      </div>
    </div>
  );
}
