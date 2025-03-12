"use client";

import Image from "next/image";
import React, { useState } from "react";

import { TitleScreen } from "../quiz_components/TitleScreen";

import styles from "./MiniQuiz.module.css";
import Mod1Risks from "./Mod1Risks";
import Mod1WhyNotBike from "./Mod1WhyNotBike";

export default function MiniQuiz() {
  const [answer, setAnswer] = useState<string | null>(null);

  return (
    <>
      <div className={`${styles.quizContainer} ${!answer ? styles.extraPadding : ""}`}>
        <div className={styles.quizItem}>
          <h1 className={styles.quizTitle}>
            Let’s talk about “Bicycle Shaped Objects” and Electric Motorcycles
          </h1>
        </div>
        <div className={`${styles.question} ${styles.quizItem}`}>
          <div className={styles.form}>
            <div className={styles.questionImage}>
              <Image
                src="/module1/electric_cycle.svg"
                width={480}
                height={333}
                alt="Electric Motorcycle"
              />
            </div>
            <div className={styles.options}>
              <p>Are they bicycles?</p>
              <label
                className={styles.optionLabel}
                onClick={() => {
                  setAnswer("yes");
                }}
              >
                <input type="radio" name="isBicycle" value="yes" className={styles.optionInput} />
                Yes
              </label>
              <label
                className={styles.optionLabel}
                onClick={() => {
                  setAnswer("no");
                }}
              >
                <input type="radio" name="isBicycle" value="no" className={styles.optionInput} />
                No
              </label>
            </div>
          </div>
          <h1 className={`${styles.title} ${!answer ? styles.hidden : ""}`}>
            {answer === "yes" ? "They're " : "Correct, they’re "} <span>NOT BICYCLES!</span> Here’s
            why:
          </h1>
        </div>
      </div>

      <div className={styles.quizItem}>
        {answer && (
          <>
            <div className={styles.visible}>
              <Mod1WhyNotBike />
              <Mod1Risks />
              {/* quiz */}
              <div className={styles.quiz}>
                <TitleScreen
                  handleStart={() => {
                    console.log("Quiz has started.");
                  }}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
