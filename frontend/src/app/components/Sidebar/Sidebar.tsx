"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSound } from "use-sound";

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
  const [play_open] = useSound("/audio/panel_expand.mp3", { playbackRate: 3 });
  const [play_close] = useSound("/audio/panel_collapse.mp3", { playbackRate: 3 });
  const [play_click] = useSound("/audio/pop_open.mp3", { volume: 0.75 });
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
    if (isCollapsed) {
      play_open();
    } else {
      play_close();
    }
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
          play_click();
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
