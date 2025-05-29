"use client";

import Image from "next/image";
import React, { useState } from "react";

import styles from "./Carousel.module.css";

type CarouselProps = {
  cards: {
    icon: string;
    title: string;
    content: string | React.ReactNode;
  }[];
};

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className={styles.carousel}>
        <button className={styles.navBtn} onClick={prevSlide}>
          <Image src="/module3/carousel_left_arrow.svg" width={7} height={12} alt="Previous" />
        </button>

        <div className={styles.card}>
          <Image
            src={cards[currentIndex].icon}
            alt="card icon"
            className={styles.icon}
            width={200}
            height={200}
          />
          <h3 className={styles.cardTitle}>{cards[currentIndex].title}</h3>
          <p className={styles.cardContent}>{cards[currentIndex].content}</p>
        </div>

        <button className={styles.navBtn} onClick={nextSlide}>
          <Image src="/module3/carousel_right_arrow.svg" width={7} height={12} alt="Next" />
        </button>
      </div>

      <div className={styles.dots}>
        {cards.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === currentIndex ? styles.active : ""}`}
            onClick={() => {
              setCurrentIndex(i);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;
