"use client";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

import styles from "./textBox.module.css";

export type TextBoxProps = {
  label: string;
  type: string;
  linkLabel?: string;
  link?: string;
  caption?: string;
  captionLabel?: string;
  placeholder: string;
  showPasswordToggle?: boolean;
};

export function TextBox({
  label,
  type,
  link,
  linkLabel,
  caption,
  placeholder,
  showPasswordToggle = false,
}: TextBoxProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [currentInputType, setCurrentInputType] = useState(type);
  const [inputValue, setInputValue] = useState("");

  const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
    setCurrentInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.textBox}>
      <form>
        <label className={styles.label}>
          <p>{label}</p>
        </label>
        <div className={styles.inputContainer}>
          <input
            onChange={handleInputChange}
            value={inputValue}
            type={currentInputType}
            placeholder={placeholder}
            className={styles.input}
          />
          {showPasswordToggle && type === "password" && inputValue.length > 0 && (
            <button
              onClick={togglePasswordVisibility}
              className={styles.visibilityIcon}
              type="button"
            >
              {showPassword ? (
                <Image src="/close_eye.svg" alt="Hide Password" width={22} height={23} />
              ) : (
                <Image src="/open_eye.svg" alt="Show Password" width={22} height={23} />
              )}
            </button>
          )}
        </div>
      </form>
      <div className={styles.link}>{linkLabel && <a href={link}>{linkLabel}</a>}</div>
      <div className={styles.caption}>{caption && <p>{caption}</p>}</div>
    </div>
  );
}
