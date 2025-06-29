import Mod4 from "./Mod4";
import Mod4Title from "./Mod4Title";

import styles from "./SectionPage.module.css";

export default function SectionPage() {
  return (
    <section id={styles.section1_container}>
      {/* content */}
      {/* title and intro */}
      <Mod4Title module_num={4} module_name="FIVE Need to Know Principles" />
      <Mod4 />
    </section>
  );
}
