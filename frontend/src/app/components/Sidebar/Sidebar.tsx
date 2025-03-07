"use client";

import Image from "next/image";
import { useState } from "react";

import { Account } from "./Account";
import { Modules } from "./Modules";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className={`${styles.nav} ${isCollapsed ? styles.collapsed : ""}`}>
      <button
        className={`${styles.collapseButton} ${isCollapsed ? styles.open : ""}`}
        onClick={toggleSidebar}
      >
        {isCollapsed ? (
          <Image
            src={"/sidebar_expanded_icon.svg"}
            width={23}
            height={18}
            alt="Sidebar Expand Icon"
          />
        ) : (
          <Image
            src={"/sidebar_collapsed_icon.svg"}
            width={23}
            height={18}
            alt="Sidebar Collapse Icon"
          />
        )}
      </button>
      <Modules isCollapsed={isCollapsed} />
      <Account isCollapsed={isCollapsed} />
    </nav>
  );
}
