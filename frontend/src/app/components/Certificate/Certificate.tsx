"use client";

import Image from "next/image";
import { RefObject, useEffect, useRef } from "react";

import styles from "./Certificate.module.css";

export type CertificateNameProps = {
  name: string;
  certificateRef: RefObject<HTMLDivElement>;
};

export default function Certificate({ name, certificateRef }: CertificateNameProps) {
  const nameRef = useRef<HTMLDivElement>(null);

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US");

  const adjustFontSize = () => {
    if (!nameRef.current) return;

    let fontSize = 30.6;
    const baseTop = 175;

    const maxHeight = 47;
    const nameHeight = nameRef.current.scrollHeight;

    if (nameHeight > maxHeight) {
      const scaleFactor = Math.pow(maxHeight / nameHeight, 1);
      fontSize = Math.max(fontSize * scaleFactor, 20);
    }

    console.log(fontSize);
    nameRef.current.style.fontSize = `${fontSize}px`;

    const newTop = baseTop + (36 - fontSize) + 5;
    nameRef.current.style.top = `${newTop}px`;
  };

  function capitalizeWords(str: string): string {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  useEffect(() => {
    adjustFontSize();

    window.addEventListener("resize", adjustFontSize);
    return () => {
      window.removeEventListener("resize", adjustFontSize);
    };
  }, [name, nameRef]);

  return (
    <main>
      <div ref={certificateRef} className={styles.container}>
        <div className={styles.leftGraphic}>
          <Image
            src="/certificate/left-frame.svg"
            alt="Timmy"
            width={245}
            height={480}
            className={styles.leftFrame}
            aria-hidden
          />
          <Image
            src="/certificate/right-dot.svg"
            alt="Timmy's right arm"
            width={38}
            height={38}
            className={styles.rightArm}
            aria-hidden
          />
        </div>
        <div className={styles.rightGraphic}>
          <Image
            src="/certificate/certif-complete-text.svg"
            alt="Certificate of Completion"
            width={302}
            height={90}
            style={{ objectFit: "contain" }}
            className={styles.certifComplete}
            aria-hidden
          />

          <Image
            src="/certificate/award-to.svg"
            alt="Certificate is awarded to"
            width={265}
            height={21}
            className={styles.awardTo}
            aria-hidden
          />

          <p ref={nameRef} className={styles.name}>
            {capitalizeWords(name)}
          </p>

          <Image
            src="/certificate/line.svg"
            alt="Line"
            width={328}
            height={1}
            className={styles.line}
            aria-hidden
          />

          <Image
            src="/certificate/recognition.svg"
            alt="In recognition of..."
            width={266}
            height={14}
            className={styles.recognition}
            aria-hidden
          />

          <Image
            src="/certificate/success.svg"
            alt="Successful completion"
            width={328}
            height={28}
            className={styles.success}
            aria-hidden
          />

          <div className={styles.row}>
            <p className={styles.dateText}>{formattedDate}</p>

            <Image
              src="/certificate/JustinSignature.png"
              alt="Date"
              width={115}
              height={60}
              className={styles.signaturePic}
              aria-hidden
            />
          </div>

          <div className={styles.row}>
            <Image
              src="/certificate/date.svg"
              alt="Date"
              width={85}
              height={26}
              className={styles.date}
              aria-hidden
            />

            <Image
              src="/certificate/signature.svg"
              alt="Signature"
              width={85}
              height={26}
              className={styles.signature}
              aria-hidden
            />
          </div>

          <div className={styles.logos}>
            <Image
              src="/certificate/UCSDHealth.svg"
              alt="Logos"
              width={153}
              height={25}
              aria-hidden
            />
            <Image src="/certificate/SKlogo.png" alt="Logos" width={42} height={40} aria-hidden />
            <Image
              src="/certificate/Rady'sChildrenHealth.svg"
              alt="Logos"
              width={71}
              height={29}
              aria-hidden
            />
            <Image
              src="/certificate/Primary-Logo-TealGreen.png"
              alt="Logos"
              width={63}
              height={45}
              aria-hidden
            />
          </div>
        </div>
      </div>
    </main>
  );
}
