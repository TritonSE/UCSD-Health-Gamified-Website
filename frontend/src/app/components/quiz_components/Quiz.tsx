"use client";

import React, { useState } from "react";

import { Question } from "./Question";
import styles from "./Quiz.module.css";
import { Submit } from "./Submit";

type QuizProps = {
  title: string;
  questions: {
    question: string;
    options: string[];
  }[];
};

export const Quiz = ({ title, questions }: QuizProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});

  const handleSelect = (questionIndex: number, answer: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
  };

  return (
    <div className={styles.quizBox}>
      <div className={styles.title}>
        <span className={styles.titleFont}>{title}</span>
        <img src={"/close.svg"} />
      </div>
      <div className={styles.questionList}>
        {questions.map((q, index) => (
          <Question
            key={index}
            question={q.question}
            options={q.options}
            selected={(selectedAnswers[index] as "A." | "B." | "C." | "D." | "E.") || null}
            onSelect={(answer) => {
              handleSelect(index, answer);
            }}
          />
        ))}
      </div>
      <Submit />
    </div>
  );
};
