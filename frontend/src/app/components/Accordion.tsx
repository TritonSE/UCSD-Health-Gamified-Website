"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import styles from "./Accordion.module.css";

export type AccordionProps = {
  title: string;
  content: string;
};

export default function Accordion({ title, content }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`${styles.accordion} ${!isOpen ? styles.accordionClosed : ""}`}>
      {/* title */}
      <div
        className={styles.titleContainer}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <h1 className={styles.title}>{title}</h1>
        {/* button */}
        <div className={`${styles.button} ${isOpen ? styles.buttonOpen : styles.buttonClose}`}>
          <Image src="/module1/UpArrow.svg" width={16} height={9} alt="Toggle" />
        </div>
      </div>
      {/* content */}
      <div
        className={styles.contentContainer}
        // needed for animation
        style={{ height: isOpen ? `${(contentRef.current?.scrollHeight ?? 0) + 24}px` : "0px" }}
      >
        <div ref={contentRef}>
          <hr className={styles.hr} />
          <p className={styles.content}>{content}</p>
        </div>
      </div>
    </div>
  );
}
