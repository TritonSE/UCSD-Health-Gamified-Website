"use client";

import Image from "next/image";
import React, { useState } from "react";

import styles from "./MapButton.module.css";

type Props = {
  isHomePage?: boolean;
  isCollapsed?: boolean;
  handleClick: () => void;
  isSelected?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export const MapButton: React.FC<Props> = ({
  isHomePage = false,
  isCollapsed = false,
  handleClick,
  ...props
}) => {
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
    // note: order matters here
    if (isPressed) return "/Map_Selected.svg";
    if (isHovering) return "/Map_Hover.svg";
    if (isHomePage) return "/Map_Selected.svg";
    return "/Map.svg";
  };

  return (
    <button
      className={`${styles.button} ${isCollapsed ? styles.collapsed : ""} ${isHomePage ? styles.homePage : ""}`}
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
