"use client";

import ModuleMap from "./ModuleMap/ModuleMap";
import Sidebar from "./Sidebar/Sidebar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Sidebar />
      <ModuleMap />
    </main>
  );
}