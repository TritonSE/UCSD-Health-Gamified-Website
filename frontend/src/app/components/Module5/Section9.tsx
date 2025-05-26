import Image from "next/image";
import React from "react";

import styles from "./Section9.module.css";

export default function Section9() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>IMPORTANT NOTES</h2>
      <p className={styles.description}>Keep these notes in mind - they might come in handy!</p>
      <Image src="./important-notes.svg" alt="Important Notes" width={900} height={537} />
    </section>
  );
}
