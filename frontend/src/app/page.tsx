import styles from "./page.module.css";
import QuizPage from "./quiz/QuizPage";

export default function Home() {
  return (
    <div>
      {/* <h1> TSE x UCSD Health </h1>
      <p>
        {" "}
        Use this page for pages and testing components. REMOVE ALL CHANGES BEFORE SUBMITTING A PULL
        REQUEST.
      </p> */}
      <QuizPage/>
    </div>
  );
}
