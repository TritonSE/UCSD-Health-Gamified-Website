import Image from "next/image";
import React from "react";

import styles from "./Notif.module.css";

export const ExitNotif = ({
  cancelFunc,
  exitFunc,
  ...props
}: { cancelFunc: () => void } & { exitFunc: () => void } & React.ComponentProps<"button">) => {
  return (
    <div className={styles.notif}>
      <Image src="/TimmyExit.svg" width={144} height={160} alt="Timmy the Tire Exit" />
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
