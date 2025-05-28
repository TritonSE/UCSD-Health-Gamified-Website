import React from "react";

import ButtonCardSlider from "./ButtonCardSlider";
import styles from "./Mod1Factor1.module.css";

export default function Mod1Factor1() {
  const titles_part1 = ["COMMUTING", "RECREATIONAL RIDING", "MOUNTAIN BIKING"];
  const cards_part1 = [
    {
      icon: "/module1/road_icon.svg",
      content:
        "Consider an efficient E bike with a long range, and ways to carry cargo (like tools for the road, school stuff, your sports gear, etc)",
      imageUrl: "/module1/bike_commute.svg",
      iconAlt: "Road icon",
      imageAlt: "Bike for commuting",
    },
    {
      icon: "/module1/beach_icon.svg",
      content:
        "Will you sometimes want to hit the beach, or hop on a path or trail? Opt for a more versatile E bike with features like suspension and off-road capabilities.",
      imageUrl: "/module1/bike_recreational.svg",
      iconAlt: "Beach icon",
      imageAlt: "Bike for recreational riding",
    },
    {
      icon: "/module1/mountain_icon.svg",
      content:
        "Do you mostly want to get out and explore off-road? Choose a full-suspension E bike with powerful motors and durable components.",
      imageUrl: "/module1/bike_mountain.svg",
      iconAlt: "Mountain icon",
      imageAlt: "Bike for mountain biking",
    },
  ];

  return (
    <section id={styles.container}>
      <h1 className={styles.title}>WHAT TYPES OF RIDING DO YOU WANT TO DO?</h1>
      <p className={styles.description}>
        When choosing your E bike, consider the following factors:
      </p>
      <div className={styles.buttonContainer}>
        <ButtonCardSlider titles={titles_part1} cards={cards_part1} show_numbers={false} />
      </div>
    </section>
  );
}
