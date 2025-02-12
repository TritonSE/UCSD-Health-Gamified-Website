"use client";

import { useState } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import { Quiz } from "../components/quiz_components/Quiz";

import styles from "./QuizPage.module.css";

export default function QuizPage() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const handleSidebarToggle = (collapsed: boolean) => {
    setIsSidebarCollapsed(collapsed);
  };
  const sampleQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Berlin"],
      correctAnswer: "A.",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correctAnswer: "B.",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
      correctAnswer: "C.",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Mark Twain", "Harper Lee", "F. Scott Fitzgerald", "J.K. Rowling"],
      correctAnswer: "B.",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Au", "Ag", "Fe"],
      correctAnswer: "B.",
    },
    {
      question: "Who is the new president of TSE",
      options: ["Benjamin Johnson", "Vivian Liu", "Yash Ravipati", "Eshaan Sharma"],
      correctAnswer: "A.",
    },
  ];
  return (
    <div className={styles.quizContainer}>
      <Sidebar onToggle={handleSidebarToggle} />
      <main
        className={`${styles.mainContent} ${isSidebarCollapsed ? styles.sidebarCollapsed : ""}`}
      >
        <div className={styles.quiz}>
          <Quiz
            title="Example Quiz"
            description="No time limit! Make sure to answer all the questions."
            questions={sampleQuestions}
          />
        </div>
      </main>
    </div>
  );
}
