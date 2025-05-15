import Image from "next/image";
import React from "react";

import ModuleIntro from "../components/AllModules/ModuleIntro/ModuleIntro";
import ModuleSliderContainer from "../components/ModuleSliderContainer/ModuleSliderContainer";
import Sidebar from "../components/Sidebar/Sidebar";
import BikeInjuries from "../components/module7/BikeInjuries";
import RoleModels from "../components/module7/RoleModels";

import styles from "./mod7.module.css";

export default function Module7() {
  return (
    <div className={styles.container}>
      {/* sidebar */}
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      {/* content */}
      <ModuleSliderContainer moduleText="MODULE 7: Teen & Parent education & Awareness">
        <ModuleIntro
          moduleNumber={7}
          title="Teen & Parent education & Awareness"
          subtitle="Guiding Safe Riding Together"
          description={
            <p>
              <strong>Please complete this section with a parent or guardian.</strong> As E Bikes
              become an increasingly popular mode of transportation for teens, it is essential for
              families to understand the associated risks and best safety practices. This section
              equips parents and guardians with the knowledge and tools needed to actively support
              safe riding habits, minimize risks, and foster responsible decision-making in young
              riders.
            </p>
          }
          Mascot={
            <Image
              src="/module7/TimmyParents.svg"
              alt="Timmy the tire"
              width={320}
              height={329}
              className={styles.mascot}
            />
          }
        />
        <BikeInjuries />
        <RoleModels />
      </ModuleSliderContainer>
    </div>
  );
}
