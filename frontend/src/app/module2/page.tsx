"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import ModuleIntro from "../components/AllModules/ModuleIntro/ModuleIntro";
import AdditionalTips from "../components/Mod2Components/AdditionalTip.tsx/AdditionalTips";
import BasicMaintenance from "../components/Mod2Components/BasicMaintenance/BasicMaintenance";
import BikeMechanic from "../components/Mod2Components/BikeMechanic.tsx/BikeMechanic";
import SimpleWay from "../components/Mod2Components/SimpleWay/SimpleWay";
import StuffHappens from "../components/Mod2Components/StuffHappens/StuffHappens";
import ModuleSliderContainer from "../components/ModuleSliderContainer/ModuleSliderContainer";
import Sidebar from "../components/Sidebar/Sidebar";
import { TitleScreen } from "../components/quiz_components/TitleScreen";

import styles from "./mod2.module.css";

export default function Module2() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/quiz/2");
  };
  return (
    <div className={styles.container}>
      <div className={styles.sidebarWrapper}>
        <Sidebar />
      </div>
      <ModuleSliderContainer moduleText="MODULE 2: Maintaining Your Bike and Keeping it Road Ready">
        <ModuleIntro
          subtitle="Why is bike maintenance important?"
          title="Maintaining your bike and keeping it road ready"
          moduleNumber={2}
          description={
            <p>{`A well-maintained bike or E Bike is safer, more efficient, and more enjoyable to ride. Regular maintenance can help prevent breakdowns, extend the life of your bike, and ensure that you're riding safely.`}</p>
          }
          Mascot={
            <Image
              src="/TimmytheTire.svg"
              width={312}
              height={320}
              alt="Timmy, the tire mascot"
              className={styles.mascot}
            />
          }
        />
        <BasicMaintenance />
        <AdditionalTips />
        <SimpleWay />
        <StuffHappens />
        <BikeMechanic />
        <TitleScreen handleStart={handleStart} />
      </ModuleSliderContainer>
    </div>
  );
}
