import React from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import Page4 from "../components/module3/Page4";

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
        {/* title and intro */}
        <Page4 />
      </div>
    </div>
  );
}
