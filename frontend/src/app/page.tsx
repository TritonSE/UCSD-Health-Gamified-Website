import Image from "next/image";

import leftArrow from "../../public/left_arrow.svg";

import WelcomePanel from "./components/welcomePanel";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* left side */}
      <WelcomePanel />

      {/* right side */}
      <div className={styles.right}>
        <span className={styles.back}>
          <Image width="100" height="100" src={leftArrow} alt="test" />
          <p>Back to Sign-in</p>
        </span>

        <h1>Forgot Password?</h1>
        <p>Please enter your email address to reset your password. </p>
        <label htmlFor="email">Email address</label>
        <input type="text" placeholder="name@gmail.com" />

        <button>Send</button>
      </div>
    </div>
  );
}
