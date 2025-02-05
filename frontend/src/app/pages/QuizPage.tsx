import { Quiz } from "../components/quiz_components/Quiz";

import styles from "./QuizPage.module.css";

export default function QuizPage() {
  const sampleQuestions = [
    {
      question: "1. What is the capital of France?",
      options: ["Paris", "London", "Rome", "Berlin"],
      correctAnswer: "A.",
    },
    {
      question: "2. Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correctAnswer: "D.",
    },
  ];
  return (
    <div className={styles.quiz}>
      <Quiz title="Example Quiz" questions={sampleQuestions} />
    </div>
  );
}
