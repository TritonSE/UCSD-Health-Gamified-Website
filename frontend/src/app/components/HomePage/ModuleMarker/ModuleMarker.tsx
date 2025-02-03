import { MutableRefObject, ReactNode } from "react";

import { ModuleNumbers } from "../ModuleMap/ModuleMap";

import styles from "./ModuleMarker.module.css";

type ModuleMarkerProps = {
  bikeIsAnimating: MutableRefObject<boolean>;
  modulePreview: number;
  moduleNumber: ModuleNumbers;
  setModulePreview: (moduleNumber: ModuleNumbers) => void;
  cx: string;
  cy: string;
  children: ReactNode;
};

export default function ModuleMarker({
  bikeIsAnimating,
  modulePreview,
  moduleNumber,
  setModulePreview,
  cx,
  cy,
  children,
}: ModuleMarkerProps) {
  const isModuleAccessible = modulePreview >= moduleNumber;
  const isModuleNavigatable = modulePreview + 1 === moduleNumber;

  return (
    <g
      className={`
        ${isModuleAccessible ? styles.active : ""}
        ${isModuleNavigatable ? styles.navigatable : ""}
        ${!isModuleAccessible && !isModuleNavigatable ? styles.disabled : ""}
      `}
      onClick={() => {
        if (
          modulePreview >= moduleNumber ||
          modulePreview + 1 < moduleNumber ||
          bikeIsAnimating.current
        )
          return;
        setModulePreview(moduleNumber);
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
