"use client";

import { useRouter } from "next/navigation"; // 🆕

import { Module } from "./Module";
import styles from "./Modules.module.css";

export const Modules = ({ isCollapsed = false, currentModule = 1 }) => {
  const router = useRouter();

  let buttonClass = styles.moduleContainer;
  if (isCollapsed) {
    buttonClass += ` ${styles.collapsed}`;
  }

  const handleClick = (moduleNumber: number) => {
    if (moduleNumber > 2) {
      console.log("Modules in progress");
    } else {
      router.push(`/module${moduleNumber}`);
    }
  };

  const moduleData = [
    { name: "What is an E Bike?", time: 10, number: 1 },
    { name: "Maintaining Your E Bike", time: 10, number: 2 },
    { name: "Safety Equipment", time: 10, number: 3 },
    { name: "5 Need to Know Principles", time: 10, number: 4 },
    { name: "Rules of the Road", time: 10, number: 5 },
    { name: "In Case of a Collision", time: 10, number: 6 },
    { name: "Teen & Parent Awareness", time: 10, number: 7 },
    { name: "Closing Video", time: 10, number: 8 },
    { name: "Test", time: 10, number: 9, addLine: false },
  ];

  return (
    <div>
      <div className={buttonClass}>
        <span className={styles.title}>Modules</span>
      </div>
      <div className={styles.modules}>
        {moduleData.map((module) => {
          // Determine module kind based on its number compared to currentModule
          let kind: "primary" | "inactive" | "complete" = "inactive";
          if (module.number < currentModule) {
            kind = "complete";
          } else if (module.number === currentModule) {
            kind = "primary";
          }
          return (
            <Module
              key={module.number}
              isCollapsed={isCollapsed}
              moduleName={module.name}
              moduleTime={module.time}
              moduleNumber={module.number}
              handleClick={() => {
                handleClick(module.number);
              }}
              kind={kind}
              highlighted={module.number === currentModule}
              addLine={module.addLine !== false}
            />
          );
        })}
      </div>
    </div>
  );
};
