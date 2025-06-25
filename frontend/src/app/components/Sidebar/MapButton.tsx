"use client";

import Image from "next/image";
import React, { useState } from "react";

import styles from "./MapButton.module.css";

type Props = {
  isCollapsed?: boolean;
  kind?: "primary" | "secondary";
  handleClick: () => void;
  isSelected?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export const MapButton: React.FC<Props> = ({ isCollapsed = false, handleClick, ...props }) => {
  const [isHovering, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const onMouseEnter = () => {
    setIsHovered(true);
  };
  const onMouseLeave = () => {
    setIsHovered(false);
  };
  const onMouseDown = () => {
    setIsPressed(true);
  };
  const onMouseUp = () => {
    setIsPressed(false);
  };

  React.useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsPressed(false);
    };

    if (isPressed) {
      document.addEventListener("mouseup", handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isPressed]);

  const getImageSrc = () => {
    if (isPressed) return "/Map_Selected.svg";
    if (isHovering) return "/Map_Hover.svg";
    return "/Map.svg";
  };

  return (
    <button
      className={`${styles.button} ${styles.primary} ${isCollapsed ? styles.collapsed : ""}`}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      {...props}
    >
      <Image src={getImageSrc()} width={24} height={20} alt="Map Picture" />
      <p className={`${styles.text} ${isCollapsed ? styles.collapsed : ""}`}>Map</p>
    </button>
  );
};
