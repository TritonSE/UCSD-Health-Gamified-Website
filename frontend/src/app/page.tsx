"use client";

import ModuleMap from "./components/HomePage/ModuleMap/ModuleMap";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.sidebarWrapper}>
        <Sidebar />
      </div>
      <ModuleMap />
    </main>
  );
}