import React from "react";

import { Incorrect } from "./Incorrect";
import styles from "./Question.module.css";
import { QuizButton } from "./QuizButton";

type MultiSelectQuestionProps = {
  question: string;
  options: string[];
  selected: string[];
  onSelect: (answer: string) => void;
  isSubmitted: boolean;
  correctAnswers: string[];
  passed: boolean;
};

export const MultiSelectQuestion = ({
  question,
  options,
  selected,
  onSelect,
  isSubmitted,
  correctAnswers,
  passed,
}: MultiSelectQuestionProps) => {
  const letters = ["A.", "B.", "C.", "D."];

  const getButtonState = (buttonIndex: number) => {
    const currentLetter = letters[buttonIndex];

    if (isSubmitted) {
      const isCorrectAnswer = correctAnswers.includes(currentLetter);
      const wasSelected = selected.includes(currentLetter);

      if (isCorrectAnswer && wasSelected) {
        return "correct";
      }
      if (wasSelected) {
        return "wrong";
      }
    }

    return selected.includes(currentLetter) ? "selected" : "primary";
  };

  const toggleSelection = (letter: string) => {
    if (isSubmitted) return;

    onSelect(letter);
  };

  const isCorrect = () => {
    return (
      selected.length === correctAnswers.length && selected.every((s) => correctAnswers.includes(s))
    );
  };

  const getIncorrectMessage = () => {
    if (!passed && !isCorrect()) {
      return "That is not the correct combination of answers.";
    }
    const correctAnswerTexts = correctAnswers
      .map((letter) => {
        const index = letters.indexOf(letter);
        return `${letter} ${options[index]}`;
      })
      .join(", ");
    return `The correct answers are: ${correctAnswerTexts}`;
  };

  return (
    <div className={styles.quizContainer}>
      <span className={styles.question}>{question}</span>
      <div className={styles.buttonsContainer}>
        {options.map((option, index) => (
          <QuizButton
            key={index}
            label={option}
            kind={getButtonState(index)}
            letter={letters[index] as "A." | "B." | "C." | "D."}
            submitted={isSubmitted}
            onClick={() => {
              toggleSelection(letters[index]);
            }}
          />
        ))}
      </div>
      {isSubmitted && <Incorrect correct={isCorrect()} message={getIncorrectMessage()} />}
    </div>
  );
};
