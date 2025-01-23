import Image from "next/image";

import leftArrow from "../../public/left_arrow.svg";

import LeftSide from "./components/leftSide";
import styles from "./page.module.css";
import { LoginButton } from "./components/loginButton";
import { TextBox } from "./components/textBox";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* left side */}
      <div className={styles.leftSide}>
        <LeftSide />
      </div>

      {/* right side */}
      <div className={styles.rightSide}>
        <span className={styles.back}>
          <Image width="100" height="100" src={leftArrow} alt="test" />
          <p>Back to Sign-in</p>
        </span>

        <h1 className={styles.title}>Forgot Password?</h1>
        <p>Please enter your email address to reset your password. </p>
        <TextBox label="Email address" type="text" placeholder="name@gmail.com" />
        <LoginButton label="Send" />
      </div>
    </div>
  );
}
