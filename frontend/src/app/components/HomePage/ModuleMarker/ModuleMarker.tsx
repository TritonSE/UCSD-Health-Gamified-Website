"use client";

import { useRouter } from "next/navigation";
import { MutableRefObject, ReactNode } from "react";
import toast from "react-hot-toast";
import { useSound } from "use-sound";

import { ModuleNumbers, UserData } from "../ModuleMap/ModuleMap";

import styles from "./ModuleMarker.module.css";

type ModuleMarkerProps = {
  bikeIsAnimating: MutableRefObject<boolean>;
  moduleNumber: ModuleNumbers;
  userData: UserData;
  cx: string;
  cy: string;
  children: ReactNode;
};

const TOAST_DURATION = 2500;

export default function ModuleMarker({
  bikeIsAnimating,
  userData,
  moduleNumber,
  cx,
  cy,
  children,
}: ModuleMarkerProps) {
  const modulePreview = userData.currentModule;
  const isModuleAccessible = modulePreview >= moduleNumber;
  const isModuleCompleted = userData.lastCompletedModule >= moduleNumber;
  const isModuleNavigatable = userData.lastCompletedModule >= moduleNumber - 1;
  const [play_click] = useSound("/audio/window_open.mp3");
  const [play_issue] = useSound("/audio/toggle_off.mp3");

  const router = useRouter();

  return (
    <g
      className={[
        isModuleAccessible ? styles.active : "",
        isModuleCompleted ? styles.completed : "",
        isModuleNavigatable ? styles.navigatable : "",
        !isModuleAccessible && !isModuleNavigatable ? styles.disabled : "",
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={() => {
        if (!isModuleNavigatable) {
          play_issue();
          toast(
            <div className={`${styles.module_error_toast} toast`}>
              <p>
                <span>Error: </span>This module is locked!
              </p>
              <p>{`Make sure you've submitted your answers and passed the previous module quiz.`}</p>
            </div>,
            { id: "module_error_toast", duration: TOAST_DURATION },
          );
          return;
        }
        if (bikeIsAnimating.current) return;
        if (modulePreview >= moduleNumber) {
          play_click();
          router.push(`/module${moduleNumber}`);
          return;
        }
      }}
    >
      {children}
      <text
        className={styles.marker_text}
        x={cx}
        y={cy}
        fill="var(--marker-color)"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {moduleNumber}
      </text>
    </g>
  );
}
