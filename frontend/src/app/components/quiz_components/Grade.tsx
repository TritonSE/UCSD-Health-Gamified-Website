import styles from "./Grade.module.css";

type GradeProps = {
  score: number;
};

export const Grade = ({ score }: GradeProps) => {
  let timmy = "/TimmySad.svg";
  let how = "Falling Flat...";
  let description =
    "Looks like you need some review! Go back and do some rereading or retake the test again!";
  if (score > 90) {
    timmy = "/TimmyNice.svg";
    how = "On Fire!";
    description =
      "Looks like you are ready to move onto the next module! Click “Next Module” once you have reviewed your results below!";
  } else if (score >= 75) {
    timmy = "/TimmyOk.svg";
    how = "You Did It!";
    description =
      "Looks like you are ready to move onto the next module! Click “Next Module” once you are ready to move on, or review your answers below.";
  }
  return (
    <div className={styles.grade}>
      <img src={timmy} />
      <div className={styles.score}>
        <div className={styles.gradeScore}>{score + "%"}</div>
        <div className={styles.how}>{how}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};
