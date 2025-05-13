import Sidebar from "../../components/Sidebar/Sidebar";
import { Question, Quiz } from "../../components/quiz_components/Quiz";
import styles from "../QuizPage.module.css";

export default function QuizPage2() {
  const sampleQuestions: Question[] = [
    {
      question:
        "ABC Bike Check is a simple way to quickly asses that the condition of your bike is “riding ready.” ABC in this acronym stands for:",
      options: [
        "A (Airbag), B (Brakes), C (Cushioned Seat)",
        "A (Air), B (Brakes), C (Chain)",
        "A (Air), B (Bike Lock), C (Chassis)",
        "A (Antelope), B (Buffalo), C (Cobra)",
      ],
      correctAnswer: "B.",
      type: "single",
    },
    {
      question: "If your bike begins to make a strange noise or behave abnormally, you should:",
      options: [
        "Ignore it, it’ll likely go away the next time you charge your battery",
        "Spray WD-40 on the strange noise",
        "Inspect your bike and perform the required maintenance or bring the bike to a mechanic if unsure how to diagnose or perform the required maintenance",
        "Continue riding your bike until the strange noise or abnormal behavior goes away or gets worse to the point you can no longer ride your bike",
      ],
      correctAnswer: "C.",
      type: "single",
    },
    {
      question: "The best way to prolong your E Bike’s battery life is to :",
      options: [
        "Follow the manufacturer’s recommendations for battery charging",
        "Always keep your battery plugged in when not using your bike",
        "Only charge battery to 80%",
        "Only charge your battery overnight",
        "Wait until the battery is drained to 0% before charging it again",
      ],
      correctAnswer: "A.",
      type: "single",
    },
  ];
  return (
    <div className={styles.quizContainer}>
      <div className={styles.hideMobile}>
        <Sidebar />
      </div>
      <Quiz
        title="Example Quiz"
        description="No time limit! Make sure to answer all the questions."
        questions={sampleQuestions}
      />
    </div>
  );
}
