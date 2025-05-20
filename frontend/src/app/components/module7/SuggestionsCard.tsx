import Image from "next/image";
import React from "react";

import styles from "./SuggestionsCard.module.css";

export type CardProps = {
  card: {
    icon: string;
    title: string;
    content: React.ReactNode;
  };
};

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className={styles.container}>
      <div>
        <Image className={styles.icon} src={card.icon} width={100} height={100} alt="icon" />
      </div>
      <div>
        <h1 className={styles.title}>{card.title}</h1>
        {card.content}
      </div>
    </div>
  );
};

export default Card;
