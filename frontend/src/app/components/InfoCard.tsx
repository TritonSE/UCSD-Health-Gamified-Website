import Image from "next/image";
import React from "react";

import styles from "./InfoCard.module.css";

type InfoCardProps = {
  content: string;
  number?: number;
  icon?: string;
  iconAlt?: string;
  imageUrl?: string;
  imageAlt?: string;
  active: boolean;
};

const InfoCard: React.FC<InfoCardProps> = ({
  content,
  number,
  icon,
  iconAlt,
  imageUrl,
  imageAlt,
  active,
}) => {
  return (
    <div className={`${styles.infoCard} ${active ? styles.active : ""}`}>
      <div className={`${styles.container} ${active ? styles.active : ""}`}>
        <div>
          {/* number */}
          {number && <p className={styles.number}>{number}</p>}
          {/* icon */}
          {icon && (
            <Image
              className={styles.icon}
              src={icon}
              layout="responsive"
              width={69}
              height={69}
              alt={iconAlt}
            />
          )}
          <div className={styles.content}>{content}</div>
        </div>
        {/* image */}
        {imageUrl && (
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={imageUrl}
              layout="responsive"
              width={500}
              height={300}
              alt={imageAlt}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoCard;
