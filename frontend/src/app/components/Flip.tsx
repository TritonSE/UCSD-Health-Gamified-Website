"use client";

import Image from "next/image";
import React, { useState } from "react";

import styles from "./Flip.module.css";

export type FlipProps = {
  front_icon?: string;
  front_icon_alt?: string;
  front_text: string;
  back_text: string;
  frontColor?: string;
  backColor?: string;
  hasBullets?: boolean;
  styles?: {
    container?: React.CSSProperties;
    container_flipped?: React.CSSProperties;
    icon?: React.CSSProperties;
    title?: React.CSSProperties;
    back_text?: React.CSSProperties;
    front_text?: React.CSSProperties;
  };
};

export default function Flip({
  front_icon,
  front_icon_alt = "default alt text",
  front_text,
  back_text,
  frontColor,
  backColor,
  hasBullets = false,
  styles: customStyles,
}: FlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`${styles.container} ${isFlipped ? styles.container_flipped : ""}`}
      style={customStyles?.container}
      onMouseEnter={() => {
        setIsFlipped(true);
      }}
      onMouseLeave={() => {
        setIsFlipped(false);
      }}
    >
      {/* Front */}
      <div
        className={styles.front}
        style={{ ...customStyles?.container, backgroundColor: frontColor }}
      >
        {front_icon && (
          <Image
            style={customStyles?.icon}
            src={front_icon}
            width={69}
            height={69}
            alt={front_icon_alt}
          />
        )}
        <div style={customStyles?.title}>
          <span style={{ ...(customStyles?.front_text ?? {}) }}>{front_text}</span>
        </div>
      </div>
      {/* Back */}
      <div
        className={styles.back}
        style={{ ...customStyles?.container_flipped, backgroundColor: backColor }}
      >
        {!hasBullets ? (
          <span style={customStyles?.title}>{back_text}</span>
        ) : (
          <ul style={{ paddingLeft: "17px", ...customStyles?.title }}>
            {back_text.split("\n").map((point, index) => (
              <li
                key={index}
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "17px",
                  lineHeight: "25px",
                  textAlign: "left",
                }}
              >
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
