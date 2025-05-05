import React from "react";

import ModuleSliderContainer from "../components/ModuleSliderContainer/ModuleSliderContainer";
import Sidebar from "../components/Sidebar/Sidebar";
import Helmet from "../components/module3/Helmet";

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
        <Helmet />
      </ModuleSliderContainer>
    </div>
  );
}
