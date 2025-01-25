import ForgotPasswordForm from "../components/forgotPasswordForm";
import LeftSide from "../components/leftSide";

import styles from "./forgotPassword.module.css";

export default function forgotPassword() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <LeftSide />
      </div>
      <div className={styles.forgotPasswordForm}>
        <ForgotPasswordForm />
      </div>
    </div>
  );
}
