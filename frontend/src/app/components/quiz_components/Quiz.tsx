"use client";

import React, { useState } from "react";

import { ExitNotif } from "./ExitNotif";
import { Incorrect } from "./Incorrect";
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
  }[];
};

export const Quiz = ({ title, questions }: QuizProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [cancel, setCancel] = useState<boolean>(false);
  const [checkSubmit, setCheckSubmit] = useState<boolean>(false);
  const [starting, setStarting] = useState<boolean>(false);

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
    // TODO
    setStarting(false);
    setCheckSubmit(false);
  };

  const handleStart = () => {
    setStarting(true);
  };

  const handleSelect = (questionIndex: number, answer: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
  };

  return (
    <div className={styles.bigDiv}>
      {!starting && <TitleScreen handleStart={handleStart} />};
      {starting && (
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
            <img src={"/close.svg"} style={{ cursor: "pointer" }} onClick={handlePressCancel} />
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
            {/* This is a test for the incorrect module */}
            <Incorrect message="YOUR WRONG WRONG WRONG lets test out the legnth of this and how it grows grow grow grow grow grow grow grow grow grow grow grow grow grow grow grow " />
          </div>
          <Submit handleSubmit={handlePressSubmit} />
        </div>
      )}
      ;
    </div>
  );
};
