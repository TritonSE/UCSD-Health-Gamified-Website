"use client";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

import styles from "./TextBox.module.css";

export type TextBoxProps = {
  label: string;
  type: string;
  linkLabel?: string;
  link?: string;
  caption?: string;
  captionLabel?: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function TextBox({
  label,
  type,
  link,
  linkLabel,
  caption,
  placeholder,
  onChange,
}: TextBoxProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [currentInputType, setCurrentInputType] = useState(type);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
    setCurrentInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <div className={styles.textBox}>
      <form>
        <label className={styles.label}>
          <p>{label}</p>
        </label>
        <div className={styles.inputContainer}>
          <input
            onChange={handleChange}
            value={inputValue}
            type={currentInputType}
            placeholder={placeholder}
            className={styles.input}
          />
          {type === "password" && inputValue.length > 0 && (
            <button
              onClick={togglePasswordVisibility}
              className={styles.visibilityIcon}
              type="button"
              aria-label={showPassword ? "Hide Password" : "Show Password"}
              aria-pressed={showPassword}
            >
              {showPassword ? (
                <Image src="/open_eye.svg" alt="Hide Password" width={22} height={23} />
              ) : (
                <Image src="/close_eye.svg" alt="Show Password" width={22} height={23} />
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
