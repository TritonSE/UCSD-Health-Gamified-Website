import React, { useState } from "react";

import styles from "./textBox.module.css";

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
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  // prevent form from submitting after clicking enter
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.textBox}>
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>
          <p>{label}</p>
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className={styles.input}
          value={value}
          onChange={handleChange}
        />
      </form>
      <div className={styles.link}>{linkLabel && <a href={link}>{linkLabel}</a>}</div>
      <div className={styles.caption}>{caption && <p>{caption}</p>}</div>
    </div>
  );
}
