import { Module } from "./Module";
import styles from "./Modules.module.css";

export const Modules = ({ isCollapsed = false }) => {
  let buttonClass = styles.moduleContainer;
  if (isCollapsed) {
    buttonClass += ` ${styles.collapsed}`;
  }

  const handleClick = () => {
    console.log("Module clicked");
  };

  return (
    <div>
      <div className={buttonClass}>
        <span className={styles.title}>Modules</span>
      </div>
      <div className={styles.modules}>
        <Module
          isCollapsed={isCollapsed}
          moduleName="What is an E-bike?"
          moduleTime={10}
          moduleNumber={1}
          handleClick={handleClick}
          kind="complete"
        />
        <Module
          isCollapsed={isCollapsed}
          moduleName="Maintaining Your E-Bike"
          moduleTime={10}
          moduleNumber={2}
          handleClick={handleClick}
          kind="complete"
        />
        <Module
          isCollapsed={isCollapsed}
          moduleName="Safety Equipment"
          moduleTime={10}
          moduleNumber={3}
          handleClick={handleClick}
          kind="complete"
        />
        <Module
          isCollapsed={isCollapsed}
          moduleName="5 Need to Know Principles"
          moduleTime={10}
          moduleNumber={4}
          handleClick={handleClick}
          kind="complete"
        />
        <Module
          isCollapsed={isCollapsed}
          moduleName="Rules of the Road"
          moduleTime={10}
          moduleNumber={5}
          handleClick={handleClick}
          kind="primary"
          highlighted={true}
        />
        <Module
          isCollapsed={isCollapsed}
          moduleName="In Case of a Collision"
          moduleTime={10}
          moduleNumber={6}
          handleClick={handleClick}
          kind="inactive"
        />
        <Module
          isCollapsed={isCollapsed}
          moduleName="Teen & Parent Awareness"
          moduleTime={10}
          moduleNumber={7}
          handleClick={handleClick}
          kind="inactive"
        />
        <Module
          isCollapsed={isCollapsed}
          moduleName="Closing Video"
          moduleTime={10}
          moduleNumber={8}
          handleClick={handleClick}
          kind="inactive"
        />
        <Module
          isCollapsed={isCollapsed}
          moduleName="Test"
          moduleTime={10}
          moduleNumber={9}
          addLine={false}
          handleClick={handleClick}
          kind="inactive"
        />
      </div>
    </div>
  );
};
