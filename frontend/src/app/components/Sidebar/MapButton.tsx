"use client";

import Image from "next/image";
import React, { useState } from "react";

import styles from "./MapButton.module.css";

type Props = {
  isCollapsed?: boolean;
  kind?: "primary" | "secondary";
  handleClick: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const MapButton: React.FC<Props> = ({
  isCollapsed = false,
  kind = "primary",
  handleClick,
  ...props
}) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => {
    setIsHovered(true);
  };
  const onMouseLeave = () => {
    setIsHovered(false);
  };

  let buttonClass = styles.button;
  let Map = "/Map.svg";
  switch (kind) {
    case "primary":
      buttonClass += ` ${styles.primary}`;
      break;
    case "secondary":
      buttonClass += ` ${styles.secondary}`;
      Map = "/Map_Selected.svg";
      break;
  }
  return (
    <button
      className={buttonClass}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {!isHovering && <Image src={Map} width={24} height={20} alt="Map Picture" />}
      {isHovering && <Image src={"/Map_Hover.svg"} width={24} height={20} alt="Map Picture" />}
      {!isCollapsed && <p className={styles.text}>Map</p>}
    </button>
  );
};
