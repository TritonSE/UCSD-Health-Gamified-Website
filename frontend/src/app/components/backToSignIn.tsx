import Image from "next/image";

import styles from "./backToSignIn.module.css";

export default function BackToSignIn() {
    
    return (
        <a href="" className={styles.signInLink}>
            <Image src="/leftArrow.svg" alt="Left Arrow" width={24} height={24} />
            <p>Back to Sign-In</p>
        </a>
  );
}
