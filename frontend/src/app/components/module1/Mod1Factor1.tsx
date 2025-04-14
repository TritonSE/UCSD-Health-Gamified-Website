import React from "react";

import styles from "../../module1/mod1.module.css";

import ButtonCardSlider from "./ButtonCardSlider";
import Mod1FactorTitle from "./Mod1FactorTitle";

export default function Mod1Factor1() {
  const titles_part1 = ["COMMUTING", "RECREATIONAL RIDING", "MOUNTAIN BIKING"];
  const cards_part1 = [
    {
      icon: "/module1/road_icon.svg",
      content:
        "Consider an efficient e-bike with a long range, and ways to carry cargo (like tools for the road, school stuff, your sports gear, etc)",
      imageUrl: "/module1/bike_commute.svg",
      iconAlt: "Road icon",
      imageAlt: "Bike for commuting",
    },
    {
      icon: "/module1/beach_icon.svg",
      content:
        "Will you sometimes want to hit the beach, or hop on a path or trail? Opt for a more versatile e-bike with features like suspension and off-road capabilities.",
      imageUrl: "/module1/bike_recreational.svg",
      iconAlt: "Beach icon",
      imageAlt: "Bike for recreational riding",
    },
    {
      icon: "/module1/mountain_icon.svg",
      content:
        "Do you mostly want to get out and explore off-road? Choose a full-suspension e-bike with powerful motors and durable components.",
      imageUrl: "/module1/bike_mountain.svg",
      iconAlt: "Mountain icon",
      imageAlt: "Bike for mountain biking",
    },
  ];

  return (
    <div>
      <p className={styles.text}>When choosing your E-bike, consider the following factors:</p>
      <Mod1FactorTitle number={1} step="Consider your riding style" />
      <ButtonCardSlider titles={titles_part1} cards={cards_part1} show_numbers={false} />
    </div>
  );
}
