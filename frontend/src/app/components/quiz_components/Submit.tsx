import React from "react";

import styles from "./Submit.module.css";

export const Submit = ({
  handleSubmit,
  ...props
}: { handleSubmit: () => void } & React.ComponentProps<"button">) => {
  return (
    <button className={styles.button} onClick={handleSubmit} {...props}>
      <p className={styles.text}>Submit Quiz</p>
    </button>
  );
};
