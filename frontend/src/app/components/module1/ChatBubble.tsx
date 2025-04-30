import Image from "next/image";
import React from "react";

import styles from "./ChatBubble.module.css";

type ChatBubbleProps = {
  icon: string;
  message: string;
};

const ChatBubble: React.FC<ChatBubbleProps> = ({ icon, message }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Image src={icon} alt="Timmy" width={176} height={216} />
      </div>
      <div className={styles.bubble}>
        <p>
          <strong>Remember:</strong> {message}
        </p>
      </div>
    </div>
  );
};

export default ChatBubble;
