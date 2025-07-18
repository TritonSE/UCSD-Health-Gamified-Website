import styles from "./Mod4Title.module.css";

export type ModIntroProps = {
  module_num: number;
  module_name: string;
};

export default function Mod2Title({ module_num, module_name }: ModIntroProps) {
  return (
    <div className={styles.container}>
      {/* title */}
      <h3 className={styles.subtitle}>MODULE {module_num}:</h3>
      <h1 className={styles.title}>{module_name}</h1>
      {/* image */}
    </div>
  );
}
