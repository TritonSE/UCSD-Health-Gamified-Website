import styles from "./Mod1FactorTitle.module.css";

export type TitleProps = {
  number: number;
  step: string;
};

export default function Mod1FactorTitle({ number, step }: TitleProps) {
  return (
    <div className={styles.container}>
      <div className={styles.number}>{number}</div>
      <span className={styles.text}>{step}</span>
    </div>
  );
}
