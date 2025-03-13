import Image from "next/image";
import Circle from "../Circle/Circle";

import styles from "./mod2.module.css";

export default function Basic() {
  return (
    <section className={styles.container}>
      <div className={styles.headerText}>BASIC MAINTENANCE TIPS:</div>
      <div className={styles.text}>
        By following these tips, you can keep your bike or e-bike road ready and enjoy a safe and
        enjoyable riding experience!
      </div>
      <div className={styles.imageContainer}>
      <div className={styles.image}>
        <Image src="/bicycle.svg" alt="Bicycle Diagram" width={871.5} height={403} />
        <div className={styles.circle1}>
          <Circle number={1} />
        </div>
        <div className={styles.circle2}>
          <Circle number={2} />
        </div>
        <div className={styles.circle3}>
          <Circle number={3} />
        </div>
        <div className={styles.circle4}>
          <Circle number={4} />
        </div>
        <div className={styles.circle5}>
          <Circle number={5} />
        </div>
        <div>
    </div>
    </div>
        </div>
    </section>
  );
}