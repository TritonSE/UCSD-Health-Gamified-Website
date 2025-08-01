import ModuleGate from "../../components/ModuleGate/ModuleGate";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Question, Quiz } from "../../components/quiz_components/Quiz";

import styles from "./Quiz5.module.css";

export default function Quiz5() {
  const questions: Question[] = [
    {
      question:
        "True or False: Helmets are legally required for all riders under the age of 18 regardless of the class of E Bike.",
      options: ["True", "False"],
      correctAnswer: "A.",
      type: "single",
    },
    {
      question: "Identify the door zone.",
      image: "/quiz/module5_q2.svg",
      imageW: 423,
      imageH: 411,
      options: ["", "", ""],
      correctAnswer: "B.",
      type: "single",
    },
    {
      question: "Which scenario below demonstrates safe cycling practices?",
      options: [
        "Rolling slowly up and through a stop sign without coming to a full stop",
        "Riding through a red light even when the intersection is empty because traffic light laws do not apply to cyclists",
        "Riding in the middle of a bike lane, conscious to avoid the door zone.",
        "Riding on a sidewalk that is busy with pedestrians.",
        "Swerving around people walking through a crosswalk as to not hit them.",
      ],
      correctAnswer: "C.",
      type: "single",
    },
  ];
  return (
    <ModuleGate module={5}>
      <div className={styles.quizContainer}>
        <div className={styles.hideMobile}>
          <Sidebar currentlyOn={5} />
        </div>
        <Quiz
          title="Module 5 Quiz"
          description="There is no time limit. You have unlimited attempts, however you will not be able to revisit previous attempts."
          questions={questions}
          module={5}
        />
      </div>
    </ModuleGate>
  );
}
