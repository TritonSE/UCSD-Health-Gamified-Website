"use client";

import Image from "next/image";
import React from "react";

import styles from "./TitleScreen.module.css";

export const TitleScreen = ({
  handleStart,
  text,
  ...props
}: {
  handleStart: () => void;
  text: { title: string; description: string; passOrModule: string };
} & React.ComponentProps<"button">) => {
  return (
    <div className={styles.titleScreen}>
      <Image
        className={styles.hideMobile}
        src="/TimmyStart.svg"
        width={260}
        height={271}
        alt="Timmy the Tire Start picture"
      />
      <div className={styles.ready}>
        <h1 className={styles.title}>{text.title}</h1>
        <p className={styles.description}>
          {text.description}
          <br />
          <br />A score of <span className={styles.descriptionBold}>75% or higher</span> is required
          to {text.passOrModule}! Good luck!
        </p>
        <button className={styles.button} onClick={handleStart} {...props}>
          <p className={styles.buttonText}>Start Quiz</p>
        </button>
      </div>
    </div>
  );
};
