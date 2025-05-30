import styles from "./ModuleIntro.module.css";

type ModuleIntroProps = {
  moduleNumber: number;
  title: string;
  subtitle: string;
  description: React.ReactNode;
  Mascot: React.ReactNode;
};

export default function ModuleIntro({
  moduleNumber,
  title,
  subtitle,
  description,
  Mascot,
}: ModuleIntroProps) {
  return (
    <section id={styles.container}>
      <div className={styles.top}>
        <h3>Module {moduleNumber}:</h3>
        <h1>{title}</h1>
      </div>
      <div id={styles.bottom_wrapper}>
        <div className={styles.bottom_container}>
          <div className={styles.bottom_text}>
            <h2>{subtitle}</h2>
            {description}
          </div>

          {Mascot}
        </div>
      </div>
    </section>
  );
}
