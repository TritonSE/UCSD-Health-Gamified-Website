"use client";

import { useState } from "react";

import styles from "./BePredictable.module.css";
import GraphSVG from "./Graph";

type CircleData = {
  text: string;
  width: number;
  height: number;
  x: number;
  y: number;
};

const CIRCLE_DATA: Record<number, CircleData> = {
  1: {
    text: "Make your intentions clear to everyone on the road. Ride in a straight line.",
    width: 192,
    height: 104,
    x: 550,
    y: 195,
  },
  2: {
    text: "Signal turns and check behind you well before turning or changing lanes.",
    width: 192,
    height: 104,
    x: 340,
    y: 75,
  },
  3: {
    text: "Don’t swerve in between parked cars.",
    width: 192,
    height: 72,
    x: 1015,
    y: 185,
  },
};

function Textbox({
  text,
  width,
  height,
  x,
  y,
}: {
  text: string;
  width: number;
  height: number;
  x: number;
  y: number;
}) {
  const textboxX = x - width - 16;

  return (
    <div
      className={styles.textbox}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: "absolute",
        left: `${textboxX}px`,
        top: `${y}px`,
      }}
    >
      <div className={styles.textboxContent}>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default function BePredictable() {
  const [activeCircles, setActiveCircles] = useState<number[]>([]);
  const [inactiveCircles, setInactiveCircles] = useState<number[]>([]);
  const [hoveredCircle, setHoveredCircle] = useState<number | null>(null);

  const handleCircleClick = (number: string) => {
    const parsedNumber = parseInt(number);
    if (CIRCLE_DATA[parsedNumber]) {
      setActiveCircles((prev) =>
        prev.includes(parsedNumber)
          ? prev.filter((num) => num !== parsedNumber)
          : [...prev, parsedNumber],
      );
      setInactiveCircles((prev) =>
        prev.includes(parsedNumber)
          ? prev.filter((num) => num !== parsedNumber)
          : [...prev, parsedNumber],
      );
    }
  };
  return (
    <section className={styles.container}>
      <div className={styles.header_container}>
        <h2>2. Be Predictable</h2>
        <p>Click on the green circles to check your understanding!</p>
      </div>
      <div className={styles.graphContainer}>
        <GraphSVG
          handleCircleClick={handleCircleClick}
          activeCircles={activeCircles}
          inactiveCircles={inactiveCircles}
          hoveredCircle={hoveredCircle}
          setHoveredCircle={setHoveredCircle}
        />
        {activeCircles.map((circleNumber) => {
          const circle = CIRCLE_DATA[circleNumber];
          if (!circle) return null;
          return (
            <Textbox
              key={circleNumber}
              text={circle.text}
              width={circle.width}
              height={circle.height}
              x={circle.x}
              y={circle.y}
            />
          );
        })}
      </div>
    </section>
  );
}
