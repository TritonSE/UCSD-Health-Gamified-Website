"use client";
import React, { useState } from "react";

import styles from "./textBox.module.css";
import { ShowButtonImage } from "./showPasswordButton";
import { HideButtonImage } from "./hidePasswordButton";

export type TextBoxProps = {
  label: string;
  type: string;
  linkLabel?: string;
  link?: string;
  caption?: string;
  captionLabel?: string;
  placeholder: string;
};

export function TextBox({ label, type, link, linkLabel, caption, placeholder }: TextBoxProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.textBox}>
      <form>
        <label className={styles.label}>
          <p>{label}</p>
        </label>
        <div className={styles.inputWrapper}>
          <input
            type={type === "password" && showPassword ? "text" : type}
            placeholder={placeholder}
            className={styles.input}
          />
          <div>
            {type === "password" && !showPassword && (
              <button type="button" className={styles.button} onClick={handleShowPassword}>
                <ShowButtonImage />
              </button>
            )}
            {type === "password" && showPassword && (
              <button type="button" className={styles.button} onClick={handleShowPassword}>
                <HideButtonImage />
              </button>
            )}
          </div>
        </div>
      </form>
      <div className={styles.link}>{linkLabel && <a href={link}>{linkLabel}</a>}</div>
      <div className={styles.caption}>{caption && <p>{caption}</p>}</div>
    </div>
  );
}
