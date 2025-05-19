"use client";

import React, { useState } from "react";

import ButtonSlide5 from "./ButtonSlide5";
import InfoCard5 from "./InfoCard5";

type Card = {
  title: string;
  content: string;
  image: string;
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
    <div>
      {/* Ensure the container is relatively positioned */}
      <ButtonSlide5 titles={titles} onClick={handleButtonClick} activeIndex={selectedCardIndex} />
      {cards.map((card, index) => (
        <InfoCard5
          key={index}
          title={card.title}
          content={card.content}
          image={card.image}
          active={index === selectedCardIndex}
        />
      ))}
    </div>
  );
};

export default ButtonCardSlider;
