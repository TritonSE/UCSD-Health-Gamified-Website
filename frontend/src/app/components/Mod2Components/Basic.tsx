import Image from "next/image";

import styles from "./mod2.module.css";

export default function Basic() {
  return (
    <section className={styles.container}>
      <div className={styles.headerText}>BASIC MAINTENANCE TIPS:</div>
      <div className={styles.text}>
        By following these tips, you can keep your bike or e-bike road ready and enjoy a safe and
        enjoyable riding experience!
      </div>
      <div className={styles.image}>
        <Image src="/bicycle.svg" alt="Bicycle Diagram" width={871.5} height={403} />
      </div>
    </section>
  );
}
