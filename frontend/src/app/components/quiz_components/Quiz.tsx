"use client";

import Image from "next/image";
import React, { useState } from "react";

import { ExitNotif } from "./ExitNotif";
import { Grade } from "./Grade";
import { MultiSelectQuestion } from "./MultiSelectQuestion";
import { NextButtons } from "./NextButtons";
import { Question } from "./Question";
import styles from "./Quiz.module.css";
import { Submit } from "./Submit";
import { SubmitNotif } from "./SubmitNotif";
import { TitleScreen } from "./TitleScreen";

export type Question = {
  question: string;
  options: string[];
  correctAnswer: string | string[];
  type: "single" | "multiple";
};

type QuizProps = {
  title: string;
  description: string;
  questions: Question[];
};

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export const Quiz = ({ title, description, questions: originalQuestions }: QuizProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string[]>>({});
  const [cancel, setCancel] = useState<boolean>(false);
  const [checkSubmit, setCheckSubmit] = useState<boolean>(false);
  const [starting, setStarting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [label, setLabel] = useState<string>("Next Module");
  const [quizTitle, setTitle] = useState<string>(title);
  const [score, setScore] = useState<number>(0);
  const [randomizedQuestions, setRandomizedQuestions] = useState(() => originalQuestions);

  const handlePressCancel = () => {
    setCancel(!cancel);
  };

  const handleLeave = () => {
    // TODO
    setTitle(title);
    setStarting(false);
    setCancel(false);
  };

  const handlePressSubmit = () => {
    setCheckSubmit(!checkSubmit);
  };

  const handleSubmit = () => {
    let correctCount = 0;
    for (const [index, answers] of Object.entries(selectedAnswers)) {
      const question = randomizedQuestions[Number(index)];
      if (question.type === "multiple") {
        const isCorrect =
          answers.length === question.correctAnswer.length &&
          answers.every((a) => question.correctAnswer.includes(a));
        if (isCorrect) correctCount++;
      } else {
        if (answers[0] === question.correctAnswer) correctCount++;
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
    const quizElement = document.getElementById("Quiz");
    if (quizElement) {
      quizElement.scrollTop = 0;
    }
    setTitle(quizTitle + " Results");
    setSubmitted(true);
    setCheckSubmit(false);
  };

  const handleStart = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    setStarting(true);
    setRandomizedQuestions(
      shuffleArray(
        originalQuestions.map((q: Question) => {
          const letters = ["A.", "B.", "C.", "D."];
          const shuffledOptions = shuffleArray(q.options);

          if (q.type === "multiple") {
            const correctAnswerIndices = (q.correctAnswer as string[]).map((answer) =>
              letters.indexOf(answer),
            );
            const correctOptionTexts = correctAnswerIndices.map((index) => q.options[index]);

            const newCorrectAnswers = correctOptionTexts.map((text) => {
              const newIndex = shuffledOptions.indexOf(text);
              return letters[newIndex];
            });

            return {
              ...q,
              options: shuffledOptions,
              correctAnswer: newCorrectAnswers,
            };
          } else {
            // Handle single-select questions (existing logic)
            const correctOptionIndex = letters.indexOf(q.correctAnswer as string);
            const correctOptionText = q.options[correctOptionIndex];
            const newCorrectIndex = shuffledOptions.indexOf(correctOptionText);
            const newCorrectAnswer = letters[newCorrectIndex];

            return {
              ...q,
              options: shuffledOptions,
              correctAnswer: newCorrectAnswer,
            };
          }
        }),
      ),
    );
  };

  const handleSelect = (questionIndex: number, answer: string) => {
    if (submitted) return;

    setSelectedAnswers((prev) => {
      const currentAnswers = prev[questionIndex] || [];
      const isMultiSelect = randomizedQuestions[questionIndex].type === "multiple";

      if (isMultiSelect) {
        const newAnswers = currentAnswers.includes(answer)
          ? currentAnswers.filter((a) => a !== answer)
          : [...currentAnswers, answer];
        return { ...prev, [questionIndex]: newAnswers };
      } else {
        return { ...prev, [questionIndex]: [answer] };
      }
    });
  };

  return (
    <div id="Quiz" className={styles.bigDiv}>
      {!starting && <TitleScreen handleStart={handleStart} />}
      {starting && (
        <div className={styles.exitQuiz}>
          {!submitted && (
            <div className={styles.exit}>
              <Image
                src={"/close.svg"}
                width={24}
                height={24}
                alt="Exit Image"
                style={{ cursor: "pointer" }}
                onClick={handlePressCancel}
              />
              <span className={styles.exitText} onClick={handlePressCancel}>
                Exit Quiz
              </span>
            </div>
          )}
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
                <span className={styles.titleFont}>{quizTitle}</span>
                {!submitted && <span className={styles.descriptionFont}>{description}</span>}
              </div>
              <div className={styles.questionList}>
                {randomizedQuestions.map((q, index) =>
                  q.type === "multiple" ? (
                    <MultiSelectQuestion
                      key={index}
                      question={`${index + 1}. ${q.question}`}
                      options={q.options}
                      selected={selectedAnswers[index] || []}
                      onSelect={(answer) => {
                        handleSelect(index, answer);
                      }}
                      isSubmitted={submitted}
                      correctAnswers={q.correctAnswer as string[]}
                    />
                  ) : (
                    <Question
                      key={index}
                      question={`${index + 1}. ${q.question}`}
                      options={q.options}
                      selected={
                        (selectedAnswers[index]?.[0] as "A." | "B." | "C." | "D." | "E.") ?? null
                      }
                      onSelect={(answer) => {
                        handleSelect(index, answer);
                      }}
                      isSubmitted={submitted}
                      isCorrect={selectedAnswers[index]?.[0] === q.correctAnswer}
                      correctAnswer={q.correctAnswer as string}
                    />
                  ),
                )}
              </div>
              {!submitted && <Submit handleSubmit={handlePressSubmit} />}
              {submitted && (
                <div className={styles.nextModule}>
                  <NextButtons kind="primary" label={label} handleClick={handleLeave} />
                  <NextButtons kind="secondary" label="Go Back" handleClick={handleLeave} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
