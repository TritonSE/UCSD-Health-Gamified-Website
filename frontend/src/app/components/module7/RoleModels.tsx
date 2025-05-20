import Image from "next/image";
import React, { useState } from "react";

import styles from "./RoleModels.module.css";

const Page3: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const parentClassName = isClicked ? `${styles.parent} ${styles.parentMoved}` : styles.parent;

  // Determine the class name for the son image
  const sonClassName = isClicked ? `${styles.son} ${styles.sonVisible}` : styles.son;

  const buttonClassName = isClicked ? `${styles.button} ${styles.buttonVisible}` : styles.button;

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.title}>ROLE MODELING BEHAVIORS</h1>
        <p className={styles.subtitle}>
          Teens often follow their friends&apos; behaviors, but parental influence is crucial, so
          adults should lead by example by wearing helmets and practicing safe riding.
        </p>
      </div>
      <div className={styles.svgWrapper}>
        <div className={styles.svgInner}>
          <object
            className={styles.background}
            data="/module7/background.svg"
            type="image/svg+xml"
          />
          <object className={parentClassName} data="/module7/TimmyRide.svg" type="image/svg+xml" />
          <object className={sonClassName} data="/module7/TimmySon.svg" type="image/svg+xml" />
          <Image
            src="/module7/Button.svg"
            alt="Click Button"
            width={40}
            height={40}
            className={buttonClassName}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Page3;
