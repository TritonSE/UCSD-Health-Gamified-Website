"use client";

import { useRef, useState } from "react";
import { ToastBar, Toaster } from "react-hot-toast";

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
      {/* <Toaster
        position="bottom-center"
        containerStyle={{
          position: "absolute",
          left: "0",
          right: "0",
          top: "0",
          bottom: "50px",
          paddingBottom: "50px",
          overflow: 'hidden'
        }}
        toastOptions={{
          style: {
            boxShadow: "none",
            backgroundColor: "#FAFFEA",
            borderRadius: "16",
            maxWidth: "55ch",
            border: "1px solid #1c3a29",
          },
        }}
      /> */}
      <Toaster
        position="bottom-center"
        containerStyle={{
          position: "absolute",
          left: "0",
          right: "0",
          top: "0",
          bottom: "50px",
          paddingBottom: "50px",
          overflow: "hidden",
        }}
      >
        {(t) => (
          <ToastBar
            toast={t}
            style={{
              ...t.style,
              boxShadow: "none",
              backgroundColor: "#FAFFEA",
              borderRadius: "16",
              maxWidth: "55ch",
              border: "1px solid #1c3a29",
              animation: t.visible
                ? `${styles.customEnter} 0.2s ease-in-out`
                : `${styles.customExit} 0.2s ease-in-out forwards`,
            }}
          />
        )}
      </Toaster>
      ;
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
    </div>
  );
}
