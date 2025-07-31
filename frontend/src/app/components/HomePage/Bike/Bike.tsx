"use client";

import { useEffect, useRef } from "react";

import { ModuleNumbers } from "../ModuleMap/ModuleMap";

import styles from "./Bike.module.css";
// import { useRouter } from "next/navigation";

const BIKE_PATHS: Record<number, string> = {
  "0": "M 400 160",
  "1": "M 400 160 h 101",
  "2": "M 501 160 c98,0,101.541,89,122.5,140c15,36.5,50,36.5,84,36.5c73,0,76.5,-35,97.5,-91",
  "3": "M 805 245.5 c24,-65.5,37,-84,104,-84c76,0,111,22,111,78v199.5",
  "4": "M 1020 439 c0,192.5,0.5,192.5,-173,192.5",
  "5": "M 847 631.5 c-22.12,0,-41.5,-22.75,-60,-41c-52,-51.5,-96.5,-39,-195.5,-39c-35.5,0,-51,-23.5,-63.5,-51",
  "6": "M 528 500.5 c-6.5,-14.5,-16.75,-44.5,-23.5,-60c-23,-53.5,-48,-53.5,-120,-53.5c-18.5,0,-98.5,0.5,-108.5,53.5c-24,127,-39.5,127,-109.5,127",
  "7": "M 166.5 567.5 c-65.5,0,-98.5,3.5,-98.5,135.5v69c0,74.5,9,88.5,99.5,92h57.5h56.5",
  "8": "M 281.5 864 c19,0,32.5,0,45.5,0c18.5,0,55,-70,93,-109.5c52,-54,51,-38,193.5,-38",
  "9": "M 613.5 716.5 c6.12,0,8.5,0,14.5,0c101.5,0.435,82.5,149.5,199,149h32.5",
};

type BikeProps = {
  modulePreview: ModuleNumbers;
  initialModule: ModuleNumbers;
  bikeIsAnimating: React.MutableRefObject<boolean>;
};

const BIKE_ANIMATION_DURATION = 2;

