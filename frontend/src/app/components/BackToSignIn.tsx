import Image from "next/image";

import styles from "./BackToSignIn.module.css";

export default function BackToSignIn() {
  return (
    <a href="/signin" className={styles.signInLink}>
      <Image src="/left_arrow.svg" alt="Left Arrow" width={24} height={24} />
      <p>Back to Sign-in</p>
    </a>
  );
}
