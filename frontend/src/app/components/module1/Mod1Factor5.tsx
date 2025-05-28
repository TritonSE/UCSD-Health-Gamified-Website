import React from "react";

import ButtonCardSlider from "./ButtonCardSlider";
import styles from "./Mod1Factor1.module.css";

export default function Mod1Factor5() {
  const titles = ["CLASS 1", "CLASS 2", "CLASS 3"];
  const cards = [
    {
      content:
        "Equipped with a pedal-assist motor that activates only when you're pedaling (no throttle). The motor's assistance is limited to 20 mph (32 km/h).",
      content2title: "Understanding the Difference",
      content2:
        "Ideal for commuting and recreational riding, especially in areas with speed limits.",
    },
    {
      content:
        "Equipped with a throttle that allows you to accelerate without pedaling. The motor's assistance is limited to 20 mph (32 km/h).",
      content2title: "Understanding the Difference",
      content2: "Offers more convenience for riders who prefer not to pedal constantly.",
    },
    {
      content:
        "Only for riders age 16 and older. Equipped with a pedal-assist motor that activates only when you're pedaling (no throttle). The motor's assistance is limited to 28 mph (45 km/h).",
      content2title: "Understanding the Difference",
      content2:
        "Provides higher speeds for longer distances, but are subject to more regulations such as age, and are often not allowed on paths or trails due to their higher speed.",
    },
  ];

  return (
    <section id={styles.container}>
      <h1 className={styles.title}>CONSIDER E BIKE CLASSIFICATION</h1>
      <div className={styles.buttonContainer}>
        <ButtonCardSlider titles={titles} cards={cards} show_numbers={true} />
      </div>
    </section>
  );
}
