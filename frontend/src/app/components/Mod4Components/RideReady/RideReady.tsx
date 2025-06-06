"use client";

import { useState } from "react";
import styles from "./RideReady.module.css";
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
    text: "Check that your tires are inflated",
    width: 265,
    height: 56,
    x: 430,
    y: 356 - 56 / 2,
  },
  2: {
    text: "Check that chains are in place",
    width: 265,
    height: 56,
    x: 585,
    y: 432 - 56 / 2,
  },
  3: {
    text: "Check that brakes are working",
    width: 265,
    height: 56,
    x: 400,
    y: 111 - 56 / 2,
  },
  4: {
    text: "Check that quick-release levers are closed",
    width: 265,
    height: 72,
    x: 985,
    y: 379 - 56 / 2,
  },
  5: {
    text: "Check that helmet and tools are ready for ride",
    width: 265,
    height: 72,
    x: 960,
    y: 120 - 56 / 2,
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

export default function RideReady() {
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
        <h2>5. Ride Ready</h2>
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
