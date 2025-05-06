import React from "react";

import ModuleSliderContainer from "../components/ModuleSliderContainer/ModuleSliderContainer";
import Sidebar from "../components/Sidebar/Sidebar";
import Helmet from "../components/module3/Helmet";
import Recommendation from "../components/module3/Recommendation";
import SafetyEquipment from "../components/module3/SafetyEquipment";

import styles from "./mod3.module.css";

export default function Module1() {
  return (
    <div className={styles.container}>
      {/* sidebar */}
      <div className={styles.hideModile}>
        <Sidebar />
      </div>
      {/* content */}
      <ModuleSliderContainer moduleText="MODULE 3: Helmet Choice and Safety Equipment">
        <Helmet />
        <Helmet />
        <Recommendation />
        <SafetyEquipment />
      </ModuleSliderContainer>
    </div>
  );
}
