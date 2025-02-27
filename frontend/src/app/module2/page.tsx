import Mod2Maintain from "../components/Mod2Maintain";
import Mod2Title from "../components/Mod2Title";
import Sidebar from "../components/HomePage/Sidebar/Sidebar";

import styles from "./page.module.css";

export default function Module2() {
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