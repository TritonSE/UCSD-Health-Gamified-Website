import React from "react";

import Flip from "./Flip";
import styles from "./Mod1Factor3.module.css";
import Mod1FactorTitle from "./Mod1FactorTitle";

export default function Mod1Factor3() {
  // NOTE: we could probably move cardStyle into a separate CSS file?
  const cardStyle = {
    container: {
      background: "#BBD567",
      width: "20%",
      borderRadius: "20px",
      aspectRatio: "1 / 1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    container_flipped: {
      background: "#F6FFD7",
      width: "20%",
      borderRadius: "20px",
      aspectRatio: "1 / 1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    front_text: {
      color: "#1C3A29",
      textAlign: "center",
    },
    back_text: {
      color: "#1C3A29",
      textAlign: "center",
    },
  };
  return (
    <>
      <Mod1FactorTitle number={3} step="Evaluate key features" />
      <div className={styles.row}>
        <Flip
          front_text="Motor Power"
          back_text="The motor's wattage determines the amount of assistance provided."
          styles={cardStyle}
        />
        <Flip
          front_text="Motor Power"
          back_text="The motor's wattage determines the amount of assistance provided."
          styles={cardStyle}
        />
        <Flip
          front_text="Motor Power"
          back_text="The motor's wattage determines the amount of assistance provided."
          styles={cardStyle}
        />
      </div>
      <div className={styles.row}>
        <Flip
          front_text="Motor Power"
          back_text="The motor's wattage determines the amount of assistance provided."
          styles={cardStyle}
        />
        <Flip
          front_text="Motor Power"
          back_text="The motor's wattage determines the amount of assistance provided."
          styles={cardStyle}
        />
        <Flip
          front_text="Motor Power"
          back_text="The motor's wattage determines the amount of assistance provided."
          styles={cardStyle}
        />
      </div>
    </>
  );
}
