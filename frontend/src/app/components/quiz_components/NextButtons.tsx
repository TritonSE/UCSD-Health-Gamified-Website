import React from "react";

import styles from "./NextButtons.module.css";

type Props = {
  label: string;
  kind?: "primary" | "secondary";
  handleClick: () => void | Promise<void>; // Allow both sync and async functions
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

  const handleAsyncClick = () => {
    const result = handleClick();
    // Handle the promise if it exists, but don't return it
    if (result instanceof Promise) {
      result.catch(console.error); // Optional: handle errors
    }
  };

  return (
    <button className={buttonClass} onClick={handleAsyncClick} {...props}>
      <p className={styles.text}>{label}</p>
    </button>
  );
};
