import React from "react";

import styles from "./Incorrect.module.css";

type IncorrectProps = {
  message: string;
};

export const Incorrect: React.FC<IncorrectProps> = ({ message }) => {
  return (
    <div className={styles.textBox}>
      <h1 className={styles.title}>Incorrect</h1>
      <p className={styles.message}>{message}</p>
    </div>
  );
};
