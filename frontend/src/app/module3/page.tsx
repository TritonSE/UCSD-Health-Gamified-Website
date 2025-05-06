import React from "react";

import ModuleSliderContainer from "../components/ModuleSliderContainer/ModuleSliderContainer";
import Sidebar from "../components/Sidebar/Sidebar";
import Helmet from "../components/module3/Helmet";
import SafetyEquipment from "../components/module3/SafetyEquipment";

import styles from "./mod3.module.css";
import Section3 from "../components/module3/Section3";
import HelmetCorrect from "../components/module3/HelmetCorrect";

export default function Module3() {
  return (
    <div className={styles.container}>
      {/* sidebar */}
      <div className={styles.hideModile}>
        <Sidebar />
      </div>
      {/* content */}
      <ModuleSliderContainer moduleText="MODULE 3: Helmet Choice and Safety Equipment">
        <Section3 />
        <HelmetCorrect />
        <Helmet />
        <SafetyEquipment />
      </ModuleSliderContainer>
    </div>
  );
}
