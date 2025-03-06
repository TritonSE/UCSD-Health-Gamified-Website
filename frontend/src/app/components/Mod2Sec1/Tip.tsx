import styles from "./mod2.module.css";
import dynamic from 'next/dynamic';

const HoverCard = dynamic(
  () => import('../HoverCard/HoverCard'),
  { ssr: false }
);

export default function Tip() {
  return (
    <div className={styles.container}>
      <div className={styles.headerText}>
      ADDITIONAL TIPS
      </div>
      <HoverCard/>
    </div>
  );
}