"use client";
import { useState } from "react";

import styles from "./Checkbox.module.css";

const optionTexts: Record<string, { header: string; text: string }> = {
  A: {
    header: "A is for Air:",
    text: "Check your tires to make sure they are inflated to the correct pressure.",
  },
  B: {
    header: "B is for Brakes:",
    text: "Test your brakes to ensure they are working properly.",
  },
  C: {
    header: "C is for Chain:",
    text: "Inspect your chain for wear and tear. Lubricate it if necessary.",
  },
};

const SelectedRectangle = ({
  header,
  text,
  isVisible,
}: {
  header: string;
  text: string;
  isVisible: boolean;
}) => {
  return (
    <div className={`${styles.selectedRectangle} ${isVisible ? styles.visible : ""}`}>
      <div className={styles.popupHeader}>{header}</div>
      <div className={styles.popupText}>{text}</div>
    </div>
  );
};

const Checkbox = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option],
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.outerRectangle}>
          <div className={styles.innerRectangle}>
            <div className={styles.textRectangle}>ABC Bike Check</div>
            <div className={styles.checkboxGroup}>
              {["A", "B", "C"].map((option) => (
                <label className={styles.checkboxLabel} key={option}>
                  <input
                    type="checkbox"
                    className={styles.checkboxInput}
                    checked={selectedOptions.includes(option)}
                    onChange={() => {
                      handleCheckboxChange(option);
                    }}
                  />
                  <span className={selectedOptions.includes(option) ? styles.checkedText : ""}>
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rightContent}>
        {["A", "B", "C"].map((option) => (
          <SelectedRectangle
            key={option}
            header={optionTexts[option].header}
            text={optionTexts[option].text}
            isVisible={selectedOptions.includes(option)}
          />
        ))}
      </div>
    </div>
  );
};

export default Checkbox;
