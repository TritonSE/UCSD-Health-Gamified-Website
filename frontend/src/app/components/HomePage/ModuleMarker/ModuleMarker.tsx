"use client";

import { useRouter } from "next/navigation";
import { MutableRefObject, ReactNode } from "react";
// import toast from "react-hot-toast";

import { showErrorToast } from "../../../utils/toastUtils";
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

// const TOAST_DURATION = 2500;

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
          showErrorToast("This module is locked!");
          return;
        }
        if (bikeIsAnimating.current) return;
        if (modulePreview >= moduleNumber) {
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
