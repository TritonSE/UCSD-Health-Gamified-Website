import Image from "next/image";
import React from "react";

import styles from "./TableCard.module.css";

type IconTextPair = {
  icon: string;
  text: string;
  iconAlt: string;
};

type TableCardProps = {
  headerIcon: string;
  headerText: string;
  headerIconAlt: string;
  section1: IconTextPair[];
  section2: IconTextPair[];
  section3: IconTextPair[];
};

const Divider = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="186" height="2" viewBox="0 0 186 2" fill="none">
    <path d="M1 1L185 1.00002" stroke="black" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const TableCard: React.FC<TableCardProps> = ({
  headerIcon,
  headerText,
  headerIconAlt,
  section1,
  section2,
  section3,
}) => {
  const renderIconTextPair = ({ icon, text }: IconTextPair) => (
    <div style={{ display: "flex", gap: "14px" }}>
      <Image src={icon} alt={text} width={24} height={24} />
      <span>{text}</span>
    </div>
  );

  return (
    <div className={styles.tableCard}>
      {/* Header */}
      <div className={styles.header}>
        <Image src={headerIcon} alt={headerIconAlt} width={96} height={96} />
        <h3 style={{ margin: 0 }}>{headerText}</h3>
      </div>

      {/* Section 1 */}
      <div className={styles.section}>
        {section1.map((item, index) => (
          <React.Fragment key={index}>{renderIconTextPair(item)}</React.Fragment>
        ))}
      </div>
      <Divider />
      {/* Section 2 */}
      <div className={styles.section}>
        {section2.map((item, index) => (
          <React.Fragment key={index}>{renderIconTextPair(item)}</React.Fragment>
        ))}
      </div>
      <Divider />
      {/* Section 3 */}
      <div className={styles.section}>
        {section3.map((item, index) => (
          <React.Fragment key={index}>{renderIconTextPair(item)}</React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TableCard;
