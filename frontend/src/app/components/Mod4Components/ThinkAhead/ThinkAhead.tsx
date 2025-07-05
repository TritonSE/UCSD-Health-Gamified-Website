"use client";
import { useState } from "react";
import styles from "./ThinkAhead.module.css";
import { ANIMATION_TIMELINE, TEXT_BOX } from "./constants";

export default function ThinkAhead() {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [_showText, setShowText] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const ANIMATION_LENGTH = ANIMATION_TIMELINE.length - 1;

  const handleNextClick = () => {
    if (isTransitioning || animationIndex === ANIMATION_LENGTH) return;
    setAnimationIndex((prev) => prev + 1);
    setShowText(false);
    setIsTransitioning(true);
    setTimeout(() => {
      setTextIndex((prev) => prev + 1);
      setShowText(true);
      setIsTransitioning(false);
    }, 500);
  };

  const handlePreviousClick = () => {
    if (isTransitioning || animationIndex === 0) return;
    setAnimationIndex((prev) => prev - 1);
    setShowText(false);
    setIsTransitioning(true);
    setTimeout(() => {
      setTextIndex((prev) => prev - 1);
      setShowText(true);
      setIsTransitioning(false);
    }, 500);
  };

  const currentAnimation = ANIMATION_TIMELINE[animationIndex];
  const currentTextbox = TEXT_BOX[textIndex];

  return (
    <section id={styles.container}>
      <div className={styles.header_container}>
        <h2>4. Think Ahead</h2>
        <p className={styles.header_text}>
          Click through the slides to see how Timmy avoids obstacles!
        </p>
      </div>
      <div>
        <svg
          width="950"
          height="498"
          viewBox="0 0 924 498"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_6576_23660)">
            <rect width="924" height="490" rx="8" fill="#B6E3FF" />
            <g
              id={styles.road_container}
              className={styles.transition_element}
              style={{
                transform: `translateX(${currentAnimation.road_container}px)`,
              }}
            >
              <path
                d="M-4.48029 22.1744C42.1864 50.6744 177.12 95.8744 343.52 48.6744C551.52 -10.3256 530.52 -34.324 671.02 -31.824C811.52 -29.324 967.02 156.675 1253.02 121.675C1399.76 103.717 1458.91 83.977 1477.02 68.7857V48.6744C1484.43 53.2174 1487.14 60.2903 1477.02 68.7857V189.175C1412.35 164.008 1371.22 100.776 1140.02 161.176C851.02 236.676 617.886 117.994 521.52 100.176C389.02 75.6758 -7.48047 140.676 -104.48 218.676C-182.08 281.076 -36.8136 96.6745 -4.48029 22.1744Z"
                fill="#CFEDFF"
                fillOpacity="0.58"
              />
              <path
                d="M1447.12 74.1744C1400.45 102.674 1265.52 147.874 1099.12 100.674C891.115 41.6744 912.115 17.676 771.615 20.176C631.115 22.676 478.5 159 192.5 124C-3.14124 100.058 -45.2047 39.3144 -40.3671 14.2917L-34.3849 5C-37.38 6.83572 -39.5471 10.0507 -40.3671 14.2917L-111 124C-46.3334 98.8333 71.4153 152.776 302.615 213.176C591.615 288.676 571.73 152.46 771.615 115.5C971.5 78.5401 1450.12 192.676 1547.12 270.676C1624.72 333.076 1479.45 148.674 1447.12 74.1744Z"
                fill="#CFEDFF"
                fillOpacity="0.55"
              />
              <path
                d="M1414 273.025V336.525L-11 363.024V336.525C79 336.525 177.833 299.201 294 273.025C409.346 247.033 472.977 301.165 595.5 310.524C714.508 319.615 771.416 273.184 865.5 298.024C957.352 322.276 1024 345.525 1153 273.025C1256.2 215.025 1370 248.858 1414 273.025Z"
                fill="#1C3A29"
              />
              <path
                d="M0 273.025V336.525L1425 363.024V336.525C1335 336.525 1238 289.024 1120 273.025C1002 257.025 938 298.024 818.5 310.524C699 323.024 652 286 557 286C462 286 390 345.525 261 273.025C157.8 215.025 44 248.858 0 273.025Z"
                fill="#4E9D5F"
              />
            </g>
            <g
              id={styles.road_container}
              className={styles.transition_element}
              style={{
                transform: `translateX(${currentAnimation.road_container}px)`,
              }}
            >
              <path id={styles.road} fill="#909090" d="M-1 373h1834v117H-1z"></path>
              <path
                id={styles.road_lines}
                className={styles.transition_element}
                style={{ transform: `translateX(${currentAnimation.road_container}px` }}
                stroke="#FCD579"
                strokeDasharray="30 30"
                strokeWidth="10"
                d="M-2 428h1904"
              ></path>
            </g>
            <rect x="-1" y="335" width="925" height="38" fill="#FFE5C9" />
            <g
              clipPath="url(#clip1_6576_23660)"
              id={styles.main_bike}
              className={styles.transition_element}
              style={{
                transform: `translateX(${currentAnimation.main_bike_x}px) translateY(${currentAnimation.main_bike_y}px) scale(${currentAnimation.main_bike_scale})`,
              }}
            >
              <path
                d="M247.957 295.824L234.297 276.048C232.41 273.317 228.712 272.665 226.037 274.591L226.03 274.596C223.355 276.523 222.716 280.299 224.603 283.031L238.264 302.806C240.151 305.538 243.849 306.19 246.523 304.263L246.531 304.258C249.205 302.331 249.844 298.555 247.957 295.824Z"
                fill="#171759"
              />
              <path
                d="M246.767 289.298L239.706 294.385C237.031 296.312 236.393 300.088 238.28 302.819L238.285 302.826C240.171 305.558 243.869 306.21 246.544 304.283L253.605 299.197C256.28 297.27 256.918 293.494 255.032 290.763L255.027 290.755C253.14 288.024 249.442 287.372 246.767 289.298Z"
                fill="#171759"
              />
              <path
                d="M138.899 323.899L159.099 378.29L168.806 372.13L214.448 320.69M315.169 296.302L339.036 292.815L342.187 303.802L325.4 316.399"
                stroke="#484848"
                strokeWidth="2.68932"
              />
              <path
                d="M308.867 285.591L299.423 267.103H308.867V230.664L286.312 235.75"
                stroke="#484848"
                strokeWidth="2.68932"
              />
              <path
                d="M159.625 439.645C188.888 439.645 212.611 415.414 212.611 385.523C212.611 355.631 188.888 331.4 159.625 331.4C130.361 331.4 106.639 355.631 106.639 385.523C106.639 415.414 130.361 439.645 159.625 439.645Z"
                stroke="#62657A"
                strokeWidth="10.7483"
              />
              <path
                d="M105.457 370.798C112.275 351.398 127.486 335.226 145.323 331.408"
                stroke="#4E4E68"
                strokeWidth="1.61359"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M109.921 369.325C114.376 354.627 127.496 341.691 140.081 337.284"
                stroke="#4E4E68"
                strokeWidth="1.61359"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M360.015 439.645C389.279 439.645 413.001 415.414 413.001 385.523C413.001 355.631 389.279 331.4 360.015 331.4C330.752 331.4 307.03 355.631 307.03 385.523C307.03 415.414 330.752 439.645 360.015 439.645Z"
                stroke="#62657A"
                strokeWidth="10.7483"
              />
              <path
                d="M101.894 341.819L110.506 339.994C104.194 346.673 98.2655 360.434 97.6704 362.423L95.2111 354.45L101.894 341.819Z"
                fill="#FF525F"
              />
              <path
                d="M94.2098 363.438L99.1106 361.255C96.2 366.039 94.4206 374.994 94.3194 376.255L91.8371 371.816L94.2098 363.438Z"
                fill="white"
              />
              <path
                d="M306.382 370.798C313.199 351.398 328.411 335.226 346.248 331.408"
                stroke="#4E4E68"
                strokeWidth="1.61359"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M310.836 369.325C315.3 354.627 328.411 341.691 340.996 337.284"
                stroke="#4E4E68"
                strokeWidth="1.61359"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M242.569 407.793L153.454 395.616C147.074 394.74 142.313 389.189 142.313 382.609C142.313 375.555 147.765 369.762 154.671 369.494L244.512 365.989C256.17 365.533 265.859 375.063 265.859 386.971C265.859 399.675 254.901 409.473 242.578 407.784L242.569 407.793Z"
                fill="#BBD567"
              />
              <path
                d="M220.216 368.107C208.147 309.434 111.89 297.106 96.679 377.485"
                stroke="#BBD567"
                strokeWidth="6.98326"
              />
              <path
                d="M410.699 348.065C378.114 297.107 286.313 321.218 297.857 398.379"
                stroke="#BBD567"
                strokeWidth="6.98326"
              />
              <path
                d="M223.883 333.009C243.471 342.119 291.503 353.16 314.372 300.861M259.295 376.949L326.179 323.363"
                stroke="#BBD567"
                strokeWidth="8.05899"
              />
              <path
                d="M213.398 312.645L254.052 391.147M307.826 287.729L358.974 382.842"
                stroke="#9AB445"
                strokeWidth="6.98326"
              />
              <path
                d="M211.41 306.331L211.402 306.335C208.305 307.586 206.787 311.165 208.012 314.328L209.751 318.817C210.975 321.981 214.479 323.531 217.576 322.28L217.584 322.276C220.681 321.025 222.199 317.446 220.974 314.283L219.236 309.794C218.011 306.63 214.507 305.08 211.41 306.331Z"
                fill="#BBD567"
              />
              <path
                d="M307.404 283.278L307.395 283.281C304.299 284.533 302.781 288.111 304.006 291.275L305.744 295.764C306.969 298.927 310.473 300.478 313.57 299.226L313.578 299.223C316.675 297.972 318.192 294.393 316.967 291.23L315.229 286.74C314.004 283.577 310.501 282.027 307.404 283.278Z"
                fill="#BBD567"
              />
              <path
                d="M360.278 396.242C366.218 396.242 371.034 391.323 371.034 385.255C371.034 379.187 366.218 374.268 360.278 374.268C354.337 374.268 349.521 379.187 349.521 385.255C349.521 391.323 354.337 396.242 360.278 396.242Z"
                fill="#4E4E68"
              />
              <path
                d="M142.313 383.377C143.1 390.878 148.343 394.633 152.807 395.437L243.296 407.766C257.719 409.107 265.587 396.778 265.85 388.205C213.652 386.864 184.28 386.059 142.313 383.386V383.377Z"
                fill="#9AB445"
              />
              <path
                d="M470.442 236.557L396.477 323.096L407.233 339.17L553.859 405.88L470.45 236.557H470.442Z"
                fill="url(#paint0_linear_6576_23660)"
                fillOpacity="0.5"
              />
              <path
                d="M75.1252 296.123L109.58 340.003L98.5945 361.445L56.1501 377.9L65.1384 337.011L75.1252 296.123Z"
                fill="url(#paint1_linear_6576_23660)"
                fillOpacity="0.5"
              />
              <path
                d="M397.002 322.29L388.346 323.899C396.739 327.654 407.496 338.096 408.809 339.705L408.021 331.4L397.002 322.29Z"
                fill="#FCD579"
              />
              <path
                d="M244.346 397.315C250.287 397.315 255.102 392.396 255.102 386.328C255.102 380.26 250.287 375.341 244.346 375.341C238.405 375.341 233.589 380.26 233.589 386.328C233.589 392.396 238.405 397.315 244.346 397.315Z"
                fill="#62657A"
              />
              <path d="M244.084 386.596V417.403" stroke="#484848" strokeWidth="2.68932" />
              <path d="M256.144 415.525H232.014V425.171H256.144V415.525Z" fill="#FCD579" />
              <path
                d="M242.806 291.215H186.398C183.299 291.215 180.805 293.996 181.707 297.026C188.498 319.832 220.225 311.688 228.032 305.296C232.259 301.827 238.228 298.707 242.482 297.697C244.145 297.304 245.65 295.864 245.65 294.121C245.65 292.512 244.372 291.207 242.797 291.207L242.806 291.215Z"
                fill="#FCD579"
              />
              <path
                d="M345.959 313.279L335.781 276.669C335.308 274.962 336.559 273.254 338.301 273.254H360.059C361.381 273.254 362.492 274.256 362.659 275.597L366.081 302.881C366.212 303.927 365.731 304.964 364.838 305.51L349.828 314.834C348.349 315.755 346.414 314.977 345.942 313.279H345.959Z"
                fill="#F0C254"
              />
              <path
                d="M363.953 271.386H335.106C333.221 271.386 331.693 272.945 331.693 274.868C331.693 276.791 333.221 278.35 335.106 278.35H363.953C365.839 278.35 367.367 276.791 367.367 274.868C367.367 272.945 365.839 271.386 363.953 271.386Z"
                fill="#FCD579"
              />
              <path
                d="M268.922 236.163L297.095 229.806C298.933 229.395 300.754 230.575 301.156 232.453C301.559 234.33 300.404 236.189 298.566 236.601L270.393 242.957C268.555 243.368 266.734 242.188 266.331 240.311C265.929 238.433 267.084 236.574 268.922 236.163Z"
                fill="#FCD579"
              />
              <g filter="url(#filter0_d_6576_23660)">
                <path
                  d="M224.56 307.285L218.981 283.765C218.21 280.516 215.007 278.521 211.827 279.308L211.819 279.31C208.638 280.097 206.685 283.369 207.455 286.618L213.034 310.137C213.805 313.386 217.008 315.382 220.188 314.594L220.197 314.592C223.377 313.805 225.331 310.534 224.56 307.285Z"
                  fill="#171759"
                />
                <path
                  d="M225.8 300.774L217.405 302.852C214.224 303.639 212.271 306.911 213.041 310.159L213.043 310.168C213.814 313.417 217.017 315.412 220.197 314.625L228.593 312.547C231.773 311.76 233.727 308.489 232.956 305.24L232.954 305.231C232.184 301.983 228.981 299.987 225.8 300.774Z"
                  fill="#171759"
                />
                <path
                  d="M220.216 291.706C250.823 291.706 275.635 266.361 275.635 235.098C275.635 203.834 250.823 178.49 220.216 178.49C189.609 178.49 164.797 203.834 164.797 235.098C164.797 266.361 189.609 291.706 220.216 291.706Z"
                  fill="#62657A"
                />
                <path
                  d="M225.353 266.746C241.986 266.746 255.47 252.973 255.47 235.984C255.47 218.994 241.986 205.221 225.353 205.221C208.72 205.221 195.237 218.994 195.237 235.984C195.237 252.973 208.72 266.746 225.353 266.746Z"
                  stroke="#D3D3DD"
                  strokeWidth="4.4822"
                  strokeMiterlimit="10"
                />
                <path
                  d="M226.255 259.478C238.953 259.478 249.247 248.963 249.247 235.993C249.247 223.022 238.953 212.507 226.255 212.507C213.557 212.507 203.263 223.022 203.263 235.993C203.263 248.963 213.557 259.478 226.255 259.478Z"
                  fill="#D3D3DD"
                />
                <path
                  opacity="0.2"
                  d="M275.635 235.098C275.635 266.361 250.822 291.706 220.216 291.706C204.575 291.706 190.458 285.09 180.384 274.443C188.944 279.968 199.079 283.168 209.949 283.168C240.556 283.168 265.359 257.823 265.359 226.56C265.359 211.273 259.434 197.398 249.781 187.215C265.316 197.237 275.635 214.938 275.635 235.098Z"
                  fill="#3D3D60"
                />
                <path
                  d="M270.357 236.786C269.516 262.524 250.095 283.452 225.353 286.018"
                  stroke="#4E4E68"
                  strokeWidth="4.4822"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M262.751 240.148C260.729 257.894 248.31 272.394 231.882 277.133"
                  stroke="#4E4E68"
                  strokeWidth="4.4822"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M170.065 233.406C170.906 207.668 190.327 186.74 215.069 184.174"
                  stroke="#4E4E68"
                  strokeWidth="4.4822"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M177.671 230.034C179.693 212.289 192.112 197.788 208.54 193.05"
                  stroke="#4E4E68"
                  strokeWidth="4.4822"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M218.623 235.545V233.256C218.623 231.049 216.871 229.26 214.71 229.26C212.55 229.26 210.798 231.049 210.798 233.256V235.545C210.798 237.752 212.55 239.541 214.71 239.541C216.871 239.541 218.623 237.752 218.623 235.545Z"
                  fill="#171759"
                />
                <path
                  d="M247.584 235.555V233.266C247.584 231.059 245.832 229.27 243.671 229.27C241.511 229.27 239.759 231.059 239.759 233.266V235.555C239.759 237.762 241.511 239.551 243.671 239.551C245.832 239.551 247.584 237.762 247.584 235.555Z"
                  fill="#171759"
                />
                <path
                  d="M236.004 239.542C236.004 243.377 232.959 246.497 229.204 246.497C225.449 246.497 222.403 243.377 222.403 239.542H236.013H236.004Z"
                  fill="white"
                  stroke="#171759"
                  strokeWidth="3.31682"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M273.972 217.683C273.815 221.143 272.064 250.225 250.569 262.973C243.313 267.282 236.443 268.158 233.528 268.498C219.411 270.152 202.091 265.503 190.52 251.646C178.451 237.19 178.941 220.267 179.16 216.28"
                  stroke="#201C3A"
                  strokeWidth="7.17151"
                  strokeMiterlimit="10"
                />
                <path
                  d="M273.675 227.796C265.36 225.713 255.89 223.942 245.405 222.986C222.317 220.876 202.476 223.451 187.615 226.75C187.615 226.75 181.059 228.958 166.767 227.796C165.9 227.724 164.465 227.509 163.345 226.428C162.469 225.578 161.918 224.416 161.918 223.129V215.619C161.918 213.054 164.097 210.953 166.767 210.953H273.684C276.344 210.953 278.532 213.054 278.532 215.619V223.129C278.532 225.695 276.353 227.796 273.684 227.796H273.675Z"
                  fill="#312A4C"
                />
                <path
                  d="M164.894 219.373C162.041 219.373 159.756 216.914 160.001 214.027C162.706 182.826 188.831 158 220.216 158C251.602 158 277.727 182.826 280.432 214.027C280.685 216.905 278.392 219.373 275.539 219.373H164.885H164.894Z"
                  fill="#FF525F"
                />
                <path
                  d="M241.35 262.369L225.313 263.532C223.828 263.64 222.709 264.957 222.815 266.474L223.145 271.227C223.251 272.744 224.54 273.886 226.025 273.778L242.062 272.616C243.547 272.508 244.666 271.191 244.56 269.674L244.23 264.921C244.125 263.404 242.835 262.262 241.35 262.369Z"
                  fill="#312A4C"
                />
              </g>
              <path
                d="M268.922 236.333L297.096 229.976C298.933 229.565 300.754 230.745 301.157 232.623C301.559 234.5 300.404 236.359 298.566 236.771L270.393 243.127C268.555 243.538 266.734 242.358 266.332 240.481C265.929 238.603 267.084 236.744 268.922 236.333Z"
                fill="#FCD579"
              />
              <path
                d="M286.313 245.335C291.495 245.335 295.695 241.044 295.695 235.751C295.695 230.458 291.495 226.167 286.313 226.167C281.131 226.167 276.931 230.458 276.931 235.751C276.931 241.044 281.131 245.335 286.313 245.335Z"
                fill="#171759"
              />
              <path
                d="M293.752 192.956L298.076 194.001C300.212 194.52 300.212 197.622 298.076 198.141L293.752 199.187C293.21 199.321 292.781 199.75 292.658 200.304L291.634 204.721C291.127 206.902 288.09 206.902 287.582 204.721L286.558 200.304C286.427 199.75 286.007 199.312 285.464 199.187L281.14 198.141C279.005 197.622 279.005 194.52 281.14 194.001L285.464 192.956C286.007 192.821 286.436 192.392 286.558 191.838L287.582 187.422C288.09 185.24 291.127 185.24 291.634 187.422L292.658 191.838C292.79 192.392 293.21 192.83 293.752 192.956Z"
                fill="#FFCD40"
              />
              <path
                d="M274.016 183.301L275.408 183.64C276.896 183.998 276.896 186.162 275.408 186.519L274.016 186.859C273.552 186.975 273.185 187.342 273.071 187.824L272.738 189.246C272.388 190.766 270.27 190.766 269.92 189.246L269.588 187.824C269.474 187.351 269.115 186.975 268.642 186.859L267.251 186.519C265.763 186.162 265.763 183.998 267.251 183.64L268.642 183.301C269.106 183.185 269.474 182.818 269.588 182.335L269.92 180.914C270.27 179.394 272.388 179.394 272.738 180.914L273.071 182.335C273.185 182.809 273.544 183.185 274.016 183.301Z"
                fill="#FFCD40"
              />
            </g>

            <rect
              x={(924 - currentTextbox.width) / 2}
              y="39"
              width={currentTextbox.width}
              height={currentTextbox.height}
              fill="white"
            />

            <foreignObject
              x={(924 - currentTextbox.width) / 2}
              y="39"
              width={currentTextbox.width}
              height={currentTextbox.height}
              fill="white"
              overflow="visible"
            >
              <div className={styles.textbox} style={{ width: currentTextbox.width }}>
                {textIndex !== 0 && (
                  <button id={styles.left_button} onClick={handlePreviousClick}>
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                      <path
                        d="M6 2L2 6L6 10"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                )}
                <p className={styles.textboxContent}>{currentTextbox.text}</p>
                {textIndex !== ANIMATION_LENGTH && (
                  <button
                    id={styles.right_button}
                    onClick={handleNextClick}
                    disabled={isTransitioning}
                  >
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                      <path
                        d="M2 2L6 6L2 10"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </foreignObject>
            <g
              filter="url(#filter2_i_6576_23660)"
              id={styles.pothole}
              className={styles.transition_element}
              style={{
                transform: `translateX(${currentAnimation.pothole_x}px)`,
              }}
            >
              <ellipse cx="681" cy="427.5" rx="48" ry="28.5" fill="#808080" />
            </g>

            <g
              id={styles.puddle}
              className={styles.transition_element}
              style={{
                transform: `translateX(${currentAnimation.puddle_x}px)`,
              }}
            >
              <image href="/module4/puddle.svg" x="633" y="386" />
            </g>

            <g
              id={styles.sand}
              className={styles.transition_element}
              style={{
                transform: `translateX(${currentAnimation.sand_x}px)`,
              }}
            >
              <image href="/module4/sand.svg" x="633" y="350" />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_6576_23660"
              x="157.971"
              y="158"
              width="124.492"
              height="160.822"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2.01247" />
              <feGaussianBlur stdDeviation="1.00624" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_6576_23660"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_6576_23660"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_6576_23660"
              x="613"
              y="63"
              width="42"
              height="42"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="5" />
              <feGaussianBlur stdDeviation="5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_6576_23660"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_6576_23660"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_i_6576_23660"
              x="633"
              y="399"
              width="96"
              height="63"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="6" />
              <feGaussianBlur stdDeviation="3.1" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_6576_23660" />
            </filter>
            <linearGradient
              id="paint0_linear_6576_23660"
              x1="362.589"
              y1="354.444"
              x2="489.632"
              y2="313.277"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FCD579" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_6576_23660"
              x1="143.468"
              y1="372.623"
              x2="64.8372"
              y2="338.198"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF525F" />
              <stop offset="1" stopColor="#FF525F" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_6576_23660">
              <rect width="924" height="490" rx="8" fill="white" />
            </clipPath>
            <clipPath id="clip1_6576_23660">
              <rect width="506" height="287" fill="white" transform="translate(48 158)" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </section>
  );
}
