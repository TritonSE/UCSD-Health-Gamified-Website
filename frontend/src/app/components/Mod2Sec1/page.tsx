import Mod2Maintain from "../Mod2Maintain";
import Mod2Title from "../Mod2Title";
import Sidebar from "../HomePage/Sidebar/Sidebar";
import styles from "./mod2.module.css"

export default function Section1() {
  return (
    <div className={styles.container}>
      <Sidebar />
      {/* content */}
      <div className={styles.content}>
        {/* title and intro */}
        <Mod2Title module_num={2} module_name="Maintaining Your Bike and 
Keeping it Road Ready" />
        <Mod2Maintain />
      </div>
    </div>
  );
}