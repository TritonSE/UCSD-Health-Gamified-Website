"use client";

import Image from "next/image";
import ModuleSliderContainer from "../components/ModuleSliderContainer/ModuleSliderContainer";
import Sidebar from "../components/Sidebar/Sidebar";

import styles from "./mod5.module.css";

export default function Module5() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <ModuleSliderContainer moduleText="MODULE 5: Rules of the Road">
        {/* content */}
      <ModuleSliderContainer moduleText="MODULE 3: Helmet Choice and Safety Equipment">
        <ModuleIntro
          moduleNumber={3}
          title="Helmet choice and safety equipment"
          subtitle="Choosing the right helmet and safety gear"
          description={
            <p>
              Wearing the right helmet and gear keeps you safe, visible, and in control while
              riding. Smart choices help prevent injuries so you can keep riding with confidence.
            </p>
          }
          Mascot={
            <Image
              src="/module3/TimmyHelmet.svg"
              alt="Timmy the tire"
              width={320}
              height={329}
              className={styles.mascot}
            />
          }
        />
      </ModuleSliderContainer>
    </div>
  );
}
