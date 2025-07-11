"use client";

import { useState } from "react";

import Textbox from "../../Textbox/Textbox";

import styles from "./BasicMaintenance.module.css";
import BikeMaintSVG from "./BikeMaintSVG";

type CircleData = { header: string; text: string; width: number; height: number };

const CIRCLE_DATA: Record<number, CircleData> = {
  1: {
    header: "Tires",
    text: "Pump It Up! Properly inflated tires are crucial for a safe and comfortable ride. Underinflated tires are unstable and are especially unsafe when turning, increase rolling resistance, give you less range on ebikes, and put you at a higher risk of flats. Overinflated tires can cause premature wear, reduce traction, and make the ride less comfortable. How to check Find the recommended pressure (PSI): This is usually printed on the tire's sidewall.  This number is usually a range to stay within, in consideration of lighter and heavier bikes and riders. Inspect your tires Look for signs of wear and tear, such as cuts or bald spots.  Worn out tires puncture easier and will skid or slide out on slippery surfaces (sand, dirt, wet streets).",
    width: 719,
    height: 577,
  },
  2: {
    header: "Chains",
    text: "Lubricate your chain A well-lubricated chain will shift smoothly and reduce wear and tear.  Use a bike-specific chain lube which best matches your climate (in dry environments, a “dry lube” is appropriate.  In wet, rainy conditions, a “wet lube” is appropriate).  Avoid non-bicycle specific lubricants (such as oil, or general purpose lubricant sprays).",
    width: 719,
    height: 361,
  },
  3: {
    header: "Chain, Gears, and Drivetrain",
    text: "Pay attention to rattles, creaks and squeaks If your bike is making strange sounds, or components (like wheels, brakes, cranks, pedals, and front forks) are loose, don’t ride it!  Get the help of a professional to fix it. A clean bike is a safer bike Cleaning your bike is a great opportunity to check all your parts to make sure they’re in good condition. ",
    width: 719,
    height: 397,
  },
  4: {
    header: "Brakes",
    text: "Inspect your brakes Test your brakes regularly to make sure they are working properly. If your brakes squeak or squeal, they may need new brake pads or rotors, and must be serviced by someone who knows what they’re doing.  SAFETY – never put your fingers in or around moving brake rotors. More about brakes Use care to never get oil, grease or other contaminants on or around brake parts, as they will not work properly and will likely need to be replaced if contaminated.  Avoid spraying lubricants, or slippery cleaning products on your brakes.",
    width: 719,
    height: 469,
  },
  5: {
    header: "Lights",
    text: "Check your lights Make sure your lights are working properly, especially if you ride at night.  Make a habit of charging your lights after use so they’re always ready for your next ride.",
    width: 719,
    height: 329,
  },
};

export default function BasicMaintenance() {
  const [activeCircle, setActiveCircle] = useState<number | undefined>();
  const [clickedCircles, setClickedCircles] = useState<number[]>([]);

  const activeCircleData =
    activeCircle && CIRCLE_DATA[activeCircle]
      ? CIRCLE_DATA[activeCircle]
      : { header: "", text: "", width: 0, height: 0 };

  const handleCircleClick = (number: string) => {
    const parsedNumber = parseInt(number);
    if (CIRCLE_DATA[parsedNumber]) {
      setActiveCircle(parsedNumber);
      if (!clickedCircles.includes(parsedNumber)) {
        setClickedCircles([...clickedCircles, parsedNumber]);
      }
    }
  };

  const closeTextbox = () => {
    setActiveCircle(undefined);
  };

  return (
    <section className={styles.container}>
      <div className={styles.text_container}>
        <h2>BASIC MAINTENANCE TIPS:</h2>
        <p>
          By following these tips, you can keep your bike or E Bike road ready and enjoy a safe and
          enjoyable riding experience! Click on each number to view tips for each part of the bike!
        </p>
      </div>
      <BikeMaintSVG
        handleCircleClick={handleCircleClick}
        activeCircle={activeCircle}
        clickedCircles={clickedCircles}
      />

      {activeCircle && activeCircleData.text && (
        <Textbox
          header={activeCircleData.header}
          text={activeCircleData.text}
          width={activeCircleData.width}
          height={activeCircleData.height}
          onClose={closeTextbox}
        />
      )}
    </section>
  );
}
