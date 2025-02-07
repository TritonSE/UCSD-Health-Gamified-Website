import React from "react";

import { Incorrect } from "./Incorrect";
import styles from "./Question.module.css";
import { QuizButton } from "./QuizButton";

type QuestionProps = {
  question: string;
  options: string[];
  selected: "A." | "B." | "C." | "D." | "E." | null;
  onSelect: (answer: "A." | "B." | "C." | "D." | "E.") => void;
  isSubmitted: boolean;
  isCorrect: boolean;
  correctAnswer: string;
};

export const Question = ({
  question,
  options,
  selected,
  onSelect,
  isSubmitted,
  isCorrect,
  correctAnswer,
}: QuestionProps) => {
  const letters = ["A.", "B.", "C.", "D."];

  const getButtonState = (buttonIndex: number) => {
    if (isSubmitted && letters[buttonIndex] === correctAnswer) {
      return "correct";
    }

    if (isSubmitted && selected === letters[buttonIndex]) {
      return isCorrect ? "correct" : "wrong";
    }

    return selected === letters[buttonIndex] ? "selected" : "primary";
  };

  const correctAnswerIndex = letters.indexOf(correctAnswer);
  const correctAnswerText = correctAnswerIndex !== -1 ? options[correctAnswerIndex] : "";

  return (
    <div className={styles.quizContainer}>
      <span className={styles.question}>{question}</span>
      <div className={styles.buttonsContainer}>
        {options.map((option, index) => (
          <QuizButton
            key={index}
            label={option}
            kind={getButtonState(index)}
            letter={letters[index] as "A." | "B." | "C." | "D." | "E."}
            onClick={() => {
              onSelect(letters[index] as "A." | "B." | "C." | "D." | "E.");
            }}
          />
        ))}
      </div>
      {isSubmitted && !isCorrect && (
        <Incorrect message={`Correct answer is ${correctAnswer} ${correctAnswerText}`} />
      )}
    </div>
  );
};
