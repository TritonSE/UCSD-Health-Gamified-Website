import Image from "next/image";
import React from "react";

import Flip from "../Flip";

import styles from "./Flips.module.css";

export default function Mod1WhyRide() {
  const cardStyle = {
    container: {
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    container_flipped: {
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "DM Sans",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "24px",
    },
    front_text: {
      color: "#000",
      textAlign: "center",
    },
    back_text: {
      color: "#000",
      textAlign: "center",
    },
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CHOOSING THE RIGHT HELMET</h1>
      <div className={styles.cardContainer}>
        <Image
          src="/module3/choose_helmet.svg"
          alt="Choose Helmet Outline"
          width={322.855}
          height={252.311}
        />
        <div className={styles.card1}>
          <Flip
            front_icon="/module3/fit.svg"
            front_icon_alt="Fit"
            front_text="Fit"
            back_text={`Proper fit is essential for safety. The helmet should sit snugly on your head without feeling too tight or loose.\nAdjust the straps to secure the helmet in place.`}
            frontColor="#FFE5C9"
            backColor="#FFE5C9"
            hasBullets={true}
            styles={cardStyle}
          />
        </div>
        <div className={styles.card2}>
          <Flip
            front_icon="/module3/ventilation.svg"
            front_icon_alt="Ventilation"
            front_text="Ventilation"
            back_text="Good ventilation helps prevent overheating and fogging. Look for helmets with vents."
            frontColor="#FFE5C9"
            backColor="#FFE5C9"
            styles={cardStyle}
          />
        </div>
        <div className={styles.card3}>
          <Flip
            front_icon="/module3/style.svg"
            front_icon_alt="Style"
            front_text="Style"
            back_text="Choose a helmet that you'll enjoy wearing and that complements your riding style."
            frontColor="#FFE5C9"
            backColor="#FFE5C9"
            styles={cardStyle}
          />
        </div>
        <div className={styles.card4}>
          <Flip
            front_icon="/module3/visibility.svg"
            front_icon_alt="Visibility"
            front_text="Visibility"
            back_text="Consider helmets with reflective elements or lights for increased visibility."
            frontColor="#FFE5C9"
            backColor="#FFE5C9"
            styles={cardStyle}
          />
        </div>
        <div className={styles.card5}>
          <Flip
            front_icon="/module3/safety_standards.svg"
            front_icon_alt="Safety Standards"
            front_text="Safety Standards"
            back_text="Ensure the helmet meets safety standards like CPSC (Consumer Product Safety Commission) or EN (European Norm)."
            frontColor="#FFE5C9"
            backColor="#FFE5C9"
            styles={cardStyle}
          />
        </div>
      </div>
      <div style={{ height: "200px" }}></div>
    </div>
  );
}
