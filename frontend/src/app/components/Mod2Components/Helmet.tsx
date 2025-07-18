"use client";

import Image from "next/image";

import FlipCard from "../FlippedCard/FlippedCard";

import styles from "./mod2.module.css";

export default function Helmet() {
  return (
    <section className={styles.container}>
      <div className={styles.headerText}>CHOOSING THE RIGHT HELMET</div>

      <div className={styles.gridLayout}>
        {/* Top Center Card */}
        <div className={styles.topCenter}>
          <FlipCard
            frontImage="/Icon1.svg"
            frontText="Fit"
            backContent="Proper fit is essential for safety. The helmet should sit snugly on your head without feeling too tight or loose. Adjust the straps to secure the helmet in place."
          />
        </div>

        {/* Upper Left Card */}
        <div className={styles.upperLeft}>
          <FlipCard
            frontImage="/Icon2.svg"
            frontText="Safety Standards"
            backContent="Ensure the helmet meets safety standards like CPSC (Consumer Product Safety Commission) or EN (European Norm)."
          />
        </div>

        {/* Upper Right Card */}
        <div className={styles.upperRight}>
          <FlipCard
            frontImage="/Icon3.svg"
            frontText="Ventilation"
            backContent="Good ventilation helps prevent overheating and fogging. Look for helmets with vents."
          />
        </div>

        {/* Helmet Image */}
        <div className={styles.image}>
          <Image src="/helmet.svg" alt="Helmet Diagram" width={330} height={258} />
        </div>

        {/* Bottom Left Card */}
        <div className={styles.bottomLeft}>
          <FlipCard
            frontImage="/Icon4.svg"
            frontText="Visibility"
            backContent="Consider light colored helmets with reflective elements or lights for increased visibility."
          />
        </div>

        {/* Bottom Right Card */}
        <div className={styles.bottomRight}>
          <FlipCard
            frontImage="/Icon5.svg"
            frontText="Style"
            backContent="Choose a helmet that you'll enjoy wearing and that complements your riding style."
          />
        </div>
      </div>
    </section>
  );
}
