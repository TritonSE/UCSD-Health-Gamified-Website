import Image from "next/image";

import styles from "./HoverCards.module.css";

type HoverCardProps = {
  imageSrc: string;
  text: string;
  width?: number;
  height?: number;
};

const HoverCard = ({ imageSrc, text, width = 180, height = 150 }: HoverCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src={imageSrc}
            alt="Card Image"
            width={width}
            height={height}
            className={styles.image}
          />
        </div>
        <div className={styles.textOverlay}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default function CardContainer() {
  return (
    <div className={styles.container}>
      <HoverCard
        imageSrc="/image1.svg"
        text="Follow the manufacturer's recommendations for battery charging."
        width={184}
        height={123}
      />
      <HoverCard
        imageSrc="/image2.svg"
        text="Follow the manufacturer’s recommendations for removing dirt and grime to prevent corrosion."
        width={106}
        height={106}
      />
      <HoverCard
        imageSrc="/image3.svg"
        text="Ensure they are working properly and free of any damage."
        width={94}
        height={94}
      />
    </div>
  );
}
