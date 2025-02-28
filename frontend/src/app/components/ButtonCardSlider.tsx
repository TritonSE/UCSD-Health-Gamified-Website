"use client";

import React, { useState } from "react";

import ButtonSlide from "./ButtonSlide";
import InfoCard from "./InfoCard";

type Card = {
  content: string;
  content2title?: string;
  content2?: string;
  imageUrl?: string;
  imageAlt?: string;
  icon?: string;
  iconAlt?: string;
};

type ButtonCardSliderProps = {
  titles: string[];
  cards: Card[];
  show_numbers: boolean;
};

const ButtonCardSlider: React.FC<ButtonCardSliderProps> = ({ titles, cards, show_numbers }) => {
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
          content2title={card.content2title}
          content2={card.content2}
          imageUrl={card.imageUrl}
          iconAlt={card.iconAlt}
          imageAlt={card.imageAlt}
          number={show_numbers ? index + 1 : undefined}
          active={index === selectedCardIndex}
        />
      ))}
    </div>
  );
};

export default ButtonCardSlider;
