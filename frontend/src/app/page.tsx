import styles from "./page.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import ModuleMap from "./components/HomePage/ModuleMap/ModuleMap";

export default function Home() {
  return (
    <main className={styles.main}>
      <Sidebar />
      <ModuleMap />
    </main>
  );
}
