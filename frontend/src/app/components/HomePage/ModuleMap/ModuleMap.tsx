"use client";

import { useRef, useState } from "react";

import AnimatedPath from "../AnimatedPath/AnimatedPath";
import BackgroundPaths from "../BackgroundPaths/BackgroundPaths";
import Bike from "../Bike/Bike";
import ForegroundPaths from "../ForegroundPaths/ForegroundPaths";
import MaskDefinitions from "../MaskDefinitions/MaskDefinitions";
import ModuleMarker from "../ModuleMarker/ModuleMarker";

import styles from "./ModuleMap.module.css";
import { moduleMarkerData } from "./moduleMarkerData";

export type ModuleNumbers = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type UserData = {
  currentModule: ModuleNumbers;
};

// Temporary user data with starting point
const userData: UserData = {
  currentModule: 0,
};

export default function ModuleMap() {
  const [modulePreview, setModulePreview] = useState<ModuleNumbers>(userData.currentModule);
  const bikeIsAnimating = useRef(false);

  return (
    // prettier-ignore
    <svg className={styles.svg} width="1151" height="1024" viewBox="0 0 1151 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
      <MaskDefinitions modulePreview={modulePreview}/>
      <BackgroundPaths />
      {moduleMarkerData.map((moduleMarker, index) => (
        <ModuleMarker
          key={"module-marker-" + index}
          bikeIsAnimating={bikeIsAnimating}
          setModulePreview={setModulePreview}
          modulePreview={modulePreview}
          moduleNumber={moduleMarker.number}
          cx={moduleMarker.cx}
          cy={moduleMarker.cy}
        >
          <path d={moduleMarker.pathD} fill="var(--marker-color)" />
          <circle cx={moduleMarker.cx} cy={moduleMarker.cy} r="28.5" fill="white" />
        </ModuleMarker>
      ))}
      <AnimatedPath
        bikeIsAnimating={bikeIsAnimating}
        setModulePreview={setModulePreview}
        modulePreview={modulePreview}
      />
      <Bike
        bikeIsAnimating={bikeIsAnimating}
        modulePreview={modulePreview}
        currentModule={userData.currentModule}
      />
      <ForegroundPaths />
    </svg>
  );
}
