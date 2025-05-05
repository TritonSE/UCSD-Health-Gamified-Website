import React from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import Helmet from "../components/module3/Helmet";

import styles from "./mod3.module.css";

export default function Module1() {
  return (
    <div className={styles.container}>
      {/* sidebar */}
      <div className={styles.hideModile}>
        <Sidebar />
      </div>
      {/* content */}
      <div className={styles.content}>
        <Helmet />
      </div>
    </div>
  );
}
