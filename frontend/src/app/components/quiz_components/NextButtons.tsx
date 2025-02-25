import React from "react";

import styles from "./NextButtons.module.css";

type Props = {
  label: string;
  kind?: "primary" | "secondary";
  handleClick: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const NextButtons: React.FC<Props> = ({
  label,
  kind = "primary",
  handleClick,
  ...props
}) => {
  let buttonClass = styles.button;
  switch (kind) {
    case "primary":
      buttonClass += ` ${styles.primary}`;
      break;
    case "secondary":
      buttonClass += ` ${styles.secondary}`;
      break;
  }
  return (
    <button className={buttonClass} onClick={handleClick} {...props}>
      <p className={styles.text}>{label}</p>
    </button>
  );
};
