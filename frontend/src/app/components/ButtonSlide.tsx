import React from "react";

import styles from "./ButtonSlide.module.css";

type ButtonSlideProps = {
  titles: string[];
  onClick: (index: number) => void;
  activeIndex: number;
};

const ButtonSlide: React.FC<ButtonSlideProps> = ({ titles, onClick, activeIndex }) => {
  return (
    <div className={styles.buttonSlide}>
      {titles.map((title, index) => (
        <button
          className={`${styles.button} ${index === activeIndex ? styles.active : ""}`}
          key={index}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onClick(index);
          }}
        >
          {title}
        </button>
      ))}
    </div>
  );
};

export default ButtonSlide;
