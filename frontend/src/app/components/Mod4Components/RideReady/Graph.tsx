import styles from "./GraphSVG.module.css";

const CIRCLE_DATA = [
  { x: "99", y: "356", number: "1" }, // 78.5 + 20.5, 335.5 + 20.5
  { x: "253", y: "432", number: "2" }, // 232.5 + 20.5, 411.5 + 20.5
  { x: "651", y: "379", number: "4" }, // 630.5 + 20.5, 358.5 + 20.5
  { x: "432", y: "111", number: "3" }, // 411.5 + 20.5, 90.5 + 20.5
  { x: "628", y: "120", number: "5" }, // 607.5 + 20.5, 99.5 + 20.5
];

type GraphSVGProps = {
  handleCircleClick: (number: string) => void;
  activeCircles: number[];
  inactiveCircles: number[];
  hoveredCircle: number | null;
  setHoveredCircle: (number: number | null) => void;
};

export default function GraphSVG({
  handleCircleClick,
  activeCircles,
  inactiveCircles,
  hoveredCircle,
  setHoveredCircle,
}: GraphSVGProps) {
  return (
    <svg
      width="924"
      height="490"
      viewBox="0 0 924 490"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_7640_36368)">
        <rect width="924" height="490" rx="8" fill="#C1DCFF" />
        <path
          d="M-25.4803 54.1744C21.1864 82.6744 156.12 127.874 322.52 80.6744C530.52 21.6744 509.52 -2.32399 650.02 0.176015C790.52 2.67601 946.02 188.675 1232.02 153.675C1378.76 135.717 1437.91 115.977 1456.02 100.786V80.6744C1463.43 85.2174 1466.14 92.2903 1456.02 100.786V221.175C1391.35 196.008 1350.22 132.776 1119.02 193.176C830.02 268.676 596.886 149.994 500.52 132.176C368.02 107.676 -28.4805 172.676 -125.48 250.676C-203.08 313.076 -57.8136 128.674 -25.4803 54.1744Z"
          fill="white"
          fillOpacity="0.5"
        />
        <path
          d="M925.115 15.1744C878.448 43.6744 743.515 88.8744 577.115 41.6744C369.115 -17.3256 390.115 -41.324 249.615 -38.824C109.115 -36.324 -43.5 100 -329.5 65C-525.141 41.0579 -567.205 -19.6856 -562.367 -44.7083L-556.385 -54C-559.38 -52.1643 -561.547 -48.9493 -562.367 -44.7083L-633 65C-568.333 39.8333 -450.585 93.7758 -219.385 154.176C69.6152 229.676 49.73 93.4599 249.615 56.5C449.5 19.5401 928.115 133.676 1025.12 211.676C1102.72 274.076 957.448 89.6745 925.115 15.1744Z"
          fill="#FCFCFF"
          fillOpacity="0.5"
        />
        <path d="M-1 373H1833V490H-1V373Z" fill="#909090" />
        <path d="M-2 428H1902" stroke="#FCD579" strokeWidth="10" strokeDasharray="30 30" />
        <rect x="-1" y="335" width="925" height="38" fill="#FCD579" />
      </g>
      <g clipPath="url(#clip1_7640_36368)">
        <path
          d="M227.5 264L266 365.5L284.5 354L371.5 258M563.5 212.5L609 206L615 226.5L583 250"
          stroke="#484848"
          strokeWidth="5"
        />
        <path d="M551.5 192.5L533.5 158H551.5V90L508.5 99.5" stroke="#484848" strokeWidth="5" />
        <circle cx="267" cy="379" r="101" stroke="#62657A" strokeWidth="20" />
        <path
          d="M163.75 351.517C176.75 315.306 205.75 285.132 239.75 278"
          stroke="#4E4E68"
          strokeWidth="3"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M172.25 348.772C180.75 321.341 205.75 297.202 229.75 288.973"
          stroke="#4E4E68"
          strokeWidth="3"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <circle cx="649" cy="379" r="101" stroke="#62657A" strokeWidth="20" />
        <path
          d="M546.75 351.517C559.75 315.306 588.75 285.132 622.75 278"
          stroke="#4E4E68"
          strokeWidth="3"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M555.25 348.772C563.75 321.341 588.75 297.202 612.75 288.973"
          stroke="#4E4E68"
          strokeWidth="3"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M425.113 420.564L255.241 397.842C243.08 396.216 234 385.84 234 373.571C234 360.41 244.402 349.603 257.553 349.101L428.812 342.556C451.028 341.707 469.5 359.487 469.5 381.719C469.5 405.428 448.613 423.707 425.113 420.564Z"
          fill="#BBD567"
        />
        <path
          d="M382.5 346.5C359.5 237.001 176 214.002 147 364.001"
          stroke="#BBD567"
          strokeWidth="13"
        />
        <path
          d="M745.608 309.1C683.5 214.001 508.5 259 530.5 403"
          stroke="#BBD567"
          strokeWidth="13"
        />
        <path
          d="M389.5 281.001C426.833 298.001 518.4 318.601 562 221.001M457 363.001L584.5 263.001"
          stroke="#BBD567"
          strokeWidth="15"
        />
        <path
          d="M369.5 243.001L447 389.501M549.5 196.501L647 374.001"
          stroke="#9AB445"
          strokeWidth="13"
        />
        <rect
          x="355"
          y="235.46"
          width="23"
          height="32"
          rx="10"
          transform="rotate(-21.5779 355 235.46)"
          fill="#BBD567"
        />
        <rect
          x="538"
          y="192.46"
          width="23"
          height="32"
          rx="10"
          transform="rotate(-21.5779 538 192.46)"
          fill="#BBD567"
        />
        <circle cx="649.5" cy="378.5" r="20.5" fill="#4E4E68" />
        <path
          d="M234 375C235.5 389 245.5 396 254 397.5L426.5 420.5C454 423 469 400 469.5 384C370 381.5 314 380 234 375Z"
          fill="#9AB445"
        />
        <path
          d="M719.5 261L703 264C719 271 739.5 290.5 742 293.5L740.5 278L719.5 261Z"
          fill="#FCD579"
        />
        <circle cx="428.5" cy="380.5" r="20.5" fill="#62657A" />
        <path d="M428 381V438.5" stroke="#484848" strokeWidth="5" />
        <rect x="405" y="435" width="46" height="18" fill="#FCD579" />
        <path
          d="M425.567 203H318.034C312.124 203 307.379 208.192 309.099 213.846C322.048 256.409 382.526 241.216 397.404 229.278C405.465 222.81 416.839 216.986 424.953 215.103C428.119 214.369 431 211.683 431 208.433C431 205.433 428.567 203 425.567 203Z"
          fill="#FCD579"
        />
        <path
          d="M622.205 244.18L602.808 175.866C601.901 172.673 604.299 169.5 607.617 169.5H649.1C651.616 169.5 653.74 171.369 654.06 173.864L660.587 224.779C660.838 226.738 659.913 228.661 658.226 229.687L629.613 247.087C626.79 248.803 623.108 247.359 622.205 244.18Z"
          fill="#F0C254"
        />
        <rect x="595" y="166" width="68" height="13" rx="6.5" fill="#FCD579" />
        <rect
          x="469"
          y="101.673"
          width="68"
          height="13"
          rx="6.5"
          transform="rotate(-12.4615 469 101.673)"
          fill="#FCD579"
        />
        <rect x="78.5" y="335.5" width="41" height="41" rx="17.5" fill="#BBD567" />
        <rect
          x="78.5"
          y="335.5"
          width="41"
          height="41"
          rx="20.5"
          stroke="#F9F9F9"
          strokeWidth="5"
        />
        <rect x="232.5" y="411.5" width="41" height="41" rx="17.5" fill="#BBD567" />
        <rect x="232.5" y="411.5" width="41" height="41" rx="20.5" stroke="white" strokeWidth="5" />
        <rect x="630.5" y="358.5" width="41" height="41" rx="20.5" fill="#BBD567" />
        <rect x="630.5" y="358.5" width="41" height="41" rx="20.5" stroke="white" strokeWidth="5" />
        <rect x="411.5" y="90.5" width="41" height="41" rx="17.5" fill="#BBD567" />
        <rect x="411.5" y="90.5" width="41" height="41" rx="20.5" stroke="white" strokeWidth="5" />
        <rect x="607.5" y="99.5" width="41" height="41" rx="17.5" fill="#BBD567" />
        <rect x="607.5" y="99.5" width="41" height="41" rx="20.5" stroke="white" strokeWidth="5" />
        {CIRCLE_DATA.map(({ x, y, number }) => (
          <g
            className={styles.svg_circle}
            key={number}
            onClick={() => {
              handleCircleClick(number);
            }}
            onMouseEnter={() => {
              setHoveredCircle(parseInt(number));
            }}
            onMouseLeave={() => {
              setHoveredCircle(null);
            }}
            aria-selected={inactiveCircles.includes(parseInt(number))}
          >
            <circle
              cx={x}
              cy={y}
              r="16.25"
              fill={
                activeCircles.includes(parseInt(number))
                  ? "#1C3A29"
                  : hoveredCircle === parseInt(number)
                    ? "#77AC1B"
                    : "#BBD567"
              }
            />
          </g>
        ))}
      </g>
      <defs>
        <clipPath id="clip0_7640_36368">
          <rect width="924" height="490" rx="8" fill="white" />
        </clipPath>
        <clipPath id="clip1_7640_36368">
          <rect width="923" height="403" fill="white" transform="translate(0 87)" />
        </clipPath>
      </defs>
    </svg>
  );
}
