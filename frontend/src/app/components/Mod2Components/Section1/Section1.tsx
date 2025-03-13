import Mod2Maintain from "../../Mod2Maintain";
import Mod2Title from "../../Mod2Title";

import styles from "./Section1.module.css";

export default function Section1() {
  return (
    <section id={styles.section1_container}>
      {/* content */}
      {/* title and intro */}
      <Mod2Title module_num={2} module_name="Maintaining Your Bike and Keeping it Road Ready" />
      <Mod2Maintain />
    </section>
  );
}
