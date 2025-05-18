import Image from "next/image";
import { CSSProperties } from "react";

import Flip from "../Flip";

import styles from "./Mod1WhyRide.module.css";

export default function Mod1WhyRide() {
  const cardStyle = {
    container: {
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    } as CSSProperties,
    container_flipped: {
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    } as CSSProperties,
    front_text: {
      color: "#000",
      textAlign: "center",
    } as CSSProperties,
    back_text: {
      color: "#000",
      textAlign: "center",
    } as CSSProperties,
  };

  return (
    <div>
      <h1 className={styles.title}>WHY RIDE A LEGAL E BIKE?</h1>
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <div className={styles.card1}>
            <Flip
              front_icon="/module1/safety.svg"
              front_text="Safety"
              back_text="Legal E bikes are designed and tested to meet safety standards."
              frontColor="#F9F9F9"
              backColor="#F6FFD7"
              styles={cardStyle}
            />
          </div>
          <Image
            className={styles.road1}
            src="/module1/paved_road_outline.svg"
            alt="Paved road outline"
            width={160}
            height={160}
          />
          <div className={styles.card2}>
            <Flip
              front_icon="/module1/insurance.svg"
              front_text="Insurance"
              back_text="Many insurance companies offer coverage for legal E bikes."
              frontColor="#428BCD"
              backColor="#E2F1FF"
              styles={cardStyle}
            />
          </div>
          <Image
            className={styles.road2}
            src="/module1/paved_road_outline.svg"
            alt="Paved road outline"
            width={160}
            height={160}
          />
          <div className={styles.card3}>
            <Flip
              front_icon="/module1/legal.svg"
              front_text="Legal Protection"
              back_text="Riding a legal E bike protects you from potential legal issues."
              frontColor="#FFE5C9"
              backColor="#FFEBD5"
              styles={cardStyle}
            />
          </div>
          <Image
            className={styles.road3}
            src="/module1/paved_road_outline.svg"
            alt="Paved road outline"
            width={160}
            height={160}
          />
          <div className={styles.card4}>
            <Flip
              front_icon="/module1/air_bike.svg"
              front_text="Compatibility"
              back_text="Legal E bikes are compatible with existing bike infrastructure."
              frontColor="#FCD579"
              backColor="#FFE8B1"
              styles={cardStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
