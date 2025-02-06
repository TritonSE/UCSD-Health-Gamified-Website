
import ModIntro from "../components/ModIntro";

import styles from "./mod1.module.css";

export default function Module1() {
  return (
    <div className={styles.container}>
      {/* sidebar (temporary one, this should be replaced later) */}
      <div className={styles.sidebar}>
        Sidebar!
      </div>
      <div className={styles.content}>
        <ModIntro module_num={1} module_name="What is an E-bike?"/>
      </div>
    </div>
  );
}
