"use client";

import React, { useState } from "react";

import { ExitNotif } from "./ExitNotif";
import { Grade } from "./Grade";
import { NextButtons } from "./NextButtons";
import { Question } from "./Question";
import styles from "./Quiz.module.css";
import { Submit } from "./Submit";
import { SubmitNotif } from "./SubmitNotif";
import { TitleScreen } from "./TitleScreen";

type QuizProps = {
  title: string;
  questions: {
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
};

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export const Quiz = ({ title, questions: originalQuestions }: QuizProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [cancel, setCancel] = useState<boolean>(false);
  const [checkSubmit, setCheckSubmit] = useState<boolean>(false);
  const [starting, setStarting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [label, setLabel] = useState<string>("Next Module");
  const [score, setScore] = useState<number>(0);
  const [randomizedQuestions, setRandomizedQuestions] = useState(() => originalQuestions);

  const handlePressCancel = () => {
    setCancel(!cancel);
  };

  const handleLeave = () => {
    // TODO
    setStarting(false);
    setCancel(false);
  };

  const handlePressSubmit = () => {
    setCheckSubmit(!checkSubmit);
  };

  const handleSubmit = () => {
    let correctCount = 0;
    for (const [index, answer] of Object.entries(selectedAnswers)) {
      if (answer === randomizedQuestions[Number(index)].correctAnswer) {
        correctCount++;
      }
    }
    const calculatedScore = (correctCount / randomizedQuestions.length) * 100;
    if (calculatedScore < 75) {
      setLabel("Retake Quiz");
    } else if (calculatedScore > 75) {
      setLabel("Next Module");
    }
    if (calculatedScore < 75 && calculatedScore > 74) {
      setScore(Math.floor(calculatedScore));
    } else {
      setScore(Math.round(calculatedScore));
    }
    window.scrollTo(0, 0);
    setSubmitted(true);
    setCheckSubmit(false);
  };

  const handleStart = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    setStarting(true);
    setRandomizedQuestions(
      shuffleArray(
        originalQuestions.map((q) => {
          // Same logic as above for re-randomizing
          const correctOptionIndex = ["A.", "B.", "C.", "D."].indexOf(q.correctAnswer);
          const correctOptionText = q.options[correctOptionIndex];
          const shuffledOptions = shuffleArray(q.options);
          const newCorrectIndex = shuffledOptions.indexOf(correctOptionText);
          const newCorrectAnswer = ["A.", "B.", "C.", "D."][newCorrectIndex];

          return {
            ...q,
            options: shuffledOptions,
            correctAnswer: newCorrectAnswer,
          };
        }),
      ),
    );
  };

  const handleSelect = (questionIndex: number, answer: string) => {
    if (submitted) {
      return;
    }
    setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
  };

  return (
    <div className={styles.bigDiv}>
      {!starting && <TitleScreen handleStart={handleStart} />}
      {starting && (
        <div className={styles.entireQuiz}>
          {submitted && <Grade score={score} />}
          <div className={styles.quizBox}>
            {cancel && (
              <div className={styles.overlay}>
                <ExitNotif cancelFunc={handlePressCancel} exitFunc={handleLeave} />
              </div>
            )}
            {checkSubmit && (
              <div className={styles.overlay}>
                <SubmitNotif cancelFunc={handlePressSubmit} submitFunc={handleSubmit} />
              </div>
            )}
            <div className={styles.title}>
              <span className={styles.titleFont}>{title}</span>
              {!submitted && (
                <img src={"/close.svg"} style={{ cursor: "pointer" }} onClick={handlePressCancel} />
              )}
            </div>
            <div className={styles.questionList}>
              {randomizedQuestions.map((q, index) => (
                <Question
                  key={index}
                  question={`${index + 1}. ${q.question}`}
                  options={q.options}
                  selected={(selectedAnswers[index] as "A." | "B." | "C." | "D." | "E.") || null}
                  onSelect={(answer) => {
                    handleSelect(index, answer);
                  }}
                  isSubmitted={submitted}
                  isCorrect={selectedAnswers[index] === q.correctAnswer}
                  correctAnswer={q.correctAnswer}
                />
              ))}
            </div>
            {!submitted && <Submit handleSubmit={handlePressSubmit} />}
          </div>
          {submitted && (
            <div className={styles.nextModule}>
              <NextButtons kind="primary" label={label} handleClick={handleLeave} />
              <NextButtons kind="secondary" label="Go Back" handleClick={handleLeave} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
