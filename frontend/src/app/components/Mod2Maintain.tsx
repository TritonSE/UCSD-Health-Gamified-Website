import Image from "next/image";

import styles from "./Mod2Maintain.module.css";

export default function Mod2Maintain() {
  return (
    <div id={styles.container}>
      <div className={styles.content_wrapper}>
        <div className={styles.content_container}>
          <div className={styles.text_container}>
            <h2 className={styles.title}>WHY IS BIKE MAINTENANCE IMPORTANT?</h2>
            <p
              className={styles.description}
            >{`A well-maintained bike or E bike is safer, more efficient, and more enjoyable to ride. Regular maintenance can help prevent breakdowns, extend the life of your bike, and ensure that you're riding safely.`}</p>
          </div>
          <Image
            src="/TimmytheTire.svg"
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
