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
    </div>
  );
}
