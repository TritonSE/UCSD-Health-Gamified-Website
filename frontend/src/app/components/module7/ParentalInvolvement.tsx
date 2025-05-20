import React from "react";

import Carousel from "../module1/Carousel";

import styles from "./ParentalInvolvement.module.css";

const Page4: React.FC = () => {
  const cards = [
    {
      title: "01",
      content: (
        <>
          We encourage families to discuss <b>common risky behaviors</b> with their children and
          teens (e.g., riding without a helmet, riding at night, riding with more riders on the bike
          than it is intended for, riding outside of the rules of traffic).
        </>
      ),
      icon: "/module7/Timmy1.svg",
      imgWidth: 230,
      imgHeight: 160,
    },
    {
      title: "02",
      content: (
        <>
          We encourage families to discuss the <b>seriousness and severity of injuries</b> that can
          occur when riding a bike/ electric bike.
        </>
      ),
      icon: "/module7/Timmy2.svg",
      imgWidth: 170,
      imgHeight: 190,
    },
    {
      title: "03",
      content: (
        <>
          We encourage families to engage in{" "}
          <b>role-playing scenarios to practice safe decision-making</b> in hazardous situations and
          review <b>strategies for dealing with peer pressure</b> regarding safety behaviors.
        </>
      ),
      icon: "/module7/Timmy3.svg",
      imgWidth: 315,
      imgHeight: 180,
    },
  ];

  return (
    <section id={styles.container}>
      <h2 className={styles.title}>
        PARENTAL INVOLVEMENT STRATEGIES IN EDUCATING YOUNG ADULTS ON RISK & RESPONSIBILITY
      </h2>
      <div className={styles.content}>
        <Carousel cards={cards} />
      </div>
    </section>
  );
};

export default Page4;
