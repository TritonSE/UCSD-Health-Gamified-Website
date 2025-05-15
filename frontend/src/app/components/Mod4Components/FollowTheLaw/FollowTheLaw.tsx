"use client";

import { useState } from "react";
import styles from "./FollowTheLaw.module.css";
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
    text: "Your safety and the image of bicyclists depend on you. You have the same rights and responsibilities as drivers.",
    width: 222,
    height: 120,
    x: 270,
    y: 220,
  },
  2: {
    text: "Ride with traffic; use the rightmost lane headed in the direction you are going.",
    width: 245,
    height: 88,
    x: 615,
    y: 375,
  },
  3: {
    text: "Obey traffic signals and stop signs.",
    width: 183,
    height: 72,
    x: 820,
    y: 70,
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

  const closeTextbox = (circleNumber: number) => {
    setActiveCircles((prev) => prev.filter((num) => num !== circleNumber));
    setInactiveCircles((prev) => [...prev, circleNumber]);
  };

  return (
    <section className={styles.container}>
      <div className={styles.header_container}>
        <h2>1. Follow the Law</h2>
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