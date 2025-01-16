import React from "react";

import styles from "./loginButton.module.css";

export function LoginButton() {
  return (
    <button className={styles.loginButton}>
      <div>
        <p>Sign In</p>
      </div>
    </button>
  );
}
