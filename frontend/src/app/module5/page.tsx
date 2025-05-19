"use client";

import Section1 from "../components/Mod2Components/Section1/Section1";
import Section6 from "../components/Module5/Section6";
import ModuleSliderContainer from "../components/ModuleSliderContainer/ModuleSliderContainer";
import Sidebar from "../components/Sidebar/Sidebar";

import styles from "./mod5.module.css";

export default function Module5() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <ModuleSliderContainer moduleText="MODULE 5: Rules of the Road">
        {/* Temporary slides (Section1 borrowed from Module 2) - remove when actual page created*/}
        <Section1 />
        <Section6 />
        <Section1 />
      </ModuleSliderContainer>
    </div>
  );
}
