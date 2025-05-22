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
    <div>
     
    </div>
  );
};
