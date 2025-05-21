import { CSSProperties } from "react";

import styles from "./ModuleProgressBar.module.css";

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
  moduleText,
}: ProgressBarProps) {
  return (
    <div className={styles.progress_bar_container}>
      <div className={styles.progress_bar}>
        <div className={styles.empty_bar}>
          {Array.from({ length: sectionCount }, (_, index) => (
            <div key={index} className={styles.circle} />
          ))}
          <div className={styles.line}></div>
        </div>

        <div
          className={styles.filled_bar}
          style={
            {
              "--current-section": `${currentSection}`,
              "--section-count": `${sectionCount - 1}`,
            } as CSSProperties
          }
        >
          {Array.from({ length: sectionCount }, (_, index) => (
            <div key={index} className={styles.circle} />
          ))}
          <div className={styles.line}></div>
        </div>

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
