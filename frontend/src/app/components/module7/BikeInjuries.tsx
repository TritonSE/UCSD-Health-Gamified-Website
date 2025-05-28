import React from "react";

import styles from "./BikeInjuries.module.css";

const Page2: React.FC = () => {
  return (
    <section id={styles.container}>
      <h1 className={styles.title}>BIKE RELATED INJURIES & FATALITIES</h1>
      <div className={styles.content}>
        <div className={styles.textSection}>
          <div className={`${styles.point} ${styles.point1}`}>
            <span className={styles.number}>1.</span>
            <p>
              &nbsp;&nbsp;E Bike-related injuries have surged at Rady Children’s Hospital, San
              Diego, from fewer than 10 cases in &nbsp;&nbsp;2021 to{" "}
              <strong>nearly 300 in 2024.</strong>
            </p>
          </div>
          <div className={`${styles.point} ${styles.point2}`}>
            <span className={styles.number}>2.</span>
            <p>
              As E Bikes continue to gain popularity we expect this number to continue to grow
              significantly.
            </p>
          </div>
          <div className={`${styles.point} ${styles.point3}`}>
            <span className={styles.number}>3.</span>
            <p>
              Injuries include road rash, cuts requiring suture repair, broken bones, serious head
              and brain injuries, and other life altering injuries including paralysis.
            </p>
          </div>
          <div className={`${styles.point} ${styles.point4}`}>
            <span className={styles.number}>4.</span>
            <p>
              There have been several cases of E Bike related accidents resulting in death
              throughout San Diego County in the past several years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page2;
