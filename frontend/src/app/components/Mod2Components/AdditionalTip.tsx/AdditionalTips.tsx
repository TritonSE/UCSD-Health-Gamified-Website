"use client";

import HoverCards from "../../HoverCards/HoverCards";

import styles from "./AdditionalTips.module.css";

export default function AdditionalTips() {
  return (
    <section className={styles.container}>
      <div className={styles.header_container}>
        <h2>ADDITIONAL TIPS</h2>
        <p>Keep these tips in mind as you use your E Bike!</p>
      </div>
      <HoverCards />
    </section>
  );
}
