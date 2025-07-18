"use client";

import { useRef, useState } from "react";

import styles from "./BikeMechanic.module.css";
import BikeMechanicElements from "./BikeMechanicElements";

export default function BikeMechanic() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [rotation, setRotation] = useState(360);
  const handleLeftArrow = () => {
    setRotation((prevRotation) => prevRotation + 120);
  };

  const handleRightArrow = () => {
    setRotation((prevRotation) => prevRotation - 120);
  };

  return (
    <section id={styles.bike_mechanic_container}>
      <h2>WHEN TO TAKE BIKE TO A MECHANIC</h2>
      <div id={styles.svg_container}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1413 1114">
          <g
            className={styles.mechanic_svg}
            style={{ transform: `translateY(43px) rotate(${rotation}deg)` }}
            ref={svgRef}
          >
            <BikeMechanicElements />
            <g onClick={handleLeftArrow} className={styles.arrow_button}>
              <rect
                width="44"
                height="44"
                x="1092.77"
                y="561.598"
                fill="#1C3A29"
                rx="22"
                transform="rotate(120 1092.77 561.598)"
              ></rect>
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M1066.3 574.848a.996.996 0 0 1-1.22-.707l-1.57-5.864-5.87 1.571a.999.999 0 1 1-.51-1.932l6.83-1.83a.996.996 0 0 1 1.22.707l1.83 6.83a1 1 0 0 1-.71 1.225"
                clipRule="evenodd"
              ></path>
            </g>
            <foreignObject
              width="363"
              height="171"
              x="1115.51"
              y="649.206"
              transform="rotate(120 1115.51 649.206)"
              className={styles.svg_text}
            >
              <p>
                If you notice any <strong>major problems</strong> with your bike, such as a{" "}
                <strong>bent wheel</strong> or a <strong>damaged frame.</strong>
              </p>
            </foreignObject>
            <g onClick={handleRightArrow} className={styles.arrow_button}>
              <rect
                width="44"
                height="44"
                fill="#1C3A29"
                rx="22"
                transform="scale(1 -1)rotate(60 1278.742 239.482)"
              ></rect>
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M845.012 958.138a1 1 0 0 0-1.225-.707l-5.864 1.572-1.571-5.865a1 1 0 0 0-1.932.518l1.83 6.83a1 1 0 0 0 1.225.707l6.83-1.83a1 1 0 0 0 .707-1.225"
                clipRule="evenodd"
              ></path>
            </g>
            <g onClick={handleLeftArrow} className={styles.arrow_button}>
              <rect
                width="44"
                height="44"
                x="564.168"
                y="984.832"
                fill="#1C3A29"
                rx="22"
                transform="rotate(-120 564.168 984.832)"
              ></rect>
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M565.924 955.289a1 1 0 0 1 1.225-.707l5.864 1.571 1.571-5.864a1 1 0 0 1 1.932.517l-1.83 6.831a1 1 0 0 1-1.225.707l-6.83-1.83a1 1 0 0 1-.707-1.225"
                clipRule="evenodd"
              ></path>
            </g>
            <foreignObject
              width="363"
              height="138"
              x="491.215"
              y="952.473"
              transform="rotate(-120 491.215 952.473)"
              className={styles.svg_text}
            >
              <p>
                If your bike is making <strong>strange noises</strong> or{" "}
                <strong>behaving abnormally</strong>.
              </p>
            </foreignObject>
            <g onClick={handleRightArrow} className={styles.arrow_button}>
              <rect
                width="44"
                height="44"
                fill="#1C3A29"
                rx="22"
                transform="scale(1 -1)rotate(-60 -324.806 -554.916)"
              ></rect>
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M344.631 571.998a1 1 0 0 0 1.225-.707l1.572-5.864 5.864 1.571a1 1 0 0 0 .517-1.932l-6.83-1.83a1 1 0 0 0-1.224.707l-1.831 6.831a1 1 0 0 0 .707 1.224"
                clipRule="evenodd"
              ></path>
            </g>
            <g onClick={handleLeftArrow} className={styles.arrow_button}>
              <rect
                width="44"
                height="44"
                x="456.456"
                y="319"
                fill="#1C3A29"
                rx="22"
                transform="rotate(.272 456.456 319)"
              ></rect>
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M481.085 335.409a1 1 0 0 1-.006 1.414l-4.314 4.272 4.273 4.314a.999.999 0 1 1-1.421 1.407l-4.976-5.024a1 1 0 0 1 .006-1.414l5.024-4.976a1 1 0 0 1 1.414.007"
                clipRule="evenodd"
              ></path>
            </g>
            <foreignObject
              width="363"
              height="160"
              x="521.178"
              y="272.307"
              transform="rotate(.272 521.178 272.307)"
              className={styles.svg_text}
            >
              <p>
                If you&apos;re <strong>unsure</strong> about how to perform a{" "}
                <strong>particular maintenance task.</strong>
              </p>
            </foreignObject>
            <g onClick={handleRightArrow} className={styles.arrow_button}>
              <rect
                width="44"
                height="44"
                fill="#1C3A29"
                rx="22"
                transform="scale(-1 1)rotate(-.272 67199.155 199904.293)"
              ></rect>
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M923.666 337.511a1 1 0 0 0-.007 1.414l4.273 4.314-4.313 4.272a.999.999 0 1 0 1.407 1.421l5.024-4.976a1 1 0 0 0 .006-1.415l-4.976-5.023a1 1 0 0 0-1.414-.007"
                clipRule="evenodd"
              ></path>
            </g>
          </g>
          <g filter="url(#filter0_f_311_5055)">
            <path fill="#fff" d="M53 493h1307v568H53z"></path>
          </g>
          <defs>
            <clipPath id="clip0_311_5055">
              <path fill="#fff" d="M352.146 271h700v700h-700z"></path>
            </clipPath>
            <filter
              id="filter0_f_311_5055"
              width="1411.31"
              height="672.307"
              x="0.847"
              y="440.847"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
              <feGaussianBlur
                result="effect1_foregroundBlur_311_5055"
                stdDeviation="26.077"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  );
}
