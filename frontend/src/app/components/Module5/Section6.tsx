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
      title: "Sharrows",
      content:
        "Use sharrows (shared lane markings) when available and do your best to ride at the speed of the roadway. When it’s busy, if cars (3 or more) are packing up behind you, look for a safe opportunity to signal, pull off where there is room and allow to pass before re-entering the roadway.",
      image: "/module5/sharrows.svg",
    },
    {
      title: "Wide Roadways",
      content:
        "For wide Roadways with no bike lane or sharrow markings, ride as close to the right edge of the road as practicable, but check that the vehicle lane is clear, signal, then “take the lane” when necessary for safety, such as: When passing parked cars When avoiding hazards If the road becomes too narrow to share safely",
      image: "/module5/wide-roads.svg",
    },
    {
      title: "Sidewalks",
      content:
        "Depending on where you are, riding on sidewalks may be prohibited. Take the time to learn what’s allowed where you live, around your school and always obey posted signs. Riding on sidewalks is often or generally not allowed in business districts, like busy shopping areas, downtown areas or other places where there are many pedestrians present",
      image: "/module5/sidewalks.svg",
    },
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>WHERE TO RIDE</h2>
      <ButtonCardSlider titles={titles} cards={cards} />
    </section>
  );
}
