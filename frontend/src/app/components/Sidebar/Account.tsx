import Image from "next/image";

import styles from "./Account.module.css";

import type { User } from "../../api/user";

type AccountProps = {
  isCollapsed?: boolean;
  user: User;
};

export const Account = ({ isCollapsed = false, user }: AccountProps) => {
  return (
    <div className={styles.accountContainer}>
      <Image src={"/default_profile_picture.svg"} width={36} height={36} alt="Profile Picture" />
      {!isCollapsed && user && (
        <div className={styles.nameContainer}>
          <span className={styles.name}>{user.name}</span>
          <span className={styles.email}>{user.email}</span>
        </div>
      )}
    </div>
  );
};
