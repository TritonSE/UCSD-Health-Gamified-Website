import Image from "next/image";
import React from "react";

import ModuleIntro from "../components/AllModules/ModuleIntro/ModuleIntro";
import ModuleSliderContainer from "../components/ModuleSliderContainer/ModuleSliderContainer";
import Sidebar from "../components/Sidebar/Sidebar";
import Flips from "../components/module3/Flips";
import Helmet from "../components/module3/Helmet";
import HelmetCorrect from "../components/module3/HelmetCorrect";
import Recommendation from "../components/module3/Recommendation";
import SafetyEquipment from "../components/module3/SafetyEquipment";
import { Question, Quiz } from "../components/quiz_components/Quiz";

import styles from "./mod3.module.css";

export default function Module3() {
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
    <div className={styles.container}>
      {/* sidebar */}
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      {/* content */}
      <ModuleSliderContainer moduleText="MODULE 3: Helmet Choice and Safety Equipment">
        <ModuleIntro
          moduleNumber={3}
          title="Helmet choice and safety equipment"
          subtitle="Choosing the right helmet and safety gear"
          description={
            <p>
              Wearing the right helmet and gear keeps you safe, visible, and in control while
              riding. Smart choices help prevent injuries so you can keep riding with confidence.
            </p>
          }
          Mascot={
            <Image
              src="/module3/TimmyHelmet.svg"
              alt="Timmy the tire"
              width={320}
              height={329}
              className={styles.mascot}
            />
          }
        />
        <Flips />
        <HelmetCorrect />
        <Helmet />
        <Recommendation />
        <SafetyEquipment />
        <Quiz
          title="Module 3 Quiz"
          description="There is no time limit. You have unlimited attempts, however you will not be able to revisit previous attempts."
          questions={sampleQuestions}
        />
      </ModuleSliderContainer>
    </div>
  );
}
