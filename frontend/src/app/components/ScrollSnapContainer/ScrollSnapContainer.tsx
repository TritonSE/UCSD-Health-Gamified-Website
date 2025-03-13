"use client";

import { Children, ReactNode, useState } from "react";

import ProgressBar from "../ProgressBar/ProgressBar";

import styles from "./ScrollSnapContainer.module.css";

type ScrollSnapContainerProps = {
  children: ReactNode;
  moduleText: string;
};

export default function ScrollSnapContainer({ children, moduleText }: ScrollSnapContainerProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const childrenCount = Children.count(children);

  const handlePrevButton = () => {
    if (currentSection === 0) return;
    setCurrentSection((prev) => prev - 1);
  };

  const handleNextButton = () => {
    if (currentSection === childrenCount - 1) return;
    setCurrentSection((prev) => prev + 1);
  };
  return (
    <div className={styles.scroll_snap_container}>
      <div className={styles.progress_bar}>
        <ProgressBar
          currentSection={currentSection}
          sectionCount={childrenCount}
          moduleText={moduleText}
        />
      </div>
      <div className={styles.slider_container}>
        <div
          style={{ transform: `translateX(${-100 * currentSection}%)` }}
          className={styles.slider_track}
        >
          {children}
        </div>
      </div>
      <div className={styles.button_container}>
        <button
          style={{ visibility: currentSection === 0 ? "hidden" : "visible" }}
          onClick={handlePrevButton}
        >
          Prev
        </button>
        <button
          style={{ visibility: currentSection === childrenCount - 1 ? "hidden" : "visible" }}
          onClick={handleNextButton}
        >
          Next
        </button>
      </div>
    </div>
  );
}
