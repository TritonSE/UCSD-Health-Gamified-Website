"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import ModuleIntro from "../components/AllModules/ModuleIntro/ModuleIntro";
import ModuleSliderContainer from "../components/ModuleSliderContainer/ModuleSliderContainer";
import Sidebar from "../components/Sidebar/Sidebar";
import Flips from "../components/module3/Flips";
import Helmet from "../components/module3/Helmet";
import HelmetCorrect from "../components/module3/HelmetCorrect";
import Recommendation from "../components/module3/Recommendation";
import SafetyEquipment from "../components/module3/SafetyEquipment";
import { TitleScreen } from "../components/quiz_components/TitleScreen";

import styles from "./mod3.module.css";

export default function Module3() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/quiz/3");
  };
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
        <TitleScreen handleStart={handleStart} />
      </ModuleSliderContainer>
    </div>
  );
}
