"use client";

import { useEffect, useRef } from "react";

import { ModuleNumbers } from "../ModuleMap/ModuleMap";

import styles from "./Bike.module.css";
// import { useRouter } from "next/navigation";

const BIKE_PATHS = {
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
  currentModule: ModuleNumbers;
  bikeIsAnimating: React.MutableRefObject<boolean>;
};

const BIKE_ANIMATION_DURATION = 2;

export default function Bike({ modulePreview, currentModule, bikeIsAnimating }: BikeProps) {
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
    if (modulePreview === currentModule || bikeIsAnimating.current) return;
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
        console.log("Navigating to Module ", modulePreview);
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
  }, [modulePreview, currentModule]);

  return (
    // prettier-ignore
    <g
      className={styles.bike_container}
      style={{
        offsetPath: `path('${BIKE_PATHS[modulePreview]}')`,
        transform: handleBikeFlip(),
      }}
      ref={bikeContainerRef}
      // Necessary to properly reset animation state for Firefox 
      key={"bike-" + modulePreview}
    >
      <g id="BIKE">
        <g>
          <path d="M330.188 151.595L337.93 172.006L341.65 169.694L359.145 150.389M397.755 141.239L406.905 139.932L408.112 144.054L401.677 148.78" stroke="#484848" strokeWidth="1.00547" />
          <path d="M395.343 137.217L391.723 130.279H395.343V116.604L386.696 118.515" stroke="#484848" strokeWidth="1.00547" />
          <g id="bike-back-wheel">
            <circle cx="338.131" cy="174.72" r="20.3105" stroke="#62657A" strokeWidth="4.02188" />
            <path d="M318.324 167.48C320.938 160.844 326.77 155.314 333.607 154.007" stroke="#4E4E68" strokeWidth="0.603281" strokeMiterlimit="10" strokeLinecap="round" />
            <path d="M320.033 166.977C321.743 161.95 326.77 157.526 331.596 156.018" stroke="#4E4E68" strokeWidth="0.603281" strokeMiterlimit="10" strokeLinecap="round" />
          </g>
          <g id="bike-front-wheel">
            <circle cx="414.949" cy="174.72" r="20.3105" stroke="#62657A" strokeWidth="4.02188" />
            <path d="M395.142 167.48C397.756 160.844 403.588 155.314 410.425 154.007" stroke="#4E4E68" strokeWidth="0.603281" strokeMiterlimit="10" strokeLinecap="round" />
            <path d="M396.851 166.977C398.56 161.95 403.588 157.526 408.414 156.018" stroke="#4E4E68" strokeWidth="0.603281" strokeMiterlimit="10" strokeLinecap="round" />
          </g>
          <g id="Group 172">
            <path d="M369.928 183.079L335.768 178.51C333.322 178.182 331.496 176.096 331.496 173.629C331.496 170.982 333.588 168.809 336.232 168.708L370.672 167.392C375.139 167.221 378.854 170.797 378.854 175.267C378.854 180.035 374.653 183.711 369.928 183.079Z" fill="#FFE5C9" />
            <path d="M361.358 168.185C356.733 146.166 319.832 141.541 314 171.705" stroke="#FFE5C9" strokeWidth="2.61422" />
            <path d="M434.377 160.665C421.887 141.541 386.696 150.59 391.12 179.548" stroke="#FFE5C9" strokeWidth="2.61422" />
            <path d="M362.766 155.014C370.273 158.432 388.687 162.575 397.454 142.948M376.339 171.504L401.979 151.394" stroke="#FFE5C9" strokeWidth="3.01641" />
            <path d="M358.744 147.372L374.328 176.833M394.941 138.021L414.547 173.716" stroke="#FFCE99" strokeWidth="2.61422" />
            <rect x="355.828" y="145.855" width="4.62516" height="6.435" rx="2.01094" transform="rotate(-21.5779 355.828 145.855)" fill="#FFE5C9" />
            <rect x="392.628" y="137.209" width="4.62516" height="6.435" rx="2.01094" transform="rotate(-21.5779 392.628 137.209)" fill="#FFE5C9" />
          </g>
          <circle cx="415.05" cy="174.619" r="4.12242" fill="#4E4E68" />
          <path d="M331.496 173.916C331.797 176.731 333.808 178.139 335.517 178.441L370.206 183.066C375.736 183.569 378.753 178.943 378.853 175.726C358.844 175.223 347.583 174.921 331.496 173.916Z" fill="#FFCE99" />
          <path d="M457.28 118.816L428.925 151.293L433.048 157.326L489.253 182.362L457.28 118.816Z" fill="url(#bike_headlight_gradient)" fillOpacity="0.5" />
          <path d="M429.127 150.991L425.809 151.594C429.026 153.002 433.149 156.923 433.651 157.527L433.35 154.41L429.127 150.991Z" fill="#FCD579" />
          <circle cx="370.608" cy="175.022" r="4.12242" fill="#62657A" />
          <g ref={bikePedalRef} className={styles.bike_pedal} id="bike_pedal_container">
            <path d="M370.508 175.123V186.686" stroke="#484848" strokeWidth="1.00547" />
            <g ref={bikePedalRectRef} className={styles.bike_pedal_rect} id="bike_pedal_rect">
              <rect x="365.882" y="185.981" width="9.25031" height="3.61969" fill="#FF8500" />
            </g>
          </g>
          <path d="M370.018 139.328H348.394C347.206 139.328 346.251 140.372 346.597 141.509C349.201 150.068 361.363 147.013 364.355 144.612C365.976 143.312 368.263 142.141 369.895 141.762C370.532 141.614 371.111 141.074 371.111 140.421C371.111 139.817 370.622 139.328 370.018 139.328Z" fill="#FF8500" />
          <path d="M409.561 147.609L405.66 133.871C405.478 133.229 405.96 132.591 406.628 132.591H414.97C415.475 132.591 415.902 132.967 415.967 133.468L417.279 143.707C417.33 144.101 417.144 144.488 416.805 144.694L411.051 148.193C410.483 148.538 409.743 148.248 409.561 147.609Z" fill="#DD7300" />
          <rect x="404.09" y="131.888" width="13.6744" height="2.61422" rx="1.30711" fill="#FF8500" />
          <rect x="378.753" y="118.952" width="13.6744" height="2.61422" rx="1.30711" transform="rotate(-12.4615 378.753 118.952)" fill="#FF8500" />
        </g>
      </g>
    </g>
  );
}
