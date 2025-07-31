import ModuleGate from "../components/ModuleGate/ModuleGate";
import Sidebar from "../components/Sidebar/Sidebar";
import { Question, Quiz } from "../components/quiz_components/Quiz";

import styles from "./final-test.module.css";

export default function finalTest() {
  const questions: Question[] = [
    {
      question: "Which class of e-bike is the fastest, reaching 28 mph?",
      options: ["Class 1", "Class 2", "Class 3", "Regular Bike"],
      correctAnswer: "C.",
      type: "single",
    },
    {
      question: "True or False: You need a driver's license to ride a Class 1, 2, or 3 E Bike.",
      options: ["True", "False"],
      correctAnswer: "B.",
      type: "single",
    },
    {
      question:
        "True or False: If you modify an e-bike to go faster than is legal speed, you could get a ticket.",
      options: ["True", "False"],
      correctAnswer: "A.",
      type: "single",
    },
    {
      question: "What should you check before every ride?",
      options: [
        "Air in your tires, brakes, and chain",
        "The weather forecast",
        "If your e-bike looks cool",
        "How fast you can go",
      ],
      correctAnswer: "A.",
      type: "single",
    },
    {
      question: "When is it most important to wear bright or reflective clothing?",
      options: [
        "At night or dusk",
        "Only in the morning",
        "During a race",
        "Never, it's not needed",
      ],
      correctAnswer: "A.",
      type: "single",
    },
    {
      question: "If your e-bike makes a weird noise, what should you do?",
      options: [
        "Ignore it, it will go away",
        "Ride faster to drown out the noise",
        "Check your bike or take it to a mechanic",
        "Spray random lubricants on it",
      ],
      correctAnswer: "C.",
      type: "single",
    },
    {
      question: "What is the best way to charge your e-bike battery?",
      options: [
        "Follow the manufacturer's instructions",
        "Let it die completely before charging",
        "Keep it plugged in all the time",
        "Charge only at night",
      ],
      correctAnswer: "A.",
      type: "single",
    },
    {
      question: 'What does "ABC" stand for in bike safety?',
      options: [
        "Air, Brakes, Chain",
        "Always Be Careful",
        "Airbag, Brakes, Cushion",
        "Antelope, Buffalo, Cobra",
      ],
      correctAnswer: "A.",
      type: "single",
    },
    {
      question: "Why should you roll up your pant leg or tuck it in when riding?",
      options: [
        "To go faster",
        "To look stylish",
        "To avoid getting it caught in the chain",
        "It makes no difference",
      ],
      correctAnswer: "C.",
      type: "single",
    },
    {
      question: "True or False: Wearing a helmet can prevent serious brain injuries.",
      options: ["True", "False"],
      correctAnswer: "A.",
      type: "single",
    },
    {
      question: "What's an important reason to keep your tires properly inflated?",
      options: [
        "It makes your ride safer and smoother",
        "It makes your bike look better",
        "It helps you go slower",
        "It makes the bike heavier",
      ],
      correctAnswer: "A.",
      type: "single",
    },
    {
      question: "What should you do if your bike battery dies while riding?",
      options: [
        "Leave the bike and walk home",
        "Ride it like a normal bike if possible or call for help",
        "Push the bike until it starts again",
        "Just keep pressing the power button",
      ],
      correctAnswer: "B.",
      type: "single",
    },
  ];
  return (
    <ModuleGate module={9}>
      <div className={styles.quizContainer}>
        <div className={styles.hideMobile}>
          <Sidebar />
        </div>
        <Quiz
          title="Final Test"
          description="There is no time limit. You have unlimited attempts, however you will not be able to revisit previous attempts."
          questions={questions}
          module={9}
        />
      </div>
    </ModuleGate>
  );
}
