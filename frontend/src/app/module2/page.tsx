"use client";

import AdditionalTips from "../components/Mod2Components/AdditionalTip.tsx/AdditionalTips";
import BasicMaintenance from "../components/Mod2Components/BasicMaintenance/BasicMaintenance";
import BikeMechanic from "../components/Mod2Components/BikeMechanic.tsx/BikeMechanic";
// import Helmet from "../components/Mod2Components/Helmet";
import Section1 from "../components/Mod2Components/Section1/Section1";
import SimpleWay from "../components/Mod2Components/SimpleWay/SimpleWay";
import StuffHappens from "../components/Mod2Components/StuffHappens/StuffHappens";
import ModuleSliderContainer from "../components/ModuleSliderContainer/ModuleSliderContainer";
import Sidebar from "../components/Sidebar/Sidebar";

import styles from "./mod2.module.css";

export default function Module2() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <ModuleSliderContainer moduleText="MODULE 2: Maintaining Your Bike and Keeping it Road Ready">
        <Section1 />
        <BasicMaintenance />
        <AdditionalTips />
        <SimpleWay />
        <StuffHappens />
        <BikeMechanic />
      </ModuleSliderContainer>
    </div>
  );
}
