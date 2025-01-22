import React from "react";

import styles from "./Submit.module.css";

export const Submit = ({ ...props }: React.ComponentProps<"button">) => {
  return (
    <button className={styles.button} {...props}>
      <p className={styles.text}>Submit Quiz</p>
    </button>
  );
};
