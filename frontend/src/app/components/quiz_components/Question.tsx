import React from "react";

import styles from "./Question.module.css";
import { QuizButton } from "./QuizButton";

type QuestionProps = {
  question: string;
  options: string[];
  selected: "A." | "B." | "C." | "D." | "E." | null;
  onSelect: (answer: "A." | "B." | "C." | "D." | "E.") => void;
};

export const Question = ({ question, options, selected, onSelect }: QuestionProps) => {
  const letters = ["A.", "B.", "C.", "D."];

  return (
    <div className={styles.quizContainer}>
      <span className={styles.question}>{question}</span>
      <div className={styles.buttonsContainer}>
        {options.map((option, index) => (
          <QuizButton
            key={index}
            label={option}
            kind={selected === letters[index] ? "selected" : "primary"}
            letter={letters[index] as "A." | "B." | "C." | "D." | "E."}
            onClick={() => {
              onSelect(letters[index] as "A." | "B." | "C." | "D." | "E.");
            }}
          />
        ))}
      </div>
    </div>
  );
};