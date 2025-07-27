import Image from "next/image";
import React from "react";

import styles from "./Mod1Classes.module.css";
import TableCard from "./TableCard";

const Mod1Classes: React.FC = () => {
  const data = [
    {
      headerIcon: "/module1/pedal_bike.svg",
      headerText: "Pedal Bike",
      headerIconAlt: "Pedal Bike Icon",

      section1: [
        {
          icon: "/module1/red_cross.svg",
          text: "Pedal Assist",
          iconAlt: "Red Cross Icon",
        },
        {
          icon: "/module1/red_cross.svg",
          text: "Throttle",
          iconAlt: "Red Cross Icon",
        },
      ],
      section2: [
        {
          icon: "/module1/odometer.svg",
          text: "≤ Speed Limit",
          iconAlt: "Odometer Icon",
        },
        {
          icon: "/module1/helmet.svg",
          text: "Required under 18 years old",
          iconAlt: "Helmet Icon",
        },
      ],
      section3: [
        {
          icon: "/module1/red_cross.svg",
          text: "Sidewalks",
          iconAlt: "Red Cross Icon",
        },
        {
          icon: "/module1/green_check.svg",
          text: "Trails",
          iconAlt: "Green Check Icon",
        },
      ],
    },
    {
      headerIcon: "/module1/electric_bike_dark.svg",
      headerText: "Class 1",
      headerIconAlt: "Electric Bike Icon",

      section1: [
        {
          icon: "/module1/green_check.svg",
          text: "Pedal Assist",
          iconAlt: "Green Check Icon",
        },
        {
          icon: "/module1/red_cross.svg",
          text: "Throttle",
          iconAlt: "Red Cross Icon",
        },
      ],
      section2: [
        {
          icon: "/module1/odometer.svg",
          text: "≤ 20 mph",
          iconAlt: "Odometer Icon",
        },
        {
          icon: "/module1/helmet.svg",
          text: "Required under 18 years old",
          iconAlt: "Helmet Icon",
        },
      ],
      section3: [
        {
          icon: "/module1/red_cross.svg",
          text: "Sidewalks",
          iconAlt: "Red Cross Icon",
        },
        {
          icon: "/module1/green_check.svg",
          text: "Trails",
          iconAlt: "Green Check Icon",
        },
      ],
    },
    {
      headerIcon: "/module1/electric_bike_light.svg",
      headerText: "Class 2",
      headerIconAlt: "Electric Bike Icon",

      section1: [
        {
          icon: "/module1/green_check.svg",
          text: "Pedal Assist",
          iconAlt: "Green Check Icon",
        },
        {
          icon: "/module1/green_check.svg",
          text: "Throttle",
          iconAlt: "Green Check Icon",
        },
      ],
      section2: [
        {
          icon: "/module1/odometer.svg",
          text: "≤ 20 mph",
          iconAlt: "Odometer Icon",
        },
        {
          icon: "/module1/helmet.svg",
          text: "Required under 18 years old",
          iconAlt: "Helmet Icon",
        },
        {
          icon: "/module1/mini_bike.svg",
          text: "≥ 16 years old to ride",
          iconAlt: "Pedal Bike Icon",
        },
      ],
      section3: [
        {
          icon: "/module1/red_cross.svg",
          text: "Sidewalks",
          iconAlt: "Red Cross Icon",
        },
        {
          icon: "/module1/green_check.svg",
          text: "Trails",
          iconAlt: "Green Check Icon",
        },
      ],
    },
    {
      headerIcon: "/module1/electric_bike_dark.svg",
      headerText: "Class 3",
      headerIconAlt: "Electric Bike Icon",

      section1: [
        {
          icon: "/module1/green_check.svg",
          text: "Pedal Assist",
          iconAlt: "Green Check Icon",
        },
        {
          icon: "/module1/red_cross.svg",
          text: "Throttle",
          iconAlt: "Red Cross Icon",
        },
      ],
      section2: [
        {
          icon: "/module1/odometer.svg",
          text: "≤ 28 mph",
          iconAlt: "Odometer Icon",
        },
        {
          icon: "/module1/helmet.svg",
          text: "Required for all ages",
          iconAlt: "Helmet Icon",
        },
      ],
      section3: [
        {
          icon: "/module1/red_cross.svg",
          text: "Sidewalks",
          iconAlt: "Red Cross Icon",
        },
        {
          icon: "/module1/red_cross.svg",
          text: "Trails",
          iconAlt: "Red Cross Icon",
        },
      ],
    },
    {
      headerIcon: "/module1/motorcycle.svg",
      headerText: "E Motorcycle",
      headerIconAlt: "Motorcycle Icon",

      section1: [
        {
          icon: "/module1/red_cross.svg",
          text: "Pedal Assist",
          iconAlt: "Red Cross Icon",
        },
        {
          icon: "/module1/green_check.svg",
          text: "Throttle",
          iconAlt: "Green Check Icon",
        },
      ],
      section2: [
        {
          icon: "/module1/odometer.svg",
          text: "60+ mph",
          iconAlt: "Odometer Icon",
        },
        {
          icon: "/module1/helmet.svg",
          text: "Required for all ages",
          iconAlt: "Helmet Icon",
        },
        {
          icon: "/module1/mini_bike.svg",
          text: "≥ 16 years old to ride",
          iconAlt: "Pedal Bike Icon",
        },
      ],
      section3: [
        {
          icon: "/module1/red_cross.svg",
          text: "Sidewalks",
          iconAlt: "Red Cross Icon",
        },
        {
          icon: "/module1/red_cross.svg",
          text: "Trails",
          iconAlt: "Red Cross Icon",
        },
      ],
    },
  ];

  return (
    <section className={styles.content}>
      <h1>CLASSES OF E BIKES</h1>
      <div className={styles.dataContainer}>
        <div style={{ display: "flex", gap: "24px", marginBottom: "24px" }}>
          {data.map((item) => (
            <TableCard
              key={item.headerText}
              headerIcon={item.headerIcon}
              headerText={item.headerText}
              headerIconAlt={item.headerIconAlt}
              section1={item.section1}
              section2={item.section2}
              section3={item.section3}
            />
          ))}
        </div>
        <div className={styles.info}>
          <div className={styles.image}>
            <Image src="/TimmyStart.svg" alt="Timmy Start" width={100} height={100} />
          </div>
          <div>
            <ul>
              <li>There are 3 different classes of E Bikes (Class 1-3)</li>
              <li>
                E Motorcycles and Unclassified Bicycles are <strong>NOT</strong> E Bikes and{" "}
                <strong>NOT</strong> legal to operate on public roads or in the public right of way.
              </li>
              <li>
                It is important to know class type as it can inform you of speed limit and age
                restrictions
              </li>
              <li>
                Helmets are recommended for all classes and types as accidents at these speeds can
                cause life threatening injuries
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mod1Classes;
