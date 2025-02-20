import Image from "next/image";

import styles from "./ModTitle.module.css";

export type ModIntroProps = {
  module_num: number;
  module_name: string;
};

export default function ModIntro({ module_num, module_name }: ModIntroProps) {
  return (
    <div className={styles.container}>
      {/* title */}
      <h2 className={styles.subtitle}>MODULE {module_num}:</h2>
      <h1 className={styles.title}>{module_name}</h1>
      {/* image */}
      <div>
        <Image
          src="/TimmyWithPencil.svg"
          alt="Timmy, the tire mascot"
          width={305}
          height={295.58}
          className={styles.mascot}
        />
        <Image
          src="/TimmyHand.svg"
          alt=""
          width={39}
          height={37.81}
          className={styles.mascotHand}
        />
      </div>
    </div>
  );
}
