import React from "react";

import ButtonCardSlider from "./ButtonCardSlider";
import styles from "./Section6.module.css";

export default function Section6() {
  const titles = ["Bike Lanes", "Sharrows", "Wide Roads", "Sidewalks"];
  const cards = [
    {
      title: "Bike Lanes",
      content: "Use bike lanes whenever possible, keeping to the middle of the lane.",
      image: "/module5/bike-lane.svg",
    },
    {
      title: "Bike Lanes",
      content: "Use bike lanes whenever possible, keeping to the middle of the lane.",
      image: "/module5/bike-lane.svg",
    },
    {
      title: "Bike Lanes",
      content: "Use bike lanes whenever possible, keeping to the middle of the lane.",
      image: "/module5/bike-lane.svg",
    },
    {
      title: "Bike Lanes",
      content: "Use bike lanes whenever possible, keeping to the middle of the lane.",
      image: "/module5/bike-lane.svg",
    },
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>WHERE TO RIDE</h2>
      <ButtonCardSlider titles={titles} cards={cards} />
    </section>
  );
}
