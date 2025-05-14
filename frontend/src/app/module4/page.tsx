"use client";

// import Helmet from "../components/Mod2Components/Helmet";
import SectionPage from "../components/Mod4Components/SectionPage/SectionPage";
import ModuleSliderContainer from "../components/ModuleSliderContainer/ModuleSliderContainer";
import Sidebar from "../components/Sidebar/Sidebar";

import styles from "./mod4.module.css";

export default function Module4() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <ModuleSliderContainer moduleText="MODULE 4: FIVE Need to Know Principles">
        <SectionPage />
      </ModuleSliderContainer>
    </div>
  );
}
