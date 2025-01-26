import React from "react";

import styles from "./loginButton.module.css";

export type LoginButtonProps = {
  label: string;
  onClick?: () => void;
};

export function LoginButton({ label, onClick }: LoginButtonProps) {
  return (
    <button className={styles.loginButton} onClick={onClick}>
      <div>
        <p>{label}</p>
      </div>
    </button>
  );
}
