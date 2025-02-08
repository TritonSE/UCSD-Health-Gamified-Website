import Image from "next/image";
import React from "react";

import styles from "./InfoCard.module.css";

type InfoCardProps = {
  icon: string;
  content: string;
  imageUrl: string;
  iconAlt: string;
  imageAlt: string;
  active: boolean;
};

const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  content,
  imageUrl,
  iconAlt,
  imageAlt,
  active,
}) => {
  return (
    <div className={`${styles.infoCard} ${active ? styles.active : ""}`}>
      <div className={`${styles.container} ${active ? styles.active : ""}`}>
        <div>
          <Image
            className={styles.icon}
            src={icon}
            layout="responsive"
            width={69}
            height={69}
            alt={iconAlt}
          />
          <div className={styles.content}>{content}</div>
        </div>
        <div>
          <Image
            className={styles.image}
            src={imageUrl}
            layout="responsive"
            width={500}
            height={300}
            alt={imageAlt}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
