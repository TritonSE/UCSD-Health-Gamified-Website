import ModuleGate from "../../components/ModuleGate/ModuleGate";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Question, Quiz } from "../../components/quiz_components/Quiz";

import styles from "./Quiz3.module.css";

// Import the images (ensure correct paths relative to QuizPage3.tsx)

export default function QuizPage3() {
  const sampleQuestions: Question[] = [
    {
      question: "Which illustration shows the correct way to wear your helmet?",
      image: "/quiz/module3_quiz.svg",
      imageW: 502,
      imageH: 200,
      options: ["", "", ""],
      correctAnswer: "A.",
      type: "single",
    },
    {
      question:
        "At what time of day is it especially important to wear high visible clothing and ensure you have reflective gear?",
      options: ["Morning", "Mid Day", "Afternoon", "Dusk and Dark"],
      correctAnswer: "D.",
      type: "single",
    },
    {
      question:
        "True or False: Helmets can prevent serious head injury and permanent brain damage in bike accidents?",
      options: ["True", "False"],
      correctAnswer: "A.",
      type: "single",
    },
  ];

  return (
    <ModuleGate module={3}>
      <div className={styles.quizContainer}>
        <div className={styles.hideMobile}>
          <Sidebar currentlyOn={3} />
        </div>
        <Quiz
          title="Module 3 Quiz"
          description="There is no time limit. You have unlimited attempts, however you will not be able to revisit previous attempts."
          questions={sampleQuestions}
          module={3}
        />
      </div>
    </ModuleGate>
  );
}
