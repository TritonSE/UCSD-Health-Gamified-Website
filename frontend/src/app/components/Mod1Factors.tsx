import Mod1FactorTitle from "../components/Mod1FactorTitle";

import styles from "./Mod1Factors.module.css";

export default function Mod1Factors() {
  return (
    <div className={styles.container}>
      <Mod1FactorTitle number={1} step="What types of riding do YOU want to do?" />
      {/* <Mod1FactorTitle number={2} step="Consider your physical abilities & experience"/>
            <Mod1FactorTitle number={3} step="Evaluate key features"/>
            <Mod1FactorTitle number={4} step="Set a budget"/>
            <Mod1FactorTitle number={5} step="Consider e-bike classification"/> */}
    </div>
  );
}
