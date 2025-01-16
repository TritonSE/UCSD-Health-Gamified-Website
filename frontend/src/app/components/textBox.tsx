import React from "react";

import styles from "./textBox.module.css";

export interface TextBoxProps {
  label: string;
  type: string;
  linkLabel?: string;
  link?: string;
}

export function TextBox({ label, type, link, linkLabel }: TextBoxProps) {
  return (
    <div className={styles.textBox}>
      <form>
        <label className={styles.label}>
          <p>{label}</p>
        </label>
        <input type={type} className={styles.input} />
      </form>
      <div className={styles.link}>{linkLabel && <a href={link}>{linkLabel}</a>}</div>
    </div>
  );
}
