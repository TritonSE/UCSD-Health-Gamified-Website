"use client";

import { useState } from "react";

import styles from "./BeVisible.module.css";
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
    text: "Ride where people can see you and wear bright clothing.",
    width: 192,
    height: 88,
    x: 390,
    y: 40,
  },
  2: {
    text: "When visibility is poor, use a front white light, red rear light, and reflectors.",
    width: 192,
    height: 104,
    x: 230,
    y: 215,
  },
  3: {
    text: "Make eye contact with others, and don’t ride on sidewalks.",
    width: 200,
    height: 88,
    x: 920,
    y: 290,
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

export default function BeVisible() {
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
        <h2>3. Be Visible</h2>
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
