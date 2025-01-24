import React from "react";

import styles from "./loginButton.module.css";

export type LoginButtonProps = {
  label: string;
};

export function LoginButton({ label }: LoginButtonProps) {
  return (
    <button className={styles.loginButton}>
      <p>{label}</p>
    </button>
  );
}
