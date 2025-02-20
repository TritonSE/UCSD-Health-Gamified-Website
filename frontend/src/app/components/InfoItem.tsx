import Image from "next/image";
import React from "react";

import styles from "./InfoItem.module.css";

type InfoItemProps = {
  icon: string;
  title?: string;
  content: string;
  iconAlt: string;
};

const InfoItem: React.FC<InfoItemProps> = ({ icon, title, content, iconAlt }) => {
  return (
    <div className={styles.infoItem}>
      <div className={styles.iconWrapper}>
        <Image src={icon} width={70} height={70} alt={iconAlt} />
      </div>
      <div className={styles.text}>
        {title && <span className={styles.title}>{title}</span>}
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
};

export default InfoItem;
