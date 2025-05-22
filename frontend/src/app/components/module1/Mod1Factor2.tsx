import React from "react";

import ChatBubble from "./ChatBubble";
import InfoItem from "./InfoItem";
import styles from "./Mod1Factor2.module.css";

export default function Mod1Factor2() {
  return (
    <section id={styles.container}>
      <h1 className={styles.title}>CONSIDER YOUR PHYSICAL ABILITIES & EXPERIENCE</h1>
      <div>
        <InfoItem
          icon={"/module1/fitness_level_icon.svg"}
          title={"Fitness Level:"}
          content={
            "Assess your physical capabilities to determine the appropriate motor assistance level."
          }
          iconAlt={"Muscle icon"}
        ></InfoItem>
      </div>
      <div>
        <InfoItem
          icon={"/module1/riding_experience_icon.svg"}
          title={"Riding Experience:"}
          content={
            "If you're new to cycling, a step-through frame or pedal assist might be beneficial."
          }
          iconAlt={"Graph icon"}
        ></InfoItem>
      </div>
      <div className={styles.chatBubble}>
        <ChatBubble
          icon="/Timmy.svg"
          message="Set a budget! E Bikes vary in price based on features and components. Determine your budget to narrow down your options!"
        />
      </div>
    </section>
  );
}
