import Image from "next/image";

import styles from "./Account.module.css";

import type { User } from "../../api/user";

type AccountProps = {
  isCollapsed?: boolean;
  user: User;
};

export const Account = ({ isCollapsed = false, user }: AccountProps) => {
  return (
    <div className={isCollapsed ? `${styles.accountContainer} ${styles.collapsed}` : styles.accountContainer}>
      <Image src={"/default_profile_picture.svg"} width={36} height={36} alt="Profile Picture" />
      {user && (
        <div className={isCollapsed ? `${styles.nameContainer} ${styles.collapsed}` : styles.nameContainer}>
          <span className={styles.name}>{user.name}</span>
          <span className={styles.email}>{user.email}</span>
        </div>
      )}
    </div>
  );
};
