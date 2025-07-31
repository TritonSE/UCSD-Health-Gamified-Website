"use client";

import React from "react";

import Carousel from "./Carousel";
import styles from "./SafetyEquipment.module.css";

export default function SafetyEquipment() {
  const cards = [
    {
      title: "01 Bike Headlights & Taillights",
      content:
        "Help illuminate the pavement around you making the road more visible in dark environments as well as help illuminate you to other drivers on the road. " +
        "Headlights and rear red reflectors/lights are required by the law for nighttime operation.",
      icon: "/module3/carousel_icon1.svg",
    },
    {
      title: "02 High-Visibility Clothing",
      content: (
        <span>
          <strong>Wearing high-visible clothing</strong> especially at dusk and dark is important to
          help prevent accidents.
        </span>
      ),
      icon: "/module3/carousel_icon2.svg",
    },
    {
      title: "03 Bike & Tire Light Reflectors",
      content: (
        <span>
          <strong>Bike and tire light reflectors</strong> can help make your more visible to drivers
          on the road.
        </span>
      ),
      icon: "/module3/carousel_icon3.svg",
    },
    {
      title: "04 Handle Bar Rear View Mirror",
      content: (
        <span>
          <strong>A handle bar rear view mirror</strong> can help you visualize who is behind you
          while riding, but should not replace looking over your shoulder when changing lanes or
          making a turn.
        </span>
      ),
      icon: "/module3/carousel_icon4.svg",
    },
    {
      title: "05 Velcro Strap or Pant Leg Adjustment",
      content: (
        <span>
          <strong>A velcro strap</strong>, rolling your pant leg, or tucking your pants into your
          sock is recommended to prevent your pants from getting caught in your drive train which
          can lead you to lose your balance and a crash.
        </span>
      ),
      icon: "/module3/carousel_icon5.svg",
    },
  ];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ADDITIONAL SAFETY EQUIPMENT</h1>
      <h3 className={styles.subtitle}>
        Click through the carousel to learn about each equipment that keeps you safe on the road.
      </h3>
      <Carousel cards={cards} />
    </div>
  );
}
