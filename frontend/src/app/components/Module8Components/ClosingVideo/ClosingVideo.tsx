"use client";

import styles from "./ClosingVideo.module.css";

export default function ClosingVideo() {
  return (
    <div className={styles.container} style={{ height: "80vh" }}>
      <div className={styles.header_container}>
        <h2>Check out this video From the City of Encinitas</h2>
      </div>
      <div className={styles.ytContainer}>
        <iframe
          id="ytplayer"
          width="854"
          height="480"
          src="https://www.youtube.com/embed/vFmCdl2ASNQ?si=7R3W6hCGWoT9_a2_"
        ></iframe>
      </div>
    </div>
  );
}
