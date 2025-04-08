import Flip from "../Flip";

import styles from "./Mod1Risks.module.css";

export default function Mod1Risks() {
  // styling of cards
  const cardStyle = {
    container: {
      width: "25%",
      borderRadius: "8px",
      aspectRatio: "6 / 5",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    container_flipped: {
      width: "25%",
      borderRadius: "8px",
      aspectRatio: "6 / 5",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    front_text: {
      color: "#1C3A29",
    },
    back_text: {
      color: "#1C3A29",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "150%" /* 27px */,
      letterSpacing: "0.36px",
    },
  };

  return (
    <div>
      <h1 className={styles.title}>Risks associated with illegal or unclassified bicycles</h1>
      <div className={styles.row}>
        <Flip
          front_text="Safety Risks"
          back_text="Illegal or unclassified bicycles may not meet safety standards, posing a risk to you and others."
          backColor="#f6ffd7"
          frontColor="#bbd567"
          styles={cardStyle}
        />
        <Flip
          front_text="Legal Consequences"
          back_text="Riding an illegal or unclassified bicycle can result in fines or other penalties."
          backColor="#f6ffd7"
          frontColor="#bbd567"
          styles={cardStyle}
        />
        <Flip
          front_text="Issurance Issues"
          back_text="Insurance coverage may not be available for illegal or unclassified bicycles."
          backColor="#f6ffd7"
          frontColor="#bbd567"
          styles={cardStyle}
        />
      </div>
      <p className={styles.text}>
        By understanding the different E bike classifications, the importance of riding a legal E
        bike, and the risks associated with illegal or unclassified bicycles, you can make an
        informed decision that ensures a safe and enjoyable riding experience.
      </p>
    </div>
  );
}
