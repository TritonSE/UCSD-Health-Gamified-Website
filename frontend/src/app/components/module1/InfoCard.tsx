import Image from "next/image";
import React from "react";

import styles from "./InfoCard.module.css";

type InfoCardProps = {
  content: string;
  content2title?: string;
  content2?: string;
  number?: number;
  icon?: string;
  iconAlt?: string;
  imageUrl?: string;
  imageAlt?: string;
  active: boolean;
};

const InfoCard: React.FC<InfoCardProps> = ({
  content,
  content2,
  content2title,
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
          {number && <span className={styles.number}>{number}</span>}
          {/* icon */}
          {icon && (
            <Image
              className={styles.icon}
              src={icon}
              layout="responsive"
              width={69}
              height={69}
              alt={iconAlt ?? ""}
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
              alt={imageAlt ?? ""}
            />
          </div>
        )}
        {/* right side text */}
        {content2 && (
          <div className={styles.content2}>
            {content2title && <h1>{content2title}</h1>}
            <p>{content2}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoCard;
