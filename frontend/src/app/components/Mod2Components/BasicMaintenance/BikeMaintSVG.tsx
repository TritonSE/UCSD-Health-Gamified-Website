import styles from "./BikeMaintSVG.module.css";

const CIRCLE_DATA = [
  { x: "99", y: "269", number: "1" },
  { x: "253", y: "345", number: "2" },
  { x: "497", y: "360", number: "3" },
  { x: "432", y: "26", number: "4" },
  { x: "808", y: "283", number: "5" },
];

type BikeMaintSVGProps = {
  handleCircleClick: (number: string) => void;
  activeCircle: number | undefined;
  clickedCircles: number[];
};

export default function BikeMaintSVG({ handleCircleClick, activeCircle, clickedCircles }: BikeMaintSVGProps) {
  return (
    <svg
      className={styles.svg}
      xmlns="http://www.w3.org/2000/svg"
      width="944"
      height="403"
      viewBox="0 0 944 403"
      fill="none"
    >
      <g clipPath="url(#B)">
        <g stroke="#484848" strokeWidth="5">
          <path d="M227.5 177L266 278.5l18.5-11.5 87-96m192-45.5L609 119l6 20.5-32 23.5m-31.5-57.5l-18-34.499h18V3l-43 9.5" />
        </g>
        <circle cx="267" cy="292" r="101" stroke="#62657a" strokeWidth="20" />
        <g stroke="#4e4e68" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round">
          <use href="#C" />
          <use href="#D" />
        </g>
        <circle cx="649" cy="292" r="101" stroke="#62657a" strokeWidth="20" />
        <g stroke="#4e4e68" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round">
          <path d="M546.75 264.517c13-36.21 42-66.384 76-73.517m-67.5 70.773c8.5-27.431 33.5-51.571 57.5-59.8" />
        </g>
        <path
          d="M425.113 333.563l-169.872-22.722A24.49 24.49 0 0 1 234 286.57c0-13.16 10.402-23.967 23.553-24.47l171.259-6.545c22.216-.849 40.688 16.931 40.688 39.163 0 23.709-20.887 41.988-44.387 38.845z"
          fill="#bbd567"
        />
        <g stroke="#bbd567">
          <g strokeWidth="13">
            <path d="M382.5 259.499C359.5 150 176 127.001 147 277m598.609-54.901C683.501 127 508.501 171.999 530.5 316" />
          </g>
          <path d="M389.5 194c37.333 17 128.9 37.6 172.5-60M457 276l127.5-100" strokeWidth="15" />
        </g>
        <path d="M369.5 156L447 302.5m102.5-193L647 287" stroke="#9ab445" strokeWidth="13" />
        <g fill="#bbd567">
          <rect
            x="355"
            y="148.459"
            width="23"
            height="32"
            rx="10"
            transform="rotate(338.422 355 148.459)"
          />
          <rect
            x="538"
            y="105.459"
            width="23"
            height="32"
            rx="10"
            transform="rotate(338.422 538 105.459)"
          />
        </g>
        <circle cx="649.5" cy="291.5" r="20.5" fill="#4e4e68" />
        <path
          d="M234 288c1.5 14 11.5 21 20 22.5l172.5 23C454 336 469 313 469.5 297L234 288z"
          fill="#9ab445"
        />
        <path
          d="M859.5%AE0 14.001l-141 161.5 20.5 30L1018.5 330l-159-315.999z"
          fill="url(#A)"
          fillOpacity=".5"
        />
        <path d="M719.5 174l-16.5 3c16 7 36.5 26.5 39 29.5l-1.5-15.5-21-17z" fill="#fcd579" />
        <circle cx="428.5" cy="293.5" r="20.5" fill="#62657a" />
        <path d="M428 294v57.5" stroke="#484848" strokeWidth="5" />
        <g fill="#fcd579">
          <path d="M405 348h46v18h-46zm20.567-232H318.034c-5.91 0-10.655 5.192-8.935 10.847 12.949 42.563 73.427 27.369 88.305 15.431 8.061-6.467 19.435-12.292 27.549-14.174 3.166-.735 6.047-3.42 6.047-6.67 0-3.001-2.433-5.434-5.433-5.434z" />
        </g>
        <path
          d="M622.205 157.181l-19.397-68.315c-.907-3.192 1.491-6.366 4.809-6.366H649.1a5 5 0 0 1 4.96 4.364l6.527 50.915a5 5 0 0 1-2.361 4.908l-28.613 17.399c-2.823 1.717-6.505.272-7.408-2.906z"
          fill="#f0c254"
        />
        <g fill="#fcd579">
          <rect x="595" y="79.001" width="68" height="13" rx="6.5" />
          <rect
            x="469"
            y="14.673"
            width="68"
            height="13"
            rx="6.5"
            transform="rotate(347.539 469 14.673)"
          />
        </g>
        {CIRCLE_DATA.map(({ x, y, number }) => (
          <g
            className={styles.svg_circle}
            key={number}
            onClick={() => {
              handleCircleClick(number);
            }}
            aria-selected={activeCircle === parseInt(number)}
            fill={clickedCircles.includes(parseInt(number)) ? "#1C3A29" : "#909090"}
          >
            <circle cx={x} cy={y} r="23" />
            <text
              className={styles.svg_text}
              x={x}
              y={y}
              textAnchor="middle"
              fill="#fff"
              dominantBaseline="central"
            >
              {number}
            </text>
          </g>
        ))}
      </g>
      <defs>
        <linearGradient
          id="A"
          x1="760.5"
          y1="188.5"
          x2="927.5"
          y2="150.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fcd579" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <clipPath id="B">
          <path fill="#fff" d="M0 0h944v403H0z" />
        </clipPath>
        <path id="C" d="M163.75 264.517c13-36.21 42-66.384 76-73.517" />
        <path id="D" d="M172.25 261.773c8.5-27.431 33.5-51.571 57.5-59.8" />
      </defs>
    </svg>
  );
}