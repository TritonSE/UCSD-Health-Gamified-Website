"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import ModuleIntro from "../components/AllModules/ModuleIntro/ModuleIntro";
import ModuleGate from "../components/ModuleGate/ModuleGate";
import ModuleSliderContainer from "../components/ModuleSliderContainer/ModuleSliderContainer";
import Sidebar from "../components/Sidebar/Sidebar";
import BikeInjuries from "../components/module7/BikeInjuries";
import ParentalInvolvement from "../components/module7/ParentalInvolvement";
import RoleModels from "../components/module7/RoleModels";
import Suggestions from "../components/module7/Suggestions";
import { TitleScreen } from "../components/quiz_components/TitleScreen";

import styles from "./mod7.module.css";

export default function Module7() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/quiz/7");
  };
  return (
    <ModuleGate module={7}>
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
          <TitleScreen finalModule={false} handleStart={handleStart} />
        </ModuleSliderContainer>
      </div>
    </ModuleGate>
  );
}
