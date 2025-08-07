import ModuleGate from "../../components/ModuleGate/ModuleGate";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Question, Quiz } from "../../components/quiz_components/Quiz";

import styles from "./Quiz1.module.css";

export default function QuizPage1() {
  const sampleQuestions: Question[] = [
    {
      question: "Which class of E Bike reaches a max speed of 28 mph?",
      options: ["Class 1", "Class 2", "Class 3", "Zero Emission Motorcycles"],
      correctAnswer: "C.",
      type: "single",
    },
    {
      question: "Which of the following requires a driver’s license?",
      options: ["Pedal Bicycle", "Class 1", "Class 2", "Class 3", "Zero Emission Motorcycles"],
      correctAnswer: "E.",
      type: "single",
    },
    {
      question:
        "True or False: Riding an unclassified or bike modified to surpass the speed of its intended class can result in a fine or other penalties.",
      options: ["True", "False"],
      correctAnswer: "A.",
      type: "single",
    },
  ];
  return (
    <ModuleGate module={1}>
      <div className={styles.quizContainer}>
        <div className={styles.hideMobile}>
          <Sidebar currentlyOn={1} />
        </div>
        <Quiz
          title="Module 1 Quiz"
          description="There is no time limit. You have unlimited attempts, however you will not be able to revisit previous attempts."
          questions={sampleQuestions}
          module={1}
        />
      </div>
    </ModuleGate>
  );
}
