import Image from "next/image";
import React from "react";

import styles from "./Question.module.css";
import { QuizButton } from "./QuizButton";

type MultiSelectQuestionProps = {
  question: string;
  subQuestion?: string;
  image?: string;
  imageW?: number;
  imageH?: number;
  options: string[];
  selected: string[];
  onSelect: (answer: string) => void;
  isSubmitted: boolean;
  correctAnswers: string[];
};

export const MultiSelectQuestion = ({
  question,
  subQuestion,
  image,
  imageW,
  imageH,
  options,
  selected,
  onSelect,
  isSubmitted,
  correctAnswers,
}: MultiSelectQuestionProps) => {
  const letters = ["A.", "B.", "C.", "D.", "E.", "F.", "G.", "H."];

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
      {subQuestion && (
        <div>
          <br />
          <span className={styles.question}>{subQuestion}</span>
          <br />
        </div>
      )}
      {image && imageW && imageH && (
        <Image src={image} alt="Image for question" width={imageW} height={imageH} />
      )}
      {/* {!isSubmitted && <span className={styles.selectAll}>*Select all that apply.</span>} */}
      <div className={styles.buttonsContainer}>
        {options.map((option, index) => (
          <QuizButton
            key={index}
            label={option}
            kind={getButtonState(index)}
            letter={letters[index] as "A." | "B." | "C." | "D." | "E." | "F." | "G." | "H."}
            submitted={isSubmitted}
            questionType="Multiple"
            onClick={() => {
              toggleSelection(letters[index]);
            }}
          />
        ))}
      </div>
    </div>
  );
};
