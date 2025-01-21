"use client";

import React, { useState } from "react";

import styles from "./Question.module.css";
import { QuizButton } from "./QuizButton";

export type QuestionProps = {
  question: string;
  label1: string;
  label2: string;
  label3: string;
  label4: string;
};

export const Question = ({ question, label1, label2, label3, label4 }: QuestionProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (label: string) => {
    setSelected(label);
  };

  return (
    <div className={styles.quizContainer}>
      <span className={styles.question}>{question}</span>
      <div className={styles.buttonsContainer}>
        <QuizButton
          label={label1}
          kind={selected === "A" ? "selected" : "primary"}
          letter="A."
          onClick={() => {
            handleSelect("A");
          }}
        />
        <QuizButton
          label={label2}
          kind={selected === "B" ? "selected" : "primary"}
          letter="B."
          onClick={() => {
            handleSelect("B");
          }}
        />
        <QuizButton
          label={label3}
          kind={selected === "C" ? "selected" : "primary"}
          letter="C."
          onClick={() => {
            handleSelect("C");
          }}
        />
        <QuizButton
          label={label4}
          kind={selected === "D" ? "selected" : "primary"}
          letter="D."
          onClick={() => {
            handleSelect("D");
          }}
        />
      </div>
    </div>
  );
};
