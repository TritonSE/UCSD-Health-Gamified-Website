"use client";

import React, { useState } from "react";

import { ExitNotif } from "./ExitNotif";
import { Grade } from "./Grade";
import { Incorrect } from "./Incorrect";
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

export const Quiz = ({ title, questions }: QuizProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [cancel, setCancel] = useState<boolean>(false);
  const [checkSubmit, setCheckSubmit] = useState<boolean>(false);
  const [starting, setStarting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [label, setLabel] = useState<string>("Next Module");
  const [score, setScore] = useState<number>(0);

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
      if (answer === questions[Number(index)].correctAnswer) {
        correctCount++;
      }
    }
    const calculatedScore = (correctCount / questions.length) * 100;
    if (calculatedScore < 75 && calculatedScore > 74) {
      setScore(Math.floor(calculatedScore));
    } else {
      setScore(Math.round(calculatedScore));
    }
    window.scrollTo(0, 0);
    setSubmitted(true);
    setCheckSubmit(false);
    if (score < 75) {
      setLabel("Retake Quiz");
    }
  };

  const handleStart = () => {
    setScore(0);
    setSelectedAnswers({});
    setSubmitted(false);
    setStarting(true);
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
              {questions.map((q, index) => (
                <Question
                  key={index}
                  question={q.question}
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
              {/* This is a test for the incorrect module */}
              <Incorrect message="Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test" />
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
      ;
    </div>
  );
};
