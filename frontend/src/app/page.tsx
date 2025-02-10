import ButtonCardSlider from "./components/ButtonCardSlider";
import InfoItem from "./components/InfoItem";
import Mod1ChooseBike from "./components/Mod1ChooseBike";
import Mod1FactorTitle from "./components/Mod1FactorTitle";
import Mod1Factors from "./components/Mod1Factors";
import Mod1Intro from "./components/Mod1Intro";
import ModTitle from "./components/ModTitle";
import styles from "./pages/mod1.module.css";

const titles_part1 = ["COMMUTING", "RECREATIONAL RIDING", "MOUNTAIN BIKING"];
const cards_part1 = [
  {
    icon: "module1/road_icon.svg",
    content:
      "Consider an efficient e-bike with a long range, and ways to carry cargo (like tools for the road, school stuff, your sports gear, etc)",
    imageUrl: "module1/bike_commute.svg",
    iconAlt: "Road icon",
    imageAlt: "Bike for commuting",
  },
  {
    icon: "module1/beach_icon.svg",
    content:
      "Will you sometimes want to hit the beach, or hop on a path or trail? Opt for a more versatile e-bike with features like suspension and off-road capabilities.",
    imageUrl: "module1/bike_recreational.svg",
    iconAlt: "Beach icon",
    imageAlt: "Bike for recreational riding",
  },
  {
    icon: "module1/mountain_icon.svg",
    content:
      "Do you mostly want to get out and explore off-road? Choose a full-suspension e-bike with powerful motors and durable components.",
    imageUrl: "module1/bike_mountain.svg",
    iconAlt: "Mountain icon",
    imageAlt: "Bike for mountain biking",
  },
];

export default function Module1() {
  return (
    <div className={styles.container}>
      {/* sidebar (temporary one, this should be replaced later) */}
      <div className={styles.sidebar}>Sidebar!</div>
      {/* content */}
      <div className={styles.content}>
        <ModTitle module_num={1} module_name="What is an E-bike?" />
        <Mod1Intro />
        <Mod1ChooseBike />
        <Mod1Factors />
        <ButtonCardSlider titles={titles_part1} cards={cards_part1} />
        <Mod1FactorTitle number={2} step="Consider your physical abilities & experience" />
        <InfoItem
          icon={"module1/fitness_level_icon.svg"}
          title={"Fitness Level:"}
          content={
            "Assess your physical capabilities to determine the appropriate motor assistance level."
          }
          iconAlt={"Muscle icon"}
        ></InfoItem>
        <InfoItem
          icon={"module1/riding_experience_icon.svg"}
          title={"Riding Experience:"}
          content={
            "If you're new to cycling, a step-through frame or pedal assist might be beneficial."
          }
          iconAlt={"Graph icon"}
        ></InfoItem>
      </div>
    </div>
  );
}
