import styles from "./LoginButton.module.css";

export type LoginButtonProps = {
  label: string;
  onClick?: () => void;
};

export function LoginButton({ label, onClick }: LoginButtonProps) {
  return (
    <button onClick={onClick} className={styles.loginButton}>
      <p>{label}</p>
    </button>
  );
}
