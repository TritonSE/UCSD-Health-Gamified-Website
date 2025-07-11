"use client";

import { useRouter } from "next/navigation";

import Section1 from "../components/Module5/Section1";
import Section2 from "../components/Module5/Section2";
import Section3 from "../components/Module5/Section3";
import Section4 from "../components/Module5/Section4";
import Section5 from "../components/Module5/Section5";
import Section6 from "../components/Module5/Section6";
import Section7 from "../components/Module5/Section7";
import Section8 from "../components/Module5/Section8";
import Section9 from "../components/Module5/Section9";
import ModuleGate from "../components/ModuleGate/ModuleGate";
import ModuleSliderContainer from "../components/ModuleSliderContainer/ModuleSliderContainer";
import Sidebar from "../components/Sidebar/Sidebar";
import { TitleScreen } from "../components/quiz_components/TitleScreen";

import styles from "./mod5.module.css";

export default function Module5() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/quiz/5");
  };
  return (
    <ModuleGate module={5}>
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
          <TitleScreen finalModule={false} handleStart={handleStart} />
        </ModuleSliderContainer>
      </div>
    </ModuleGate>
  );
}
