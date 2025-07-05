import Image from "next/image";

import styles from "./Mod4.module.css";

export default function Mod4() {
  return (
    <div id={styles.container}>
      <div className={styles.content_wrapper}>
        <div className={styles.content_container}>
          <div className={styles.text_container}>
            <h2 className={styles.title}>Smart & Safe Riding</h2>
            <p
              className={styles.description}
            >{`In this module, you’ll learn essential tips to follow the law, ride predictably, and stay visible on the road. We’ll also cover how to anticipate obstacles and ensure your bike is in top condition before every ride. By practicing these habits, you’ll protect yourself and others while setting a positive example for all bicyclists.`}</p>
          </div>
          <Image
            src="/TimmyWithPen.svg"
            alt="Timmy, the tire mascot"
            width={305}
            height={295.58}
            className={styles.mascot}
          />
        </div>
      </div>
    </div>
  );
}
