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
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  error?: string;
};

export function TextBox({
  label,
  type,
  link,
  linkLabel,
  caption,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}: TextBoxProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [currentInputType, setCurrentInputType] = useState(type);

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
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            type={currentInputType}
            placeholder={placeholder}
            className={styles.input}
          />
          {type === "password" && value && value.length > 0 && (
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
      <div className={styles.caption}>
        {caption && !error && value && value.length == 0 && <p>{caption}</p>}
      </div>
      <div>
        {error && (
          <div className={styles.error}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
            >
              <circle cx="6" cy="6.5" r="4" fill="#B93B3B" />
              <path
                d="M6 8C6.27614 8 6.5 8.22386 6.5 8.5C6.5 8.77614 6.27614 9 6 9C5.72386 9 5.5 8.77614 5.5 8.5C5.5 8.22386 5.72386 8 6 8Z"
                fill="white"
              />
              <path
                d="M6.375 7.25C6.375 7.45711 6.20711 7.625 6 7.625C5.79289 7.625 5.625 7.45711 5.625 7.25V4.5C5.625 4.29289 5.79289 4.125 6 4.125C6.20711 4.125 6.375 4.29289 6.375 4.5V7.25Z"
                fill="white"
              />
            </svg>
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}
