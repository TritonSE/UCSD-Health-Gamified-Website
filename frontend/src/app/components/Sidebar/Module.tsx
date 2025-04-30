import styles from "./Module.module.css";

type Props = {
  isCollapsed?: boolean;
  kind?: "primary" | "inactive" | "complete";
  highlighted?: boolean;
  moduleName: string;
  moduleTime: number;
  moduleNumber: number;
  addLine?: boolean;
  handleClick: () => void;
};

export const Module = ({
  isCollapsed = false,
  kind = "inactive",
  highlighted = false,
  moduleName,
  moduleTime,
  moduleNumber,
  addLine = true,
  handleClick,
}: Props) => {
  let moduleTitleText = styles.moduleTitleText;
  let moduleTimeText = styles.moduleTimeText;
  let moduleNumberText = styles.moduleNumberText;
  let moduleNumberBoarder = styles.moduleNumber;
  let modules = styles.module;
  let color = "#BBD567";
  switch (kind) {
    case "primary":
      if (!highlighted) {
        modules += ` ${styles.hover}`;
      }
      moduleTitleText += ` ${styles.titlePrimary}`;
      moduleTimeText += ` ${styles.timePrimary}`;
      moduleNumberText += ` ${styles.numberPrimary}`;
      moduleNumberBoarder += ` ${styles.boarderPrimary}`;
      color = "#FFF";
      break;
    case "inactive":
      moduleTitleText += ` ${styles.titleInactive}`;
      modules += ` ${styles.pointer}`;
      moduleTimeText += ` ${styles.timeInactive}`;
      moduleNumberText += ` ${styles.numberInactive}`;
      moduleNumberBoarder += ` ${styles.boarderInactive}`;
      color = "#909090";
      break;
    case "complete":
      if (!highlighted) {
        modules += ` ${styles.hover}`;
      }
      moduleTitleText += ` ${styles.titleComplete}`;
      moduleTimeText += ` ${styles.timePrimary}`;
      moduleNumberText += ` ${styles.numberComplete}`;
      moduleNumberBoarder += ` ${styles.boarderComplete}`;
      break;
  }

  if (highlighted && addLine) {
    modules += ` ${styles.primaryBackground}`;
  }

  if (highlighted && !addLine) {
    modules += ` ${styles.lineBackground}`;
  }

  if (isCollapsed) {
    modules += ` ${styles.collapsed}`;
  }

  return (
    <div className={modules} onClick={handleClick}>
      <div className={styles.column}>
        <div className={moduleNumberBoarder}>
          <p className={moduleNumberText}>{moduleNumber}</p>
        </div>
        {addLine && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="28"
            viewBox="0 0 1 28"
            fill="none"
          >
            <path d="M0.5 1L0.5 27" stroke={color} strokeLinecap="round" />
          </svg>
        )}
      </div>
      <div className={isCollapsed ? `${styles.moduleText} ${styles.collapsed}` : styles.moduleText}>
        <p className={moduleTitleText}>{moduleName}</p>
        <p className={moduleTimeText}>{moduleTime + " min"}</p>
      </div>
    </div>
  );
};
