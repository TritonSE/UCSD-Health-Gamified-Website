import Mod1FactorTitle from "../components/Mod1FactorTitle";
import Mod1Intro from "../components/Mod1Intro";
import ModTitle from "../components/ModTitle";

import styles from "./mod1.module.css";

export default function Module1() {
  return (
    <div className={styles.container}>
      {/* sidebar (temporary one, this should be replaced later) */}
      <div className={styles.sidebar}>Sidebar!</div>
      {/* content */}
      <div className={styles.content}>
        <ModTitle module_num={1} module_name="What is an E-bike?" />
        <Mod1Intro />
        <br />
        <br />
        <Mod1FactorTitle number={1} step="What types of riding do YOU want to do?" />
      </div>
    </div>
  );
}
