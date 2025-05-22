import Image from "next/image";
import React from "react";

import styles from "./Question.module.css";
import { QuizButton } from "./QuizButton";

type QuestionProps = {
  question: string;
  subQuestion?: string;
  image?: string;
  imageW?: number;
  imageH?: number;
  options: string[];
  selected: "A." | "B." | "C." | "D." | "E." | "F." | "G." | "H." | null;
  onSelect: (answer: "A." | "B." | "C." | "D." | "E." | "F." | "G." | "H.") => void;
  isSubmitted: boolean;
  isCorrect: boolean;
  correctAnswer: string;
};

export const Question = ({
  question,
  image,
  imageW,
  imageH,
  options,
  selected,
  onSelect,
  isSubmitted,
  isCorrect,
  correctAnswer,
}: QuestionProps) => {
  const letters = ["A.", "B.", "C.", "D.", "E.", "F.", "G.", "H."];

  const getButtonState = (buttonIndex: number) => {
    if (isSubmitted && letters[buttonIndex] === correctAnswer) {
      return "correct";
    }

    if (isSubmitted && selected === letters[buttonIndex]) {
      return isCorrect ? "correct" : "wrong";
    }

    return selected === letters[buttonIndex] ? "selected" : "primary";
  };

  return (
    <div className={styles.quizContainer}>
      <span className={styles.question}>{question}</span>
      {image && imageW && imageH && (
        <Image src={image} alt="Image for question" width={imageW} height={imageH} />
      )}
      <div className={styles.buttonsContainer}>
        {options.map((option, index) => (
          <QuizButton
            key={index}
            label={option}
            kind={getButtonState(index)}
            letter={letters[index] as "A." | "B." | "C." | "D." | "E." | "F." | "G." | "H."}
            submitted={isSubmitted}
            onClick={() => {
              onSelect(letters[index] as "A." | "B." | "C." | "D." | "E." | "F." | "G." | "H.");
            }}
          />
        ))}
      </div>
    </div>
  );
};
