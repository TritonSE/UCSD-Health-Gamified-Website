import Image from "next/image";
import React from "react";

import styles from "./Notif.module.css";

export const SubmitNotif = ({
  cancelFunc,
  submitFunc,
  ...props
}: {
  cancelFunc: () => void;
  submitFunc: () => void | Promise<void>;
} & React.ComponentProps<"button">) => {
  const handleSubmit = async () => {
    try {
      await submitFunc();
    } catch (error) {
      console.error("Error submitting quiz:", error);
    }
  };

  return (
    <div className={styles.notif}>
      <Image
        src="/TimmySubmit.svg"
        width={165}
        height={160}
        alt="Timmy the Tire Submit notification"
      />
      <div className={styles.info}>
        <p className={styles.title}>Submit Quiz?</p>
        <p className={styles.description}>You are about to submit your quiz.</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.cancelButton} onClick={cancelFunc} {...props}>
          <p className={styles.text}>Cancel</p>
        </button>
        <button className={styles.submitButton} onClick={() => void handleSubmit()} {...props}>
          <p className={styles.text}>Submit</p>
        </button>
      </div>
    </div>
  );
};
