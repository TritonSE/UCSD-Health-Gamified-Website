import { Quiz } from "./components/quiz_components/Quiz";
import styles from "./page.module.css";

export default function Home() {
  const sampleQuestions = [
    {
      question: "1. What is the capital of France?",
      options: ["Paris", "London", "Rome", "Berlin"],
    },
    {
      question: "2. Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
    },
  ];
  return (
    <div className={styles.page}>
      <h1> TSE x UCSD Health </h1>
      <p>
        {" "}
        Use this page for pages and testing components. REMOVE ALL CHANGES BEFORE SUBMITTING A PULL
        REQUEST.
      </p>
      <Quiz title="Module 1 Quiz" questions={sampleQuestions} />
    </div>
  );
}
