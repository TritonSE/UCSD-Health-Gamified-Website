import { animated, useSpring } from "react-spring";

import styles from "./ProgressBar.module.css";

type Props = {
  percentage: number;
  isCollapsed?: boolean;
};

export const ProgressBar = ({ percentage, isCollapsed = false }: Props) => {
  const size = 187;
  const strokeWidth = 18.5;
  const radius = (size - strokeWidth) / 2;
  const circumference = Math.PI * radius;

  const animatedPercentage = useSpring({
    val: percentage,
    from: { val: 0 },
    config: { tension: 30, friction: 12 },
  });

  const animatedStrokeDashoffset = animatedPercentage.val.to((val) => {
    return circumference - (val / 100) * circumference;
  });

  const animatedHeight = animatedPercentage.val.to((val) => {
    if (val <= 1) return 0;
    if (val <= 10) return 16;

    // Scale values from 17-100% to fill the remaining 84% of the bar
    // This maps the range [17, 100] to [17, 100]
    return 16 + ((val - 16) * 84) / 84;
  });

  return (
    <div className={styles.container}>
      {!isCollapsed && (
        <svg
          width={size}
          height={size / 2}
          viewBox={`0 0 ${size} ${size / 2}`}
          className={styles.svg}
        >
          {/* Background half-circle */}
          <path
            d={`M ${size - strokeWidth / 2},${size / 2} A ${radius} ${radius} 0 0 0 ${strokeWidth / 2},${size / 2}`}
            stroke="#FFF"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeLinecap="round"
          />

          {/* Progress half-circle */}
          <animated.path
            d={`M ${strokeWidth / 2},${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2},${size / 2}`}
            stroke="#BBD567"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={animatedStrokeDashoffset}
            strokeLinecap="round"
          />

          {/* Animated Centered Text */}
          <animated.text x="50%" y="100%" className={styles.circleText} textAnchor="middle">
            {animatedPercentage.val.to((val: number) => Math.round(val) + "%")}
          </animated.text>
          <text x="50%" y="125%" className={styles.circleSubText} textAnchor="middle">
            progress
          </text>
        </svg>
      )}
      {isCollapsed && (
        <svg width={16} height={100} viewBox={`0 0 16 100`} className={styles.verticalBarSvg}>
          <rect width="16" height="100" rx="8" fill="white" />

          <animated.rect
            x="0"
            y={animatedHeight.to((h) => 100 - h)}
            width="16"
            height={animatedHeight.to((h) => h)}
            rx="8"
            fill="#BBD567"
          />

          <animated.text
            x="8"
            y="120"
            textAnchor="middle"
            className={styles.verticalText}
            fill="white"
            fontSize="14"
          >
            {animatedPercentage.val.to((val: number) => Math.round(val) + "%")}
          </animated.text>
        </svg>
      )}
    </div>
  );
};
