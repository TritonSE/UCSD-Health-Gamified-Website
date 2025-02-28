import React from "react";

import ButtonCardSlider from "./ButtonCardSlider";
import Mod1FactorTitle from "./Mod1FactorTitle";

export default function Mod1Factor5() {
  const titles = ["CLASS 1", "CLASS 2", "CLASS 3"];
  const cards = [
    {
      content:
        "Equipped with a pedal-assist motor that activates only when you're pedaling (no throttle). The motor's assistance is limited to 20 mph (32 km/h).",
      imageUrl: "/module1/bike_commute.svg",
      iconAlt: "Road icon",
      imageAlt: "Bike for commuting",
    },
    {
      content:
        "Equipped with a throttle that allows you to accelerate without pedaling. The motor's assistance is limited to 20 mph (32 km/h).",
      imageUrl: "/module1/bike_recreational.svg",
      iconAlt: "Beach icon",
      imageAlt: "Bike for recreational riding",
    },
    {
      content:
        "Only for riders age 16 and older. Equipped with a pedal-assist motor that activates only when you're pedaling (no throttle). The motor's assistance is limited to 28 mph (45 km/h).",
      imageUrl: "/module1/bike_mountain.svg",
      iconAlt: "Mountain icon",
      imageAlt: "Bike for mountain biking",
    },
  ];

  return (
    <div style={{ marginTop: "80px" }}>
      <Mod1FactorTitle number={5} step="Consider e-bike classification" />
      {/* TODO: refactor the below slider to match the Figma */}
      <ButtonCardSlider titles={titles} cards={cards} show_numbers={true} />
    </div>
  );
}
