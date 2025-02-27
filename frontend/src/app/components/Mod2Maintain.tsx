import Image from "next/image";

import styles from "./Mod2Maintain.module.css";

export default function Mod2Maintain() {
  return (
    <div className={styles.container}>
      <span>
        <h1 className={styles.title}>WHY IS BIKE MAINTENANCE IMPORTANT?</h1>
        <p className={styles.description}>
        A well-maintained bike or e-bike is safer, more efficient, and more enjoyable to ride. Regular maintenance can help prevent breakdowns, extend the life of your bike, and ensure that you're riding safely.
        </p>
      </span>
      <Image
          src="/TimmytheTire.svg"
          alt="Timmy, the tire mascot"
          width={305}
          height={295.58}
          className={styles.mascot}
        />
    </div>
  );
}
