import React from "react";

import Sidebar from "../components/HomePage/Sidebar/Sidebar";
import Mod1ChooseBike from "../components/module1/Mod1ChooseBike";
import Mod1Classes from "../components/module1/Mod1Classes";
import Mod1Factor1 from "../components/module1/Mod1Factor1";
import Mod1Factor2 from "../components/module1/Mod1Factor2";
import Mod1Factor3 from "../components/module1/Mod1Factor3";
import Mod1Factor5 from "../components/module1/Mod1Factor5";
import Mod1Intro from "../components/module1/Mod1Intro";
import Mod1LetsTalk from "../components/module1/Mod1LetsTalk";
import Mod1WhyRide from "../components/module1/Mod1WhyRide";
import ModTitle from "../components/module1/ModTitle";

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
        {/* frame 1 - intro */}
        <ModTitle module_num={1} module_name="WHAT IS AN E BIKE?" />
        <Mod1Intro />
        {/* frame 2 - choose */}
        <Mod1ChooseBike />
        {/* frame 3 - types of riding */}
        <Mod1Factor1 />
        {/* frame 4 - consider physical */}
        <Mod1Factor2 />
        {/* frame 5 - evaluate features*/}
        <Mod1Factor3 />
        {/* frame 6 - consider e bike classification */}
        <Mod1Factor5 />
        {/* frame 7 - classes table */}
        <Mod1Classes />
        {/* frame 8 - why ride */}
        <Mod1WhyRide />
        {/* frame 9 - let's talk */}
        <Mod1LetsTalk />
        {/* frame 10 - risks with illegal */}

        {/* frame 11 - quiz */}
      </div>
    </div>
  );
}
