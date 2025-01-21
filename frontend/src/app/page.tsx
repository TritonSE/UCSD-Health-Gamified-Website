import { Question } from "./components/Question";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1> TSE x UCSD Health </h1>
      <p>
        {" "}
        Use this page for pages and testing components. REMOVE ALL CHANGES BEFORE SUBMITTING A PULL
        REQUEST.
      </p>
      <Question
        question="1. test"
        label1="option1"
        label2="option2"
        label3="option3"
        label4="option4"
      />
    </div>
  );
}
