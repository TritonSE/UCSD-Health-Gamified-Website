import styles from "./mod2.module.css";
import Section1 from "../components/Mod2Sec1/Section1";
import Helmet from "../components/Mod2Sec1/Helmet";
import Sidebar from "../components/HomePage/Sidebar/Sidebar";
import Tip from "../components/Mod2Sec1/Tip";
import SimpleWay from "../components/Mod2Sec1/SimpleWay";

export default function Section() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <Section1 />
        <Tip/>
        <SimpleWay/>
        <Helmet />
      </div>
    </div>
  );
}