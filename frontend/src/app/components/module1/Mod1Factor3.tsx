import { CSSProperties } from "react";

import Flip from "../Flip";

import styles from "./Mod1Factor3.module.css";

export default function Mod1Factor3() {
  // NOTE: we could probably move cardStyle into a separate CSS file?
  const cardStyle = {
    container: {
      backgroundColor: "#bbd567",
      width: "20%",
      borderRadius: "20px",
      aspectRatio: "1 / 1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    } as CSSProperties,
    container_flipped: {
      backgroundColor: "#f6ffd7",
      width: "20%",
      borderRadius: "20px",
      aspectRatio: "1 / 1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    } as CSSProperties,
    front_text: {
      color: "#1C3A29",
      textAlign: "center",
    } as CSSProperties,
    back_text: {
      color: "#1C3A29",
      textAlign: "center",
    } as CSSProperties,
  };
  return (
    <section id={styles.container}>
      <h1 className={styles.title}>EVALUATE KEY FEATURES</h1>
      <div className={styles.content}>
        <div className={styles.row}>
          <Flip
            front_text="Motor Power"
            back_text="The motor's wattage determines the amount of assistance provided."
            backColor="#f6ffd7"
            frontColor="#bbd567"
            styles={cardStyle}
          />
          <Flip
            front_text="Battery Capacity"
            back_text="A larger battery capacity offers longer range."
            backColor="#f6ffd7"
            frontColor="#bbd567"
            styles={cardStyle}
          />
          <Flip
            front_text="Range"
            back_text="Consider your daily commute or recreational riding distance."
            backColor="#f6ffd7"
            frontColor="#bbd567"
            styles={cardStyle}
          />
        </div>
      </div>
      <div className={styles.row}>
        <Flip
          front_text="Frame Type"
          back_text="Choose a frame that fits your height and riding style."
          backColor="#f6ffd7"
          frontColor="#bbd567"
          styles={cardStyle}
        />
        <Flip
          front_text="Gears"
          back_text="The number of gears affects the bike's versatility."
          backColor="#f6ffd7"
          frontColor="#bbd567"
          styles={cardStyle}
        />
        <Flip
          front_text="Suspension"
          back_text="Suspension can improve comfort and handling on uneven terrain."
          backColor="#f6ffd7"
          frontColor="#bbd567"
          styles={cardStyle}
        />
      </div>
    </section>
  );
}
