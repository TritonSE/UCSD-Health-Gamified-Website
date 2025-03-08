import Flip from "./Flip";
import styles from "./Mod1Risks.module.css";

export default function Mod1Risks() {
  // styling of cards
  const cardStyle = {
    container: {
      backgroundColor: "#bbd567",
      width: "25%",
      borderRadius: "20px",
      aspectRatio: "1 / 1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    container_flipped: {
      backgroundColor: "#f6ffd7",
      width: "25%",
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
    <div>
      <h1 className={styles.title}>Risks associated with illegal or unclassified bicycles:</h1>
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
        By understanding the different e-bike classifications, the importance of riding a legal
        e-bike, and the risks associated with illegal or unclassified bicycles, you can make an
        informed decision that ensures a safe and enjoyable riding experience.
      </p>
    </div>
  );
}