export default function Bike({ modulePreview, initialModule, bikeIsAnimating }: BikeProps) {
  if (modulePreview === 10) {
    modulePreview--;
  }

  const bikeContainerRef = useRef<SVGGElement>(null);
  const bikePedalRef = useRef<SVGGElement>(null);
  const bikePedalRectRef = useRef<SVGRectElement>(null);
  // const router = useRouter();

  const getBikeAnimation = () => {
    if (modulePreview === 1 || modulePreview === 9) {
      return `${styles.moveAlong} ${BIKE_ANIMATION_DURATION * 0.75}s ease-in-out forwards`;
    }
    if (modulePreview === 4) {
      return `${styles.moveAlong4} ${BIKE_ANIMATION_DURATION}s ease-in-out forwards`;
    }
    if (modulePreview === 7) {
      return `${styles.moveAlong7} ${BIKE_ANIMATION_DURATION}s ease-in-out forwards`;
    }
    return `${styles.moveAlong} ${BIKE_ANIMATION_DURATION}s ease-in-out forwards`;
  };

  const getPedalAnimation = () => {
    if (modulePreview === 1 || modulePreview === 9) {
      return {
        container: `${styles.ShortSpin} ${BIKE_ANIMATION_DURATION * 0.75}s ease-in-out`,
        rect: `${styles.ShortSpin} ${BIKE_ANIMATION_DURATION * 0.75}s ease-in-out reverse`,
      };
    } else {
      return {
        container: `${styles.Spin} ${BIKE_ANIMATION_DURATION}s ease-in-out`,
        rect: `${styles.Spin} ${BIKE_ANIMATION_DURATION}s ease-in-out reverse`,
      };
    }
  };

  const handleBikeFlip = () => {
    if (modulePreview >= 8) return `scaleY(1)`;
    if (modulePreview >= 5) return `scaleY(-1)`;
    return "";
  };

  useEffect(() => {
    if (modulePreview === initialModule || bikeIsAnimating.current) return;
    const bikeElement = bikeContainerRef.current;
    const bikePedalContainer = bikePedalRef.current;
    const bikePedalRect = bikePedalRectRef.current;

    if (!bikeElement || !bikePedalContainer || !bikePedalRect || modulePreview === 0) return;

    bikeElement.style.animation = "";
    bikePedalContainer.style.animation = "";
    bikePedalRect.style.animation = "";

    const handleEndAnimation = (event: AnimationEvent) => {
      if (event.target === bikeElement) {
        bikeIsAnimating.current = false;
        // router.push(`/module/${modulePreview}`);
      }
    };

    bikeElement.addEventListener("animationend", handleEndAnimation);
    bikeIsAnimating.current = true;

    requestAnimationFrame(() => {
      bikeElement.style.animation = getBikeAnimation();
      bikePedalContainer.style.animation = getPedalAnimation().container;
      bikePedalRect.style.animation = getPedalAnimation().rect;
    });

    return () => {
      bikeElement.removeEventListener("animationend", handleEndAnimation);
    };
  }, [modulePreview]);

  return (
    // prettier-ignore
    <g
      className={styles.bike_container}
      style={{
        offsetPath: `path("${BIKE_PATHS[modulePreview]}")`,
        transform: handleBikeFlip(),
        transformBox: "fill-box",
        transformOrigin: "center",
      }}
      ref={bikeContainerRef}
      // Necessary to properly reset animation state for Firefox
      key={"bike-" + modulePreview}
    >
      <g id="BIKE">
        <path d="M18.1875 36.5941L25.9296 57.0051L29.6498 54.6925L47.145 35.3875M85.755 26.2378L94.9048 24.9307L96.1113 29.0531L89.6763 33.7788" stroke="#484848" strokeWidth="1.00547" />
        <path d="M83.3423 22.2156L79.7227 15.2779H83.3423V1.60352L74.6953 3.51391" stroke="#484848" strokeWidth="1.00547" />
        <g id="bike-front-wheel">
          <circle cx="26.131" cy="59.7198" r="20.3105" stroke="#62657A" strokeWidth="4.02188" />
          <path d="M6.32324 52.4805C8.93746 45.844 14.7692 40.3139 21.6064 39.0068" stroke="#4E4E68" strokeWidth="0.603281" strokeMiterlimit="10" strokeLinecap="round" />
          <path d="M8.03223 51.9772C9.74152 46.9498 14.7689 42.5258 19.5951 41.0176" stroke="#4E4E68" strokeWidth="0.603281" strokeMiterlimit="10" strokeLinecap="round" />
        </g>
        <g id="bike-back-wheel">
          <circle cx="102.949" cy="59.7198" r="20.3105" stroke="#62657A" strokeWidth="4.02188" />
          <path d="M83.1416 52.4805C85.7558 45.844 91.5875 40.3139 98.4247 39.0068" stroke="#4E4E68" strokeWidth="0.603281" strokeMiterlimit="10" strokeLinecap="round" />
          <path d="M84.8506 51.9772C86.5599 46.9498 91.5872 42.5258 96.4135 41.0176" stroke="#4E4E68" strokeWidth="0.603281" strokeMiterlimit="10" strokeLinecap="round" />
        </g>
        <path d="M57.9267 68.0777L23.7666 63.5085C21.3211 63.1814 19.4951 61.095 19.4951 58.6277C19.4951 55.9812 21.5869 53.808 24.2314 53.707L58.6706 52.3908C63.138 52.2201 66.8527 55.7955 66.8527 60.2662C66.8527 65.0339 62.6524 68.7098 57.9267 68.0777Z" fill="#FFE5C9" />
        <path d="M49.3576 53.1844C44.7324 31.1648 7.83172 26.5398 2 56.7038" stroke="#FFE5C9" strokeWidth="2.61422" />
        <path d="M122.377 45.6639C109.887 26.5401 74.6958 35.5891 79.1198 64.5466" stroke="#FFE5C9" strokeWidth="2.61422" />
        <path d="M50.7656 40.0129C58.2731 43.4315 76.6866 47.574 85.4543 27.9473M64.3395 56.5026L89.9789 36.3932" stroke="#FFE5C9" strokeWidth="3.01641" />
        <path d="M46.7432 32.3714L62.3279 61.8316M82.94 23.0205L102.547 58.7146" stroke="#FFCE99" strokeWidth="2.61422" />
        <rect x="43.8271" y="30.8545" width="4.62516" height="6.435" rx="2.01094" transform="rotate(-21.5779 43.8271 30.8545)" fill="#FFE5C9" />
        <rect x="80.6279" y="22.208" width="4.62516" height="6.435" rx="2.01094" transform="rotate(-21.5779 80.6279 22.208)" fill="#FFE5C9" />
        <circle cx="103.05" cy="59.6195" r="4.12242" fill="#4E4E68" />
        <path d="M19.4951 58.916C19.7968 61.7313 21.8077 63.139 23.517 63.4406L58.2057 68.0658C63.7357 68.5685 66.7521 63.9434 66.8527 60.7259C46.8439 60.2231 35.5826 59.9215 19.4951 58.916Z" fill="#FFCE99" />
        <path d="M145.279 3.81641L116.925 36.293L121.047 42.3259L177.253 67.362L145.279 3.81641Z" fill="url(#bike_headlight_gradient)" fillOpacity="0.5" />
        <path d="M117.126 35.9912L113.808 36.5945C117.025 38.0021 121.148 41.9235 121.65 42.5268L121.349 39.4098L117.126 35.9912Z" fill="#FCD579" />
        <circle cx="58.6078" cy="60.0218" r="4.12242" fill="#62657A" />
        <g ref={bikePedalRef} className={styles.bike_pedal} id="bike_pedal_container">
          <path d="M58.5068 60.1221V71.685" stroke="#484848" strokeWidth="1.00547" />
          <g ref={bikePedalRectRef} className={styles.bike_pedal_rect} id="bike_pedal_rect">
            <rect x="53.8818" y="70.9814" width="9.25031" height="3.61969" fill="#FF8500" />
          </g>
        </g>
        <path d="M58.0178 24.3271H36.3938C35.2052 24.3271 34.251 25.3712 34.5969 26.5083C37.2008 35.0674 49.3626 32.0121 52.3545 29.6115C53.9755 28.3108 56.2627 27.1396 57.8945 26.761C58.5311 26.6133 59.1104 26.0733 59.1104 25.4197C59.1104 24.8163 58.6213 24.3271 58.0178 24.3271Z" fill="#FF8500" />
        <path d="M97.5602 32.6085L93.6594 18.8709C93.4771 18.229 93.9593 17.5908 94.6266 17.5908H102.969C103.474 17.5908 103.902 17.9667 103.966 18.4684L105.278 28.7071C105.329 29.101 105.143 29.4877 104.804 29.6941L99.0498 33.193C98.4822 33.5382 97.7417 33.2477 97.5602 32.6085Z" fill="#DD7300" />
        <rect x="92.0898" y="16.8867" width="13.6744" height="2.61422" rx="1.30711" fill="#FF8500" />
        <rect x="66.752" y="3.95117" width="13.6744" height="2.61422" rx="1.30711" transform="rotate(-12.4615 66.752 3.95117)" fill="#FF8500" />
      </g>
    </g>
  );
}
