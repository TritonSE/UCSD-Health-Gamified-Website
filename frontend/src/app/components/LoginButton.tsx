import styles from "./LoginButton.module.css";

export type LoginButtonProps = {
  label: string;
};

export function LoginButton({ label }: LoginButtonProps) {
  return (
    <button className={styles.loginButton}>
      <p>{label}</p>
    </button>
  );
}
