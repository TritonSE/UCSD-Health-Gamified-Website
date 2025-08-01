"use client";

import { useEffect, useRef, useState } from "react";

import { get } from "../../../api/requests";
import { useAuth } from "../../../contexts/AuthContext";
import { showErrorToast } from "../../../utils/toastUtils";
import AnimatedPath from "../AnimatedPath/AnimatedPath";
import BackgroundPaths from "../BackgroundPaths/BackgroundPaths";
import Bike from "../Bike/Bike";
import ForegroundPaths from "../ForegroundPaths/ForegroundPaths";
import MaskDefinitions from "../MaskDefinitions/MaskDefinitions";
import ModuleMarker from "../ModuleMarker/ModuleMarker";

import styles from "./ModuleMap.module.css";
import { moduleMarkerData } from "./moduleMarkerData";

export type ModuleNumbers = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type UserData = {
  currentModule: ModuleNumbers;
  lastCompletedModule: ModuleNumbers;
};

// // Temporary user data with starting point
const initialUserData: UserData = {
  currentModule: 0,
  lastCompletedModule: 0,
};

export default function ModuleMap() {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState<UserData>(initialUserData);
  const bikeIsAnimating = useRef(false);

  useEffect(() => {
    if (!currentUser) return;
    const load = async () => {
      try {
        const res = await get(`/api/user/get/${encodeURIComponent(currentUser.email)}`);
        const user = (await res.json()) as { module?: number };
        const curMod = Math.max(0, Math.min(10, user.module ?? 0)) as ModuleNumbers;
        const lastMod = Math.max(0, Math.min(9, (user.module ?? 0) - 1)) as ModuleNumbers;
        setUserData({ currentModule: curMod, lastCompletedModule: lastMod });
      } catch (err) {
        showErrorToast("Error loading user data. Please try again.");
      }
    };
    void load();
  }, [currentUser]);

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
        {userData.currentModule && (
          <MaskDefinitions
            modulePreview={userData.currentModule}
            initialModule={userData.lastCompletedModule}
          />
        )}

        {!userData.currentModule && (
          <MaskDefinitions
            modulePreview={userData.currentModule}
            initialModule={userData.lastCompletedModule}
          />
        )}

        <BackgroundPaths />
        {moduleMarkerData.map((moduleMarker, index) => (
          <ModuleMarker
            key={"module-marker-" + index}
            bikeIsAnimating={bikeIsAnimating}
            userData={userData}
            moduleNumber={moduleMarker.number}
            cx={moduleMarker.cx}
            cy={moduleMarker.cy}
          >
            <path d={moduleMarker.pathD} fill="var(--marker-color)" />
            <circle cx={moduleMarker.cx} cy={moduleMarker.cy} r="28.5" fill="white" />
          </ModuleMarker>
        ))}
        <AnimatedPath bikeIsAnimating={bikeIsAnimating} modulePreview={userData.currentModule} />
        <Bike
          bikeIsAnimating={bikeIsAnimating}
          modulePreview={userData.currentModule}
          initialModule={userData.lastCompletedModule}
        />
        <ForegroundPaths />
      </svg>
    </div>
  );
}
