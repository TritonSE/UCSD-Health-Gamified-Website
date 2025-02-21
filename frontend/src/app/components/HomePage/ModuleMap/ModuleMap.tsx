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

export type UserData = {
  currentModule: ModuleNumbers;
  lastCompletedModule: ModuleNumbers;
};

// Temporary user data with starting point
const initialUserData: UserData = {
  currentModule: 2,
  lastCompletedModule: 2,
};

export default function ModuleMap() {
  const [userData, setUserData] = useState(initialUserData);

  const bikeIsAnimating = useRef(false);

  return (
    <div className={styles.svg_container}>
      <svg
        className={styles.svg}
        width="1151"
        height="1024"
        viewBox="0 0 1151 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <MaskDefinitions
          modulePreview={userData.currentModule}
          initialModule={initialUserData.currentModule}
        />
        <BackgroundPaths />
        {moduleMarkerData.map((moduleMarker, index) => (
          <ModuleMarker
            key={"module-marker-" + index}
            bikeIsAnimating={bikeIsAnimating}
            setUserData={setUserData}
            userData={userData}
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
          setUserData={setUserData}
          modulePreview={userData.currentModule}
        />
        <Bike
          bikeIsAnimating={bikeIsAnimating}
          modulePreview={userData.currentModule}
          initialModule={initialUserData.currentModule}
        />
        <ForegroundPaths />
      </svg>
      {/* Temporary button to simulate module completion */}
      <button
        id={styles.temp_complete_module}
        onClick={() => {
          setUserData((prev) => {
            if (prev.lastCompletedModule >= prev.currentModule) return prev;
            return { ...prev, lastCompletedModule: prev.currentModule };
          });
        }}
      >
        Complete Module {userData.currentModule}
      </button>
      {/* Temporary text to show sidebar with overflow container */}
      {/* <p className={styles.temporary_text}>
        Doggo ipsum shibe very hand that feed shibe doggo shoob heck sub woofer doing me a frighten,
        most angery pupper I have ever seen such treat boofers length boy. Long woofer puggo floofs,
        you are doin me a concern. You are doing me a frighten wow very biscit doge such treat doing
        me a frighten puggo corgo, super chub wow very biscit super chub dat tungg tho blep. Ruff
        smol pats, blep. Maximum borkdrive such treat boof, ur givin me a spook. Woofer super chub
        long water shoob heckin good boys and girls snoot puggo puggorino, wow such tempt very hand
        that feed shibe doing me a frighten snoot. most angery pupper I have ever seen very hand
        that feed shibe stop it fren.
      </p> */}
    </div>
  );
}
