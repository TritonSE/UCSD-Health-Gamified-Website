import Image from "next/image";
import React from "react";

export type FlipProps = {
  front_icon?: string;
  front_icon_alt?: string;
  front_text: string;
  back_text: string;
  styles?: {
    container?: React.CSSProperties;
    container_flipped?: React.CSSProperties;
    icon?: React.CSSProperties;
    title?: React.CSSProperties;
  };
};

export default function Flip({
  front_icon,
  front_icon_alt,
  front_text,
  back_text,
  styles,
}: FlipProps) {
  return (
    <div style={styles?.container}>
      {/* Front */}
      <div>
        {front_icon && (
          <Image
            style={styles?.icon}
            src={front_icon}
            layout="responsive"
            width={69}
            height={69}
            alt={front_icon_alt}
          />
        )}
        <div style={styles?.title}>{front_text}</div>
      </div>
      {/* Back */}
      {/* <div>
                <p>{back_text}</p>
            </div> */}
    </div>
  );
}
