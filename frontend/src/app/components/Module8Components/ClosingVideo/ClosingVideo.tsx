"use client";

import styles from "./ClosingVideo.module.css";

export default function ClosingVideo() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>A Message From the City of Encinitas</div>
        </div>
        <div className={styles.ytContainer}>
          <iframe
            id="ytplayer"
            width="854"
            height="480"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
