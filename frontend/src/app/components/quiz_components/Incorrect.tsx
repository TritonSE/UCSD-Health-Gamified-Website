import styles from "./Incorrect.module.css";

type IncorrectProps = {
  correct: boolean;
  message: string;
};

export const Incorrect = ({ correct, message }: IncorrectProps) => {
  let title = "Correct!";
  let textBox = styles.textBox;
  if (!correct) {
    title = "Incorrect";
    textBox += ` ${styles.incorrect}`;
  } else {
    textBox += ` ${styles.correct}`;
  }
  return (
    <div className={textBox}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.message}>{message}</p>
    </div>
  );
};
