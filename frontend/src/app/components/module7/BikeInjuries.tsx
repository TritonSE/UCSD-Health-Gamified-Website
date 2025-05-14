import Image from "next/image";
import React from "react";

import styles from "./BikeInjuries.module.css";

const Page2: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ARE YOU WEARING YOUR HELMET CORRECTLY?</h1>

      <div className={styles.content}>
        <div className={styles.textSection}>
          <h3 className={styles.subtitle}>Incorrect Ways</h3>
          <div className={`${styles.point} ${styles.point1}`}>
            <span className={styles.number}>1.</span>
            <p>
              &nbsp;<strong>Too Far Back:</strong> Leaves your forehead exposed, reducing
              &nbsp;protection.
            </p>
          </div>
          <div className={`${styles.point} ${styles.point2}`}>
            <span className={styles.number}>2.</span>
            <p>
              <strong>Too Far Forward:</strong> Obstructs vision and feels uncomfortable.
            </p>
          </div>
          <div className={`${styles.point} ${styles.point3}`}>
            <span className={styles.number}>3.</span>
            <p>
              <strong>Loose Straps:</strong> Won’t keep the helmet secure in a crash.
            </p>
          </div>
          <div className={`${styles.point} ${styles.point4}`}>
            <span className={styles.number}>4.</span>
            <p>
              <strong>Unbuckled Chin Strap:</strong> Helmet can fall off during impact, making it
              useless.
            </p>
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

export default Page2;
