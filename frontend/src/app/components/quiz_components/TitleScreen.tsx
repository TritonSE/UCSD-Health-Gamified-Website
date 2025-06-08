"use client";

import Image from "next/image";
import React from "react";

import styles from "./TitleScreen.module.css";

export const TitleScreen = ({
  handleStart,
  ...props
}: { handleStart: () => void } & React.ComponentProps<"button">) => {
  return (
    <section id={styles.container}>
      <div className={styles.titleScreen}>
        <Image
          className={styles.hideMobile}
          src="/TimmyStart.svg"
          width={260}
          height={271}
          alt="Timmy the Tire Start picture"
        />
        <div className={styles.ready}>
          <h1 className={styles.title}>READY TO TAKE THE MODULE QUIZ?</h1>
          <p className={styles.description}>
            Before proceeding to the next module, you&#39;ll need to complete a short quiz to test
            your understanding of the material covered in this module.
            <br />
            <br />A score of <span className={styles.descriptionBold}>75% or higher</span> is
            required to move on to the next module! Good luck!
          </p>
          <button className={styles.button} onClick={handleStart} {...props}>
            <p id={styles.buttonText}>Start Quiz</p>
          </button>
        </div>
      </div>
    </section>
  );
};
