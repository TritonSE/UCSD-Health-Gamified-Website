"use client";

import Section1 from "../components/Module5/Section1";
import Section2 from "../components/Module5/Section2";
import Section3 from "../components/Module5/Section3";
import Section4 from "../components/Module5/Section4";
import Section5 from "../components/Module5/Section5";
import Section6 from "../components/Module5/Section6";
import Section7 from "../components/Module5/Section7";
import Section8 from "../components/Module5/Section8";
import Section9 from "../components/Module5/Section9";
import ModuleSliderContainer from "../components/ModuleSliderContainer/ModuleSliderContainer";
import Sidebar from "../components/Sidebar/Sidebar";
import { Question, Quiz } from "../components/quiz_components/Quiz";

import styles from "./mod5.module.css";

export default function Module5() {
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
    <div className={styles.container}>
      <Sidebar />
      <ModuleSliderContainer moduleText="MODULE 5: Rules of the Road">
        {/* Temporary slides (Section1 borrowed from Module 2) - remove when actual page created*/}
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Quiz
          title="Module 5 Quiz"
          description="There is no time limit. You have unlimited attempts, however you will not be able to revisit previous attempts."
          questions={questions}
        />
      </ModuleSliderContainer>
    </div>
  );
}
