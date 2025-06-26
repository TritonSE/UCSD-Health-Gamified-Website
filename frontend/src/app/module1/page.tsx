"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import ModuleIntro from "../components/AllModules/ModuleIntro/ModuleIntro";
import ModuleGate from "../components/ModuleGate/ModuleGate";
import ModuleSliderContainer from "../components/ModuleSliderContainer/ModuleSliderContainer";
import Sidebar from "../components/Sidebar/Sidebar";
import Mod1ChooseBike from "../components/module1/Mod1ChooseBike";
import Mod1Classes from "../components/module1/Mod1Classes";
import Mod1Factor1 from "../components/module1/Mod1Factor1";
import Mod1Factor2 from "../components/module1/Mod1Factor2";
import Mod1Factor3 from "../components/module1/Mod1Factor3";
import Mod1Factor5 from "../components/module1/Mod1Factor5";
import Mod1LetsTalk from "../components/module1/Mod1LetsTalk";
import Mod1Risks from "../components/module1/Mod1Risks";
import Mod1WhyRide from "../components/module1/Mod1WhyRide";
import { TitleScreen } from "../components/quiz_components/TitleScreen";

import styles from "./mod1.module.css";

export default function Module1() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/quiz/1``");
  };
  return (
    <ModuleGate module={1}>
      <div className={styles.container}>
        {/* sidebar */}
        <div className={styles.sidebar}>
          <Sidebar />
        </div>

        {/* content */}
        <ModuleSliderContainer moduleText="MODULE 1: WHAT IS AN E BIKE?">
          {/* frame 1 - intro */}
          <ModuleIntro
            moduleNumber={1}
            title="WHAT IS AN E BIKE?"
            subtitle="INTRODUCTION"
            description={
              <p>
                E Bikes are popular for commuting, recreation, and transportation. To ensure a safe
                and enjoyable experience, it&#39;s crucial to understand the different E Bike
                classifications and the importance of riding legal E Bikes. This module will guide
                you through the process of choosing the best E Bike for your needs.{" "}
              </p>
            }
            Mascot={
              <Image
                src="/TimmyRiding.svg"
                width={252}
                height={329}
                alt="Timmy the tire riding a bike"
              />
            }
          />
          {/* frame 2 - choose */}
          <Mod1ChooseBike />
          {/* frame 3 - types of riding */}
          <Mod1Factor1 />
          {/* frame 4 - consider physical */}
          <Mod1Factor2 />
          {/* frame 5 - evaluate features*/}
          <Mod1Factor3 />
          {/* frame 6 - consider e bike classification */}
          <Mod1Factor5 />
          {/* frame 7 - classes table */}
          <Mod1Classes />
          {/* frame 8 - why ride */}
          <Mod1WhyRide />
          {/* frame 9 - let's talk */}
          <Mod1LetsTalk />
          {/* frame 10 - risks with illegal */}
          <Mod1Risks />
          {/* frame 11 - quiz */}
          <TitleScreen handleStart={handleStart} />
        </ModuleSliderContainer>
      </div>
    </ModuleGate>
  );
}
