"use client";

import Sidebar from "../components/Sidebar/Sidebar"; // Assuming a Sidebar component exists and might be wanted
import { FinalTest } from "../components/final_test/FinalTest";

import styles from "./FinalTestPage.module.css"; // Styles for the page layout

export default function FinalTestPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.hideMobile}>
        {" "}
        <Sidebar />
      </div>
      <div className={styles.contentContainer}>
        <FinalTest />
      </div>
    </div>
  );
}
