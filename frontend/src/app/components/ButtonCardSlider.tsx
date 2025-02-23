"use client";

import React, { useState } from "react";

import ButtonSlide from "./ButtonSlide";
import InfoCard from "./InfoCard";

type Card = {
  icon: string;
  content: string;
  imageUrl: string;
  iconAlt: string;
  imageAlt: string;
};

type ButtonCardSliderProps = {
  titles: string[];
  cards: Card[];
};

const ButtonCardSlider: React.FC<ButtonCardSliderProps> = ({ titles, cards }) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number>(0);

  const handleButtonClick = (index: number) => {
    setSelectedCardIndex(index);
  };

  return (
    <div style={{ position: "relative", height: "521px", marginBottom: "70px" }}>
      {/* Ensure the container is relatively positioned */}
      <ButtonSlide titles={titles} onClick={handleButtonClick} activeIndex={selectedCardIndex} />
      {cards.map((card, index) => (
        <InfoCard
          key={index}
          icon={card.icon}
          content={card.content}
          imageUrl={card.imageUrl}
          iconAlt={card.iconAlt}
          imageAlt={card.imageAlt}
          active={index === selectedCardIndex}
        />
      ))}
    </div>
  );
};

export default ButtonCardSlider;
