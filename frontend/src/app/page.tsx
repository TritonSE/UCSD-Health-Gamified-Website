import styles from "./page.module.css";
import RightSide from "./components/rightSide";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1> TSE x UCSD Health </h1>
      <RightSide />
      <p> Use this page for testing components. REMOVE ALL CHANGES BEFORE COMMITING.</p>
    </div>
  );
}
