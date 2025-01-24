import LeftSide from "./components/leftSide";
import { LoginButton } from "./components/loginButton";
import { TextBox } from "./components/textBox";
import styles from "./page.module.css";

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
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.7071 6.29289C15.0976 6.68342 15.0976 7.31658 14.7071 7.70711L10.4142 12L14.7071 16.2929C15.0976 16.6834 15.0976 17.3166 14.7071 17.7071C14.3166 18.0976 13.6834 18.0976 13.2929 17.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L13.2929 6.29289C13.6834 5.90237 14.3166 5.90237 14.7071 6.29289Z"
              fill="#1C3A29"
            />
          </svg>

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
