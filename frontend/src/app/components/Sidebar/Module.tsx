import styles from "./Module.module.css";

type Props = {
  isCollapsed?: boolean;
  kind?: "primary" | "inactive" | "complete";
  moduleName: string;
  moduleTime: number;
  moduleNumber: number;
  handleClick: () => void;
};

export const Module = ({
  isCollapsed = false,
  kind = "inactive",
  moduleName,
  moduleTime,
  moduleNumber,
  handleClick,
}: Props) => {
  let moudleTitleText = styles.moduleTitleText;
  let moduleTimeText = styles.moduleTimeText;
  let moduleNumberText = styles.moduleNumberText;
  let moduleNumberBoarder = styles.moduleNumber;
  switch (kind) {
    case "primary":
      moudleTitleText += ` ${styles.titlePrimary}`;
      moduleTimeText += ` ${styles.timePrimary}`;
      moduleNumberText += ` ${styles.numberPrimary}`;
      moduleNumberBoarder += ` ${styles.boarderPrimary}`;
      break;
    case "inactive":
      moudleTitleText += ` ${styles.titleInactive}`;
      moduleTimeText += ` ${styles.timeInactive}`;
      moduleNumberText += ` ${styles.numberInactive}`;
      moduleNumberBoarder += ` ${styles.boarderInactive}`;
      break;
    case "complete":
      moudleTitleText += ` ${styles.titleComplete}`;
      moduleTimeText += ` ${styles.timePrimary}`;
      moduleNumberText += ` ${styles.numberComplete}`;
      moduleNumberBoarder += ` ${styles.boarderComplete}`;
      break;
  }
  return (
    <div
      className={isCollapsed ? `${styles.module} ${styles.collapsed}` : styles.module}
      onClick={handleClick}
    >
      <div className={moduleNumberBoarder}>
        <p className={moduleNumberText}>{moduleNumber}</p>
      </div>
      <div className={isCollapsed ? `${styles.moduleText} ${styles.collapsed}` : styles.moduleText}>
        <p className={moudleTitleText}>{moduleName}</p>
        <p className={moduleTimeText}>{moduleTime + " min"}</p>
      </div>
    </div>
  );
};
