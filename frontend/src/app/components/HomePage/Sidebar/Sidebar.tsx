"use client";

import { useState } from "react";

import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className={`${styles.nav} ${isCollapsed ? styles.collapsed : ""}`}>
      <button className={styles.collapseButton} onClick={toggleSidebar}>
        {isCollapsed ? ">" : "<"}
      </button>
      {!isCollapsed}
    </nav>
  );
}
