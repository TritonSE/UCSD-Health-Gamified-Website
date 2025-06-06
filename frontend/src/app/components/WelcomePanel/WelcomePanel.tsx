import Image from "next/image";

import styles from "./WelcomePanel.module.css";

const LOGOS = [
  { src: "ucsd_logo", alt: "UCSD Logo", width: 154 },
  { src: "rady_childrens_health_logo", alt: "Rady Children's Health Logo", width: 86 },
  { src: "safe_kids_logo", alt: "Safe Kids Logo", width: 43 },
  { src: "bike_coalition_logo", alt: "Bike Coalition Logo", width: 86 },
];

export default function WelcomePanel() {
  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.components}>
        <div className={styles["svg-container"]}>
          <Image
            src="/Timmy.svg"
            alt="Timmy, the tire mascot"
            width={320}
            height={417}
            aria-hidden
          />
        </div>
        <div className={styles.positionedText}>
          <h2>Welcome to the E-Bike Training Course!</h2>
        </div>
        <ul>
          {LOGOS.map((logo, index) => (
            <li key={index}>
              <Image
                src={`/company-logos/${logo.src}.webp`}
                alt={logo.alt}
                width={logo.width}
                height={50}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
