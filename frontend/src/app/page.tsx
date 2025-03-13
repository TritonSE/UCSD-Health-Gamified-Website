import Sidebar from "./components/HomePage/Sidebar/Sidebar";
import Basic from "./components/Mod2Components/Basic";
import BikeMechanic from "./components/Mod2Components/BikeMechanic.tsx/BikeMechanic";
import Helmet from "./components/Mod2Components/Helmet";
import Section1 from "./components/Mod2Components/Section1";
import SimpleWay from "./components/Mod2Components/SimpleWay";
import StuffHappens from "./components/Mod2Components/StuffHappens/StuffHappens";
import Tip from "./components/Mod2Components/Tip";
import ScrollSnapContainer from "./components/ScrollSnapContainer/ScrollSnapContainer";

import styles from "./module2/mod2.module.css"

export default function Module2() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <ScrollSnapContainer moduleText="MODULE 2: Maintaining Your Bike and Keeping it Road Ready">
        <Section1 />
        <Basic />
        <Tip />
        <SimpleWay />
        <Helmet />
        <StuffHappens />
        <BikeMechanic />
      </ScrollSnapContainer>
    </div>
  );
}
