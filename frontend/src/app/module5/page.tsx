"use client";

import ModuleSliderContainer from "../components/ModuleSliderContainer/ModuleSliderContainer";
import Sidebar from "../components/Sidebar/Sidebar";

import styles from "./mod5.module.css";

export default function Module5() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <ModuleSliderContainer moduleText="MODULE 5: Rules of the Road">
        
      </ModuleSliderContainer>
    </div>
  );
}
