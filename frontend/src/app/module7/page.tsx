"use client";

import Image from "next/image";
import React from "react";

import ModuleIntro from "../components/AllModules/ModuleIntro/ModuleIntro";
import ModuleSliderContainer from "../components/ModuleSliderContainer/ModuleSliderContainer";
import Sidebar from "../components/Sidebar/Sidebar";
import BikeInjuries from "../components/module7/BikeInjuries";
import ParentalInvolvement from "../components/module7/ParentalInvolvement";
import RoleModels from "../components/module7/RoleModels";
import Suggestions from "../components/module7/Suggestions";
import { Question, Quiz } from "../components/quiz_components/Quiz";

import styles from "./mod7.module.css";

export default function Module7() {
  const questions: Question[] = [
    {
      question:
        "True or False: Parental or guardian models influence child and teen behavior patterns",
      options: ["True", "False"],
      correctAnswer: "A.",
      type: "single",
    },
    {
      question: "Check with a parent/guardian:",
      subQuestion:
        "I recognize that my actions and choices impact the youth around me. I strive to always wear my helmet and practice safe cycling habits when riding with my kids, their friends, or any young riders who may look to me as a role model.",
      options: ["I am a parent/guardian and have read and understood the statement above"],
      correctAnswer: ["A."],
      type: "multiple",
    },
  ];
  return (
    <div className={styles.container}>
      {/* sidebar */}
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      {/* content */}
      <ModuleSliderContainer moduleText="MODULE 7: Teen & Parent Education & Awareness">
        <ModuleIntro
          moduleNumber={7}
          title="Teen & Parent Education & Awareness"
          subtitle="Guiding Safe Riding Together"
          description={
            <p>
              <strong>Please complete this section with a parent or guardian.</strong> As E Bikes
              become an increasingly popular mode of transportation for teens, it is essential for
              families to understand the associated risks and best safety practices. This section
              equips parents and guardians with the knowledge and tools needed to actively support
              safe riding habits, minimize risks, and foster responsible decision-making in young
              riders.
            </p>
          }
          Mascot={
            <Image
              src="/module7/TimmyParents.svg"
              alt="Timmy the tire"
              width={320}
              height={329}
              className={styles.mascot}
            />
          }
        />
        <BikeInjuries />
        <RoleModels />
        <ParentalInvolvement />
        <Suggestions />
        <Quiz
          title="Module 7 Quiz"
          description="There is no time limit. You have unlimited attempts, however you will not be able to revisit previous attempts."
          questions={questions}
        />
      </ModuleSliderContainer>
    </div>
  );
}
