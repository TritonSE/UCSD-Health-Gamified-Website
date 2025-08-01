"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { useAuth } from "../../contexts/AuthContext";
import { auth } from "../../firebase-config.js";

import { Account } from "./Account";
import { LogoutButton } from "./LogoutButton";
import { MapButton } from "./MapButton";
import { Modules } from "./Modules";
import { ProgressBar } from "./ProgressBar";
import styles from "./Sidebar.module.css";

import type { User } from "../../api/user";

type SidebarProps = {
  isHomePage?: boolean;
  currentlyOn?: number | null;
};

const SIDEBAR_STORAGE_KEY = "sidebar-collapsed-state";

export default function Sidebar({ isHomePage = false, currentlyOn = null }: SidebarProps) {
  const { currentUser } = useAuth();
  const [user, setUser] = useState<User | null>(currentUser);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const savedState = sessionStorage.getItem(SIDEBAR_STORAGE_KEY);
      return savedState !== null ? (JSON.parse(savedState) as boolean) : false;
    }
    return false;
  });
  const [percent, setPercent] = useState<number>(0);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    sessionStorage.setItem(SIDEBAR_STORAGE_KEY, JSON.stringify(!isCollapsed));
  };

  const Router = useRouter();

  useEffect(() => {
    if (user?.module) {
      setPercent(Math.round(Math.min(((user.module - 1) / 9) * 100, 100)));
    }
  }, [user]);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      Router.push("/signin");
    } catch (error) {
      console.error("Error signing out:", error);
    }
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
      <MapButton
        isCollapsed={isCollapsed}
        handleClick={() => {
          Router.push("/");
        }}
        isHomePage={isHomePage}
      />
      <Modules
        currentModule={user?.module}
        isCollapsed={isCollapsed}
        earnedCert={user?.module === 10}
        currentlyOn={currentlyOn}
      />
      {user && <Account user={user} isCollapsed={isCollapsed} />}
      <LogoutButton
        isCollapsed={isCollapsed}
        handleClick={() => {
          void handleLogout();
        }}
      />
    </nav>
  );
}
