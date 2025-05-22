import Sidebar from "../../components/Sidebar/Sidebar";
import { Question, Quiz } from "../../components/quiz_components/Quiz";

import styles from "./Quiz4.module.css";

export default function Quiz4() {
  const questions: Question[] = [
    {
      question: "Why is it important to follow the rules of the road?",
      options: [
        "Following the rules of the road is essential to maintaining the image of bicyclists as respectable road users.",
        "Cyclists have the same rights and responsibilities as car drivers.",
        "Traffic signals and stop signs apply to cyclists in the same way they apply to drivers of vehicles.",
        "Riding against traffic is better.",
        "A, B, and C",
      ],
      correctAnswer: "E.",
      type: "single",
    },
    {
      question:
        "What cues help you anticipate how drivers and pedestrians interact with you and other bicyclists?",
      options: [
        "People in parked cars and parking lights indicate that a door could open into the 'door zone'.",
        "Turn signals are a cue.",
        "Pedestrians waiting at the corner are a cue that they will soon cross the street.",
        "Orange cones are a cue that a construction zone is coming up.",
        "All of the above",
      ],
      correctAnswer: "E.",
      type: "single",
    },
    {
      question: "Which of the following is not one of the three best ways to be visible?",
      options: [
        "White front light",
        "Red rear light",
        "Reflectors",
        "Riding in a blind spot",
        "Wearing dark clothing",
        "D and E",
      ],
      correctAnswer: "F.",
      type: "single",
    },
  ];
  return (
    <div className={styles.quizContainer}>
      <div className={styles.hideMobile}>
        <Sidebar />
      </div>
      <Quiz
        title="Module 4 Quiz"
        description="There is no time limit. You have unlimited attempts, however you will not be able to revisit previous attempts."
        questions={questions}
        randomized={false}
      />
    </div>
  );
}
