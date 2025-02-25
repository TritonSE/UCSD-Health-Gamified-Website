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
};

export const MultiSelectQuestion = ({
  question,
  options,
  selected,
  onSelect,
  isSubmitted,
  correctAnswers,
}: MultiSelectQuestionProps) => {
  const letters = ["A.", "B.", "C.", "D.", "E."];

  const getButtonState = (buttonIndex: number) => {
    const currentLetter = letters[buttonIndex];

    if (isSubmitted) {
      if (correctAnswers.includes(currentLetter)) {
        return "correct";
      }
      if (selected.includes(currentLetter)) {
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
    const correctAnswerTexts = correctAnswers
      .sort()
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
      {!isSubmitted && <span className={styles.selectAll}>*Select all that apply.</span>}
      <div className={styles.buttonsContainer}>
        {options.map((option, index) => (
          <QuizButton
            key={index}
            label={option}
            kind={getButtonState(index)}
            letter={letters[index] as "A." | "B." | "C." | "D." | "E."}
            submitted={isSubmitted}
            questionType="Multiple"
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
