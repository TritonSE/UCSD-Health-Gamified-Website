import { Quiz } from "../components/quiz_components/Quiz";

import styles from "./QuizPage.module.css";

export default function QuizPage() {
  const sampleQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Berlin"],
      correctAnswer: "A.",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correctAnswer: "D.",
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
  ];
  return (
    <div className={styles.quiz}>
      <Quiz title="Example Quiz" questions={sampleQuestions} />
    </div>
  );
}
