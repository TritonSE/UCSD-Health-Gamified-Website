import Image from "next/image";
import React from "react";

import styles from "./Helmet.module.css";

const Page4: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ARE YOU WEARING YOUR HELMET CORRECTLY?</h1>

      <div className={styles.content}>
        <div className={styles.textSection}>
          <h3 className={styles.subtitle}>Incorrect Ways</h3>
          <div className={`${styles.point} ${styles.point1}`}>
            <span className={styles.number}>1.</span>
            <span>
              &nbsp;&nbsp;<strong>Too Far Back:</strong> Leaves your forehead exposed,
              &nbsp;&nbsp;reducing protection.
            </span>
          </div>
          <div className={`${styles.point} ${styles.point2}`}>
            <span className={styles.number}>2.</span>
            <span>
              <strong>Too Far Forward:</strong> Obstructs vision and feels uncomfortable.
            </span>
          </div>
          <div className={`${styles.point} ${styles.point3}`}>
            <span className={styles.number}>3.</span>
            <span>
              <strong>Loose Straps:</strong> Won’t keep the helmet secure in a crash.
            </span>
          </div>
          <div className={`${styles.point} ${styles.point4}`}>
            <span className={styles.number}>4.</span>
            <span>
              <strong>Unbuckled Chin Strap:</strong> Helmet can fall off during impact, making it
              useless.
            </span>
          </div>
        </div>

        <div className={styles.imageSection}>
          <Image
            src="/module3/wrong_helmet_pos.svg"
            width="250"
            height="250"
            alt="Incorrect Helmet Positions"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Page4;
