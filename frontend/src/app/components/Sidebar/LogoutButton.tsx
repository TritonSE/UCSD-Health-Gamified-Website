"use client";

import Image from "next/image";
import React, { useState } from "react";

import styles from "./LogoutButton.module.css";

type Props = {
  isCollapsed?: boolean;
  handleClick: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const LogoutButton: React.FC<Props> = ({ isCollapsed = false, handleClick, ...props }) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => {
    setIsHovered(true);
  };
  const onMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonClass = (styles.button += ` ${styles.primary}`);
  const Logout = "/logout.svg";
  return (
    <button
      className={isCollapsed ? `${buttonClass} ${styles.collapsed}` : buttonClass}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {!isHovering && <Image src={Logout} width={24} height={20} alt="Logout Icon" />}
      {isHovering && <Image src={"/logout_hover.svg"} width={24} height={20} alt="Logout Icon" />}
      <p className={`${styles.text} ${isCollapsed ? styles.collapsed : ""}`}>Log Out</p>
    </button>
  );
};
