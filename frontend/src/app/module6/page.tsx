"use client";

import Image from "next/image";

import ModuleIntro from "../components/AllModules/ModuleIntro/ModuleIntro";
import ModuleGate from "../components/ModuleGate/ModuleGate";
import ModuleSliderContainer from "../components/ModuleSliderContainer/ModuleSliderContainer";
import Sidebar from "../components/Sidebar/Sidebar";
import { TitleScreen } from "../components/quiz_components/TitleScreen";

import styles from "./Module6.module.css";
import BicycleSafetyFacts from "./components/BicycleSafetyFacts/BicycleSafetyFacts";
import CrashProtocol from "./components/CrashProtocol/CrashProtocol";

export default function Module6() {
  return (
    <ModuleGate module={6}>
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
                alt="Timmy, the tire mascot smilling with a lightbulb above their head"
                width={320}
                height={329}
                className={styles.mascot}
              />
            }
          />
          <BicycleSafetyFacts />
          <CrashProtocol />
          <TitleScreen
            handleStart={() => {
              console.log("Module 6 Quiz Started");
            }}
          />
        </ModuleSliderContainer>
      </div>
    </ModuleGate>
  );
}
