import React from "react";

import styles from "./Notif.module.css";

export const SubmitNotif = ({
  cancelFunc,
  submitFunc,
  ...props
}: { cancelFunc: () => void } & { submitFunc: () => void } & React.ComponentProps<"button">) => {
  return (
    <div className={styles.notif}>
      <img src={"/TimmySubmit.svg"} />
      <div className={styles.info}>
        <p className={styles.title}>Submit Quiz?</p>
        <p className={styles.description}>You are about to submit your quiz.</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.submitButton} onClick={submitFunc} {...props}>
          <p className={styles.text}>Submit</p>
        </button>
        <button className={styles.cancelButton} onClick={cancelFunc} {...props}>
          <p className={styles.text}>Cancel</p>
        </button>
      </div>
    </div>
  );
};
