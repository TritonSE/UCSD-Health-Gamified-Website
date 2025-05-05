import styles from "./ModuleButtons.module.css";

type ModuleButtonsProps = {
  currentSection: number;
  childrenCount: number;
  handlePrevButton: () => void;
  handleNextButton: () => void;
};

export default function ModuleButtons({
  currentSection,
  childrenCount,
  handlePrevButton,
  handleNextButton,
}: ModuleButtonsProps) {
  return (
    <div className={styles.button_container}>
      <div>
        <button
          id={styles.back_button}
          style={{ visibility: currentSection === 0 ? "hidden" : "visible" }}
          onClick={handlePrevButton}
        >
          <span>
            {/* prettier-ignore */}
            <svg width="24" height="24" fill="currentColor">
            <path d="M5.293 11.293a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414L8.414 13H18a1 1 0 1 0 0-2H8.414l3.293-3.293a1 1 0 0 0-1.414-1.414l-5 5z"/>
          </svg>
          </span>
          <span>Back</span>
        </button>
        <button
          id={styles.next_button}
          style={{ visibility: currentSection === childrenCount - 1 ? "hidden" : "visible" }}
          onClick={handleNextButton}
        >
          <span>Next</span>
          <span>
            {/* prettier-ignore */}
            <svg width="24" height="24" fill="currentColor">
            <path d="M18.707 12.707a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 1.414L15.586 11H6a1 1 0 1 0 0 2h9.586l-3.293 3.293a1 1 0 0 0 1.414 1.414l5-5z"/>
          </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
