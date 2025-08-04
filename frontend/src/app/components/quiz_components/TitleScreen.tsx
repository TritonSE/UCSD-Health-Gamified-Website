"use client";
import Image from "next/image";
import React from "react";

import { showErrorToast } from "../../utils/toastUtils";

import styles from "./TitleScreen.module.css";

export const TitleScreen = ({
  finalModule,
  handleStart,
  ...props
}: {
  finalModule: boolean;
  handleStart: () => void | Promise<void>;
} & React.ComponentProps<"button">) => {
  const handleClick = async () => {
    try {
      await handleStart();
    } catch (err) {
      showErrorToast("Something went wrong starting the quiz.");
    }
  };

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
          <h1 className={styles.title}>
            {finalModule ? "READY TO TAKE THE FINAL TEST?" : "READY TO TAKE THE MODULE QUIZ?"}
          </h1>
          <p id={styles.description}>
            {finalModule ? (
              <>
                To receive your certificate, you&#39;ll need to complete a cumulative test to check
                your understanding of the material covered in this course.
                <br />
                <br />A score of <span id={styles.descriptionBold}>75% or higher</span> is required
                to pass! Good luck!
              </>
            ) : (
              <>
                Before proceeding to the next module, you&#39;ll need to complete a short quiz to
                test your understanding of the material covered in this module.
                <br />
                <br />A score of <span id={styles.descriptionBold}>75% or higher</span> is required
                to move on to the next module! Good luck!
              </>
            )}
          </p>
          <button className={styles.button} onClick={() => void handleClick()} {...props}>
            <p id={styles.buttonText}>Start Quiz</p>
          </button>
        </div>
      </div>
    </section>
  );
};
