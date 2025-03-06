"use client";
import { useState } from 'react';
import Image from "next/image";
import styles from './FlippedCard.module.css';

interface FlipCardProps {
  frontImage: string;
  frontText: string;
  backContent: string;
}

const FlipCard = ({ frontImage, frontText, backContent }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={styles.cardContainer}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}>
        {/* Front Side */}
        <div className={styles.front}>
          <div className={styles.imageWrapper}>
            <Image
              src={frontImage}
              alt="Card Icon"
              width={64}
              height={64}
              className={styles.iconImage}
            />
          </div>
          <p className={styles.cardText}>{frontText}</p>
        </div>

        {/* Back Side */}
        <div className={styles.back}>
          <p className={styles.backContent}>{backContent}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;