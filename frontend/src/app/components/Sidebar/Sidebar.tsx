"use client";

import { useState } from "react";

import styles from "./Sidebar.module.css";

type SidebarProps = {
  onToggle?: (collapsed: boolean) => void;
};

export default function Sidebar({ onToggle }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    onToggle?.(newState);
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
