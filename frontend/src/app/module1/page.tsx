import React from "react";

import Sidebar from "../components/HomePage/Sidebar/Sidebar";
import Mod1ChooseBike from "../components/Mod1ChooseBike";
import Mod1Factor1 from "../components/Mod1Factor1";
import Mod1Factor2 from "../components/Mod1Factor2";
import Mod1Factor3 from "../components/Mod1Factor3";
import Mod1Factor4 from "../components/Mod1Factor4";
import Mod1Factor5 from "../components/Mod1Factor5";
import Mod1Intro from "../components/Mod1Intro";
import Mod1Risks from "../components/Mod1Risks";
import Mod1WhyNotBike from "../components/Mod1WhyNotBike";
import Mod1WhyRide from "../components/Mod1WhyRide";
import ModTitle from "../components/ModTitle";
import { TitleScreen } from "../components/quiz_components/TitleScreen";

import styles from "./mod1.module.css";

export default function Module1() {
  return (
    <div className={styles.container}>
      {/* sidebar */}
      <div className={styles.hideModile}>
        <Sidebar />
      </div>
      {/* content */}
      <div className={styles.content}>
        {/* title and intro */}
        <ModTitle module_num={1} module_name="What is an E-bike?" />
        <Mod1Intro />
        <Mod1ChooseBike />
        {/* factors */}
        <Mod1Factor1 />
        <Mod1Factor2 />
        <Mod1Factor3 />
        <Mod1Factor4 />
        <Mod1Factor5 />
        <Mod1WhyRide />
        <Mod1WhyNotBike />
        <Mod1Risks />
        {/* quiz */}
        <div className={styles.quiz}>
          <TitleScreen />
        </div>
      </div>
    </div>
  );
}
