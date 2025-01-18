import React from "react";

import styles from "./textBox.module.css";

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
  return (
    <div className={styles.textBox}>
      <form>
        <label className={styles.label}>
          <p>{label}</p>
        </label>
        <input type={type} placeholder={placeholder} className={styles.input} />
      </form>
      <div className={styles.link}>{linkLabel && <a href={link}>{linkLabel}</a>}</div>
      <div className={styles.caption}>{caption && <p>{caption}</p>}</div>
    </div>
  );
}
