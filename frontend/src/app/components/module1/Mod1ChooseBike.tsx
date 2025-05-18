import CardSlide from "../CardSlide";

import styles from "./Mod1ChooseBike.module.css";

export default function Mod1ChooseBike() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CHOOSING THE RIGHT E BIKE</h1>
      <p className={styles.description}>
        Why choose an E Bike? E Bikes are a fun and eco-friendly way to get around. They can help
        you:
      </p>
      <div className={styles.cardContainerWrapper}>
        <div className={styles.cardContainer}>
          <CardSlide title="SAVE TIME" content="Get to school faster without breaking a sweat." />
          <CardSlide title="SAVE MONEY" content="Reduce transportation costs." />
          <CardSlide
            title="STAY ACTIVE"
            content="Enjoy the benefits of cycling while getting a boost from the electric motor."
          />
        </div>
      </div>
    </div>
  );
}
