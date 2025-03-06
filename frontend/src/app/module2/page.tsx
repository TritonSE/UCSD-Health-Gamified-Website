import styles from "./mod2.module.css";
import Section1 from "../components/Mod2Components/Section1";
import Helmet from "../components/Mod2Components/Helmet";
import Sidebar from "../components/HomePage/Sidebar/Sidebar";
import Tip from "../components/Mod2Components/Tip";
import SimpleWay from "../components/Mod2Components/SimpleWay";
import Basic from "../components/Mod2Components/Basic";

export default function Section() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <Section1 />
        <Basic/>
        <Tip/>
        <SimpleWay/>
        <Helmet />
      </div>
    </div>
  );
}