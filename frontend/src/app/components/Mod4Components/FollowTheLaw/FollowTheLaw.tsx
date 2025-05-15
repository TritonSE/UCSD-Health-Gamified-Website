"use client";

import { useState } from "react";
import styles from "./FollowTheLaw.module.css";
import GraphSVG from "./Graph";

type CircleData = { text: string; width: number; height: number };

const CIRCLE_DATA: Record<number, CircleData> = {
  1: {
    text: "Your safety and the image of bicyclists depend on you. You have the same rights and responsibilities as drivers.",
    width: 222,
    height: 120,
  },
  2: {
    text: "Ride with traffic; use the rightmost lane headed in the direction you are going.",
    width: 245,
    height: 88,
  },
  3: {
    text: "Obey traffic signals and stop signs.",
    width: 183,
    height: 72,
  },
};

export default function FollowTheLaw() {
  const [activeCircles, setActiveCircles] = useState<number[]>([]);
  const [inactiveCircles, setInactiveCircles] = useState<number[]>([]);
  const [hoveredCircle, setHoveredCircle] = useState<number | null>(null);

  const handleCircleClick = (number: string) => {
    const parsedNumber = parseInt(number);
    if (CIRCLE_DATA[parsedNumber]) {
      setActiveCircles((prev) =>
        prev.includes(parsedNumber)
          ? prev.filter((num) => num !== parsedNumber)
          : [...prev, parsedNumber]
      );
      setInactiveCircles((prev) =>
        prev.includes(parsedNumber)
          ? prev.filter((num) => num !== parsedNumber)
          : [...prev, parsedNumber]
      );
    }
  };

  const closeTextbox = () => {
    setActiveCircles([]);
  };

  return (
    <section className={styles.container}>
      <div className={styles.header_container}>
        <h2>1. Follow the Law</h2>
        <p>Click on the green circles to check your understanding!</p>
      </div>
      <GraphSVG
        handleCircleClick={handleCircleClick}
        activeCircles={activeCircles}
        inactiveCircles={inactiveCircles}
        hoveredCircle={hoveredCircle}
        setHoveredCircle={setHoveredCircle}
      />
    </section>
  );
}