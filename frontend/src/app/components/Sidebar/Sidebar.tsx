"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { useAuth } from "../../contexts/AuthContext";

import { Account } from "./Account";
import { MapButton } from "./MapButton";
import { Modules } from "./Modules";
import { ProgressBar } from "./ProgressBar";
import type { User } from "../../api/user";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const { currentUser } = useAuth();
  const [user, setUser] = useState<User | null>(currentUser);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [percent, setPercent] = useState<number>(0);
  const [mapKind, setMapKind] = useState<"primary" | "secondary">("primary");
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (user?.module) {
      setPercent(Math.round(Math.min(((user.module - 1) / 9) * 100, 100)));
    }
  }, [user]);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

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
      <ProgressBar isCollapsed={isCollapsed} percentage={percent} />
      <MapButton isCollapsed={isCollapsed} kind={mapKind} handleClick={handleMap} />
      <Modules currentModule={user?.module} isCollapsed={isCollapsed} />
      {user && <Account user={user} isCollapsed={isCollapsed} />}
      {/* TESTING BUTTON BELLOW TODO: DELETE AFTER DONE AND POTENTIALLY MAKE USER NO LONGER A USESTATE */}
      <button
        id={styles.temp_complete_module}
        onClick={() => {
          setUser((prev) => {
            if (!prev) return prev;
            const nextModule = Math.min(prev.module + 1, 10); // Assuming max 9 modules, module 10 is beyond scope
            return { ...prev, module: nextModule };
          });
        }}
      >
        Complete Module {user?.module}
      </button>
    </nav>
  );
}
