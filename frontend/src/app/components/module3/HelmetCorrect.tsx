import Image from "next/image";
import React from "react";

import styles from "./HelmetCorrect.module.css";

const Page4: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ARE YOU WEARING YOUR HELMET CORRECTLY?</h1>

      <div className={styles.content}>
        <div className={styles.imageSection}>
          <Image
            src="/module3/goodhelmet.svg"
            width="250"
            height="250"
            alt="Correct Helmet Positions"
            className={styles.image}
          />
        </div>
        <div className={styles.textSection}>
          <h3 className={styles.subtitle}>Correct Ways</h3>
          <div className={`${styles.point} ${styles.point1}`}>
            <span className={styles.number}>1.</span>
            <p>
              <strong>Level & Low:</strong> Covers forehead (two fingers above eyebrows).
            </p>
          </div>
          <div className={`${styles.point} ${styles.point2}`}>
            <span className={styles.number}>2.</span>
            <p>
              <strong>Snug Straps:</strong> “V” shape under ears, tight chin strap.
            </p>
          </div>
          <div className={`${styles.point} ${styles.point3}`}>
            <span className={styles.number}>3.</span>
            <p>
              <strong>Secure Fit:</strong> No wobbling or shifting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
