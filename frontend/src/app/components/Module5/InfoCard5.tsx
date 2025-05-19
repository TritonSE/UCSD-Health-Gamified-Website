import Image from "next/image";
import React from "react";

import styles from "./InfoCard5.module.css";

type InfoCardProps5 = {
  title: string;
  content: string;
  image: string;
  active: boolean;
};

const InfoCard5: React.FC<InfoCardProps5> = ({ title, content, image, active }) => {
  return (
    <div className={`${styles.infoCard} ${active ? styles.active : ""}`}>
      <div className={`${styles.container} ${active ? styles.active : ""}`}>
        <div className={styles.content}>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
        <div className={styles.content2}>
          <Image className={styles.image} src={image} width={564} height={468} alt="" />
        </div>
      </div>
    </div>
  );
};

export default InfoCard5;
