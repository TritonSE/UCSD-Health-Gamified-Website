"use client";

import ModuleMap from "./components/HomePage/ModuleMap/ModuleMap";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}></nav>
      <ModuleMap />
    </main>
  );
}
