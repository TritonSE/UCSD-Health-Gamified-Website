import styles from "./CardSlide.module.css";

export type CardSlideProps = {
  title: string;
  content: string;
};

export default function CardSlide({ title, content }: CardSlideProps) {
  return (
    <div className={styles.cardSlide}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
}
