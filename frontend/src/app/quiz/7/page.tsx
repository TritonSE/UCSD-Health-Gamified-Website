import Sidebar from "../../components/Sidebar/Sidebar";
import { Question, Quiz } from "../../components/quiz_components/Quiz";

import styles from "./Quiz7.module.css";

export default function Quiz7() {
  const questions: Question[] = [
    {
      question:
        "True or False: Parental or guardian models influence child and teen behavior patterns",
      options: ["True", "False"],
      correctAnswer: "A.",
      type: "single",
    },
    {
      question: "Check with a parent/guardian:",
      subQuestion:
        "I recognize that my actions and chioces impact the youth around me. I strive to always wear my helmet and practice safe cycling habits when riding with my kids, their friends, or any young riders who may look to me as a role model.",
      options: ["I am a parent/guardian and have read and understood the statement above"],
      correctAnswer: ["A."],
      type: "multiple",
    },
  ];
  return (
    <div className={styles.quizContainer}>
      <div className={styles.hideMobile}>
        <Sidebar />
      </div>
      <Quiz
        title="Module 7 Quiz"
        description="There is no time limit. You have unlimited attempts, however you will not be able to revisit previous attempts."
        questions={questions}
      />
    </div>
  );
}
