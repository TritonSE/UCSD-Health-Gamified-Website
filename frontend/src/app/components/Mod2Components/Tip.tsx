"use client";

import HoverCard from "../HoverCard/HoverCard";

import styles from "./mod2.module.css";

export default function Tip() {
  return (
    <section className={styles.container}>
      <div className={styles.headerText}>ADDITIONAL TIPS</div>
      <HoverCard />
    </section>
  );
}
