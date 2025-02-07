
import ModTitle from "../components/ModTitle";
import Mod1Intro from "../components/Mod1Intro";

import styles from "./mod1.module.css";

export default function Module1() {
  return (
    <div className={styles.container}>
      {/* sidebar (temporary one, this should be replaced later) */}
      <div className={styles.sidebar}>
        Sidebar!
      </div>
      {/* content */}
      <div className={styles.content}>
        <ModTitle module_num={1} module_name="What is an E-bike?"/>
        <Mod1Intro />
      </div>
    </div>
  );
}
