import React from "react";

import styles from "./Notif.module.css";

export const ExitNotif = ({
  cancelFunc,
  exitFunc,
  ...props
}: { cancelFunc: () => void } & { exitFunc: () => void } & React.ComponentProps<"button">) => {
  return (
    <div className={styles.notif}>
      <img src={"/TimmyExit.svg"} />
      <div className={styles.info}>
        <p className={styles.title}>Exit Quiz?</p>
        <p className={styles.description}>Your progress will not be saved.</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.cancelButton} onClick={cancelFunc} {...props}>
          <p className={styles.text}>Cancel</p>
        </button>
        <button className={styles.submitButton} onClick={exitFunc} {...props}>
          <p className={styles.text}>Exit</p>
        </button>
      </div>
    </div>
  );
};
