"use client";

import Image from "next/image";

import ModuleIntro from "../components/AllModules/ModuleIntro/ModuleIntro";
import AdditionalTips from "../components/Mod2Components/AdditionalTip.tsx/AdditionalTips";
import BasicMaintenance from "../components/Mod2Components/BasicMaintenance/BasicMaintenance";
import BikeMechanic from "../components/Mod2Components/BikeMechanic.tsx/BikeMechanic";
import SimpleWay from "../components/Mod2Components/SimpleWay/SimpleWay";
import StuffHappens from "../components/Mod2Components/StuffHappens/StuffHappens";
import ModuleSliderContainer from "../components/ModuleSliderContainer/ModuleSliderContainer";
import Sidebar from "../components/Sidebar/Sidebar";
import { Question, Quiz } from "../components/quiz_components/Quiz";

import styles from "./mod2.module.css";

export default function Module2() {
  const sampleQuestions: Question[] = [
    {
      question:
        "ABC Bike Check is a simple way to quickly assess that the condition of your bike is “riding ready.” ABC in this acronym stands for:",
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
      question: "the best way to prolong your E Bike's battery life is to:",
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
    <div className={styles.container}>
      <div className={styles.sidebarWrapper}>
        <Sidebar />
      </div>
      <ModuleSliderContainer moduleText="MODULE 2: Maintaining Your Bike and Keeping it Road Ready">
        <ModuleIntro
          subtitle="Why is bike maintenance important?"
          title="Maintaining your bike and keeping it road ready"
          moduleNumber={2}
          description={
            <p>{`A well-maintained bike or E Bike is safer, more efficient, and more enjoyable to ride. Regular maintenance can help prevent breakdowns, extend the life of your bike, and ensure that you're riding safely.`}</p>
          }
          Mascot={
            <Image
              src="/TimmytheTire.svg"
              width={312}
              height={320}
              alt="Timmy, the tire mascot"
              className={styles.mascot}
            />
          }
        />
        <BasicMaintenance />
        <AdditionalTips />
        <SimpleWay />
        <StuffHappens />
        <BikeMechanic />
        <Quiz
          title="Module 2 Quiz"
          description="There is no time limit. You have unlimited attempts, however you will not be able to revisit previous attempts."
          questions={sampleQuestions}
        />
      </ModuleSliderContainer>
    </div>
  );
}
