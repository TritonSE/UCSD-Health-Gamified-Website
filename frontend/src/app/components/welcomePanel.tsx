import Image from "next/image";
import React from "react";

import mascotImage from "../../../public/happy_mascot.svg";

import styles from "./welcomePanel.module.css";

const LeftSection: React.FC = () => {
  return (
    <div>
      <Image src={mascotImage} alt="Mascot" />
      <div>Welcome to the E-Bike Training Course!</div>
    </div>
  );
};

export default LeftSection;
