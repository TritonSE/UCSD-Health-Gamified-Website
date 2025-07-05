"use client";

// import Helmet from "../components/Mod2Components/Helmet";
import BePredictable from "../components/Mod4Components/BePredictable/BePredictable";
import BeVisible from "../components/Mod4Components/BeVisible/BeVisible";
import FollowTheLaw from "../components/Mod4Components/FollowTheLaw/FollowTheLaw";
import RideReady from "../components/Mod4Components/RideReady/RideReady";
import SectionPage from "../components/Mod4Components/SectionPage/SectionPage";
import ThinkAhead from "../components/Mod4Components/ThinkAhead/ThinkAhead";
import ModuleSliderContainer from "../components/ModuleSliderContainer/ModuleSliderContainer";
import Sidebar from "../components/Sidebar/Sidebar";

import styles from "./mod4.module.css";

export default function Module4() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <ModuleSliderContainer moduleText="MODULE 4: FIVE Need to Know Principles">
        <SectionPage />
        <FollowTheLaw />
        <BePredictable />
        <BeVisible />
        <ThinkAhead />
        <RideReady />
      </ModuleSliderContainer>
    </div>
  );
}
