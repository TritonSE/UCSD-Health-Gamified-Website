"use client";

import Image from "next/image";

import ModuleIntro from "../components/AllModules/ModuleIntro/ModuleIntro";
import ModuleSliderContainer from "../components/ModuleSliderContainer/ModuleSliderContainer";
import Sidebar from "../components/Sidebar/Sidebar";
import { Question, Quiz } from "../components/quiz_components/Quiz";

import styles from "./Module6.module.css";
import BicycleSafetyFacts from "./components/BicycleSafetyFacts/BicycleSafetyFacts";
import CrashProtocol from "./components/CrashProtocol/CrashProtocol";

export default function Module6() {
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
    <div className={styles.container}>
      <Sidebar />
      <ModuleSliderContainer moduleText="MODULE 6: In Case of a Collision">
        <ModuleIntro
          moduleNumber={6}
          title="In Case of a Collision"
          subtitle="UNDERSTANDING BICYCLE CRASHES"
          description={
            <p>
              <b>There are two main types of crashes:</b> the most common (falls), and the most
              serious (the ones with cars). Regardless of the reason for the crash, prevention is
              the name of the game. There are things you can do to decrease your risk of a crash.
              First, know some of the latest bicycle safety facts:
            </p>
          }
          Mascot={
            <Image
              src="/module6/Module6Mascot.svg"
              alt="Timmy, the tire mascot smiling with a lightbulb above their head"
              width={320}
              height={329}
              className={styles.mascot}
            />
          }
        />
        <BicycleSafetyFacts />
        <CrashProtocol />
        <Quiz
          title="Module 6 Quiz"
          description="There is no time limit. You have unlimited attempts, however you will not be able to revisit previous attempts."
          questions={questions}
        />
      </ModuleSliderContainer>
    </div>
  );
}
