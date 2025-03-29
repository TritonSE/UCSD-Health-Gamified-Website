"use client";

import Image from "next/image";
import { useState } from "react";

import { Account } from "./Account";
import { MapButton } from "./MapButton";
import { Modules } from "./Modules";
import { ProgressBar } from "./ProgressBar";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mapKind, setMapKind] = useState<"primary" | "secondary">("primary");

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleMap = () => {
    setMapKind((prevKind) => (prevKind === "primary" ? "secondary" : "primary"));
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
      <ProgressBar isCollapsed={isCollapsed} percentage={50} />
      <MapButton isCollapsed={isCollapsed} kind={mapKind} handleClick={handleMap} />
      <Modules isCollapsed={isCollapsed} />
      <Account isCollapsed={isCollapsed} />
    </nav>
  );
}
