"use client";

import React from "react";

import Carousel from "./Carousel";
import styles from "./Mod1ChooseBike.module.css";

export default function MiniQuiz() {
  const cards = [
    {
      title: "01- Electric Motorcycles vs. Bicycles",
      content:
        "Electric motorcycles are not bicycles and require a motorcycle license, registration and insurance, and additional modifications to be street legal to operate.",
      icon: "/module1/carousel_icon1.svg",
    },
    {
      title: "02- Recognizing Legal E Bikes",
      content:
        "Legal, classified E bikes are clearly sold and marked as such.  Unclassified “bicycle shaped objects” often sold through online retailers, slip through the cracks and are sold as toys and are often illegal to operate on roadways.  Read the fine print and check with a reputable shop, or with law enforcement to be sure what you’re buying is legal to operate.",
      icon: "/module1/carousel_icon2.svg",
    },
    {
      title: "03- Law Enforcement Actions",
      content:
        "In many cities, law enforcement can, and will cite the rider, and impound illegal devices.",
      icon: "/module1/carousel_icon3.svg",
    },
    {
      title: "04- School Parking Restrictions",
      content:
        "Schools will not issue bike parking permits for electric motorcycles or unclassified, illegal devices.",
      icon: "/module1/carousel_icon4.svg",
    },
  ];
  return (
    <section id={styles.container}>
      <h1 className={styles.title}>
        LET&apos;S TALK ABOUT “BICYCLE SHAPED OBJECTS” AND ELECTRIC MOTORCYCLES
      </h1>
      <Carousel cards={cards} />
    </section>
  );
}
