import styles from "./LoginButton.module.css";

export type LoginButtonProps = {
  label: string;
  disabled: boolean;
  onClick: () => void;
};

export function LoginButton({ label, disabled, onClick }: LoginButtonProps) {
  return (
    <button className={styles.loginButton} disabled={!disabled} onClick={onClick}>
      <p>{label}</p>
    </button>
  );
}
