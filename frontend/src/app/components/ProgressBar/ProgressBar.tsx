import { useEffect, useRef, useState } from "react";

import styles from "./ProgressBar.module.css";

const COMPLETE_COLOR = "#BBD567";
const INCOMPLETE_COLOR = "#d9d9d9";
const HEIGHT = 28;

type ProgressBarProps = {
  currentSection: number;
  sectionCount: number;
  progress?: number;
  strokeWidth?: number;
  moduleText: string;
};

export default function ProgressBar({
  currentSection,
  sectionCount,
  strokeWidth = 4,
  moduleText,
}: ProgressBarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(910); // default fallback width

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  // Calculate circle positions based on the dynamic containerWidth
  const calculatePositions = () => {
    const margin = 18;
    const availableWidth = containerWidth - margin * 2;

    const positions = [];
    // Avoid division by zero
    const step = sectionCount > 1 ? availableWidth / (sectionCount - 1) : 0;

    for (let i = 0; i < sectionCount; i++) {
      positions.push(margin + i * step);
    }

    return positions;
  };

  const circlePositions = calculatePositions();
  const middleY = HEIGHT / 2;

  // Calculate clip path width based on sections and the dynamic containerWidth
  const calculateClipPathWidth = () => {
    if (currentSection < 0) return 0;
    if (currentSection >= sectionCount) return 100;

    const circleRadius = 14;

    if (currentSection === 0) {
      return ((circlePositions[0] + circleRadius) / containerWidth) * 100;
    }

    const currentPos = circlePositions[currentSection];
    return ((currentPos + circleRadius) / containerWidth) * 100;
  };

  const clipPathWidth = calculateClipPathWidth();

  return (
    <div ref={containerRef} className={styles.progress_bar_container}>
      <div className={styles.progress_bar}>
        {/* Gray unfilled version */}
        <svg
          width="100%"
          fill="none"
          viewBox={`0 0 ${containerWidth} ${HEIGHT}`}
          preserveAspectRatio="none"
        >
          {/* Horizontal line */}
          <path fill={INCOMPLETE_COLOR} d={`M4 ${middleY - 2}h${containerWidth - 8}v4H4z`} />
          {/* Circles */}
          <g fill="#fff" stroke={INCOMPLETE_COLOR} strokeWidth={strokeWidth}>
            {circlePositions.map((cx, index) => (
              <circle key={`unfilled-${index}`} cx={cx} cy={middleY} r="12" />
            ))}
          </g>
        </svg>

        {/* Filled version with clip path */}
        <svg
          className={styles.clipping_progress_bar}
          width="100%"
          fill="none"
          viewBox={`0 0 ${containerWidth} ${HEIGHT}`}
          preserveAspectRatio="none"
          style={{ clipPath: `inset(0 ${100 - clipPathWidth}% 0 0)` }}
        >
          <path fill={COMPLETE_COLOR} d={`M4 ${middleY - 2}h${containerWidth - 8}v4H4z`} />
          <g fill="#fff" stroke={COMPLETE_COLOR} strokeWidth={strokeWidth}>
            {circlePositions.map((cx, index) => (
              <circle key={`filled-${index}`} cx={cx} cy={middleY} r="12" fill={COMPLETE_COLOR} />
            ))}
          </g>
        </svg>

        <div
          className={styles.text_container}
          style={{ visibility: currentSection === 0 ? "hidden" : "visible" }}
        >
          <h3>{moduleText}</h3>
        </div>
      </div>
    </div>
  );
}
