import styles from "./ProgressBar.module.css";

type Props = {
  percentage: number;
  isCollapsed?: boolean;
};

export const ProgressBar = ({ percentage, isCollapsed = false }: Props) => {
  return (
    <div>
      {!isCollapsed && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="187"
          height="102"
          viewBox="0 0 187 102"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 93.5C0 41.8614 41.8614 0 93.5 0C145.139 0 187 41.8614 187 93.5H170C170 51.2502 135.75 17 93.5 17C51.2502 17 17 51.2502 17 93.5H0Z"
            fill="white"
          />
          <circle cx="8.5" cy="93.5" r="8.5" fill="white" />
          <circle cx="178.5" cy="93.5" r="8.5" fill="white" />
        </svg>
      )}
      {/* {isCollapsed &&
                
        } */}
    </div>
  );
};
