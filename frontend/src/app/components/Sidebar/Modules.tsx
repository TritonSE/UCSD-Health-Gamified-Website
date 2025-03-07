import styles from "./Modules.module.css";

export const Modules = ({ isCollapsed = false }) => {
  let buttonClass = styles.moduleContainer;
  if (isCollapsed) {
    buttonClass += ` ${styles.collapsed}`;
  }

  return (
    <div className={buttonClass}>
      <span className={styles.title}>Modules</span>
    </div>
  );
};
