"use client";

import Image from "next/image";

import styles from "./Certificate.module.css";

export type CertificateNameProps = {
  name: string;
};

export default function Certificate({ name }: CertificateNameProps) {
  return (
    <main>
      <div className={styles.container}>
        <Image
          src="/certificate/background.svg"
          alt="UC San Diego Health"
          width={800}
          height={564}
          className={styles.image}
          aria-hidden
        />
        <div className={styles.leftGraphic}>
          <Image
            src="/certificate/ucsd-health.svg"
            alt="UC San Diego Health"
            width={226}
            height={28}
            className={styles.healthLogo}
            aria-hidden
          />
          <Image
            src="/certificate/logos.svg"
            alt="Logos"
            width={174}
            height={50}
            className={styles.logos}
            aria-hidden
          />
          <div className={styles.row}>
            <Image
              src="/certificate/dot.svg"
              alt="dot"
              width={6}
              height={6}
              className={styles.dot1}
              aria-hidden
            />
            <Image
              src="/certificate/white-line.svg"
              alt="line"
              width={263}
              height={1}
              className={styles.line}
              aria-hidden
            />
            <Image
              src="/certificate/dot.svg"
              alt="dot"
              width={6}
              height={6}
              className={styles.dot2}
              aria-hidden
            />
          </div>
          <Image
            src="/certificate/certif-text.svg"
            alt="Certificate of Completion"
            width={255}
            height={96}
            className={styles.certif}
            aria-hidden
          />
          <div className={styles.row}>
            <Image
              src="/certificate/dot.svg"
              alt="dot"
              width={6}
              height={6}
              className={styles.dot3}
              aria-hidden
            />
            <Image
              src="/certificate/white-line.svg"
              alt="line"
              width={263}
              height={1}
              className={styles.line2}
              aria-hidden
            />
            <Image
              src="/certificate/dot.svg"
              alt="dot"
              width={6}
              height={6}
              className={styles.dot4}
              aria-hidden
            />
          </div>
          <Image
            src="/TimmyOk.svg"
            alt="Timmy, the tire mascot"
            width={204}
            height={198}
            className={styles.timmy}
            aria-hidden
          />
        </div>
        <div className={styles.rightGraphic}>
          <Image
            src="/certificate/award-to-text.svg"
            alt="This Certificate of Completion is awarded to"
            width={240}
            height={46}
            className={styles.awardText}
            aria-hidden
          />

          <p className={styles.name}>{name}</p>

          <Image
            src="/certificate/big-divide.svg"
            alt="Black divide line"
            width={420}
            height={1}
            className={styles.blackLine}
            aria-hidden
          />

          <Image
            src="/certificate/success-text.svg"
            alt="Completion of E-Bike safety course text"
            width={344}
            height={76}
            className={styles.completionText}
            aria-hidden
          />

          <Image
            src="/certificate/sign-1.svg"
            alt="This Certificate of Completion is awarded to"
            width={115}
            height={63}
            className={styles.signature1}
            aria-hidden
          />

          <Image
            src="/certificate/sign-line.svg"
            alt="This Certificate of Completion is awarded to"
            width={101}
            height={1}
            className={styles.signLine1}
            aria-hidden
          />

          <Image
            src="/certificate/date.svg"
            alt="This Certificate of Completion is awarded to"
            width={32}
            height={8}
            className={styles.date}
            aria-hidden
          />

          <Image
            src="/certificate/sign-2.svg"
            alt="This Certificate of Completion is awarded to"
            width={124}
            height={81}
            className={styles.signature2}
            aria-hidden
          />

          <Image
            src="/certificate/sign-line.svg"
            alt="This Certificate of Completion is awarded to"
            width={128}
            height={1}
            className={styles.signLine2}
            aria-hidden
          />

          <Image
            src="/certificate/signature-text.svg"
            alt="This Certificate of Completion is awarded to"
            width={73}
            height={9}
            className={styles.signature}
            aria-hidden
          />
        </div>
      </div>
    </main>
  );
}
