import { Question, Quiz } from "../components/quiz_components/Quiz";

import styles from "./QuizPage.module.css";

export default function QuizPage() {
  const sampleQuestions: Question[] = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Berlin"],
      correctAnswer: "A.",
      type: "single",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correctAnswer: "B.",
      type: "single",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
      correctAnswer: "C.",
      type: "single",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Mark Twain", "Harper Lee", "F. Scott Fitzgerald", "J.K. Rowling"],
      correctAnswer: "B.",
      type: "single",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Au", "Ag", "Fe"],
      correctAnswer: "B.",
      type: "single",
    },
    {
      question: "Who is the new president of TSE",
      options: ["Benjamin Johnson", "Vivian Liu", "Yash Ravipati", "Eshaan Sharma"],
      correctAnswer: "A.",
      type: "single",
    },
    {
      question: "Select all that apply: Which of these are mammals?",
      options: ["Dog", "Fish", "Bird", "Cat"],
      correctAnswer: ["A.", "D."],
      type: "multiple",
    },
    {
      question: "Which of the following numbers are not prime?",
      options: ["11", "27", "37", "51"],
      correctAnswer: ["B.", "D."],
      type: "multiple",
    },
  ];
  return (
    <div className={styles.quizContainer}>
      <div className={styles.quiz}>
        <Quiz
          title="Example Quiz"
          description="No time limit! Make sure to answer all the questions."
          questions={sampleQuestions}
        />
      </div>
    </div>
  );
}
