"use client";

import ModuleMap from "./components/HomePage/ModuleMap/ModuleMap";
import styles from "./page.module.css";
import Sidebar from "./components/HomePage/Sidebar/Sidebar";

export default function Home() {
  return (
    <main className={styles.main}>
       <Sidebar />
      <ModuleMap />
    </main>
  );
}
