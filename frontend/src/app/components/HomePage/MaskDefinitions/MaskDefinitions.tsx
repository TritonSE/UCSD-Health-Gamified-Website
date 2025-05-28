import { useEffect, useRef } from "react";

import { ModuleNumbers } from "../ModuleMap/ModuleMap";

import styles from "./MaskDefinitions.module.css";
import { ROAD_MASK_PATHS } from "./maskData";

type MaskDefinitionsProps = {
  modulePreview: ModuleNumbers;
  initialModule: ModuleNumbers;
};

const DRAW_PATH_DURATION = 1.2;

export default function MaskDefinitions({ modulePreview, initialModule }: MaskDefinitionsProps) {
  const maskPathRefs = useRef<SVGPathElement[]>([]);

  useEffect(() => {
    maskPathRefs.current.forEach((path, index) => {
      if (index < modulePreview) return;
      const svgPath = path;
      const length = svgPath.getTotalLength().toString();
      svgPath.style.strokeDasharray = length;
      svgPath.style.strokeDashoffset = length;
    });
  }, []);

  useEffect(() => {
    if (modulePreview === initialModule) return;
    const pathElement = maskPathRefs.current[modulePreview - 1];
    if (!pathElement) return;
    pathElement.style.animation = `${styles.DrawPath} ${DRAW_PATH_DURATION}s ease-in-out forwards`;
  }, [modulePreview]);

  return (
    <defs>
      <linearGradient
        id="bike_headlight_gradient"
        x1="125.371"
        y1="38.9073"
        x2="158.953"
        y2="31.2657"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FCD579" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <clipPath id="clip0_97_2230">
        <rect width="1151" height="1024" fill="white" />
      </clipPath>
      {/* Path Masks */}
      {ROAD_MASK_PATHS.map((maskPath) => (
        <mask key={`road-mask-${maskPath.moduleNumber}`} id={`road-mask-${maskPath.moduleNumber}`}>
          <path
            ref={(el) => {
              if (el) maskPathRefs.current.push(el);
            }}
            className={[
              styles.path_mask,
              modulePreview < maskPath.moduleNumber ? styles.inactive : "",
            ]
              .filter(Boolean)
              .join(" ")}
            d={maskPath.d}
            stroke="white"
            strokeWidth={maskPath.strokeWidth}
          />
        </mask>
      ))}
    </defs>
  );
}
