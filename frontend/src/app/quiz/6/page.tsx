import Sidebar from "../../components/Sidebar/Sidebar";
import { Question, Quiz } from "../../components/quiz_components/Quiz";

import styles from "./Quiz6.module.css";

export default function Quiz6() {
  const questions: Question[] = [
    {
      question: "What is the highest factor leading to fatal bike crashes?",
      options: [
        "Riding in a bike lane",
        "Wearing bright visible clothing",
        "Failing to yield the right of way",
        "Stopping at all stop signs and traffic lights",
      ],
      correctAnswer: "C.",
      type: "single",
    },
    {
      question:
        "What cues help you anticipate how drivers and pedestrians interact with you and other bicyclists?",
      options: [
        "Move off the road to get to a safe location",
        "Make sure everyone involved and around you is safe",
        "Take a photo of the collision",
        "Stand in the middle of the road trying to divert traffic",
        "Exchange contact information",
        "Move everyone off the road/sidewalk if they are injured",
      ],
      correctAnswer: ["A.", "B.", "C.", "E.", "F."],
      type: "multiple",
    },
  ];
  return (
    <div className={styles.quizContainer}>
      <div className={styles.hideMobile}>
        <Sidebar />
      </div>
      <Quiz
        title="Module 6 Quiz"
        description="There is no time limit. You have unlimited attempts, however you will not be able to revisit previous attempts."
        questions={questions}
        module={6}
      />
    </div>
  );
}
