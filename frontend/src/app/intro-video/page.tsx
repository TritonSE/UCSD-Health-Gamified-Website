"use client";

import { useRouter } from "next/navigation";
import React, { CSSProperties, useEffect, useRef, useState } from "react";

import { put } from "../api/requests";
import ModuleGate from "../components/ModuleGate/ModuleGate";
import TypingAnimation from "../components/TypingAnimation/TypingAnimation";
import buttonStyles from "../components/VideoButton.module.css";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../firebase-config";

import styles from "./IntroVideo.module.css";

export default function IntroVideo() {
  const [textLoaded, isTextLoaded] = useState(false);
  const [startTyping, setStartTyping] = useState(false);
  const typeAnimationRef = useRef(null);
  const router = useRouter();
  const { currentUser } = useAuth();

  const handleSubmit = async (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) e.preventDefault();
    // Redirect to the video page
    if (textLoaded) {
      try {
        const token = await auth.currentUser?.getIdToken();
        const headers: Record<string, string> | undefined = token
          ? { Authorization: `Bearer ${token}` }
          : undefined;
        if (!currentUser) {
          throw new Error("User not found");
        }
        await put(`/api/user/update/${currentUser.email}`, { firstLogin: false }, headers);

        router.push("/video");
      } catch (error) {
        console.error("Error updating firstLogin:", error);
      }
    } else {
      // Text not loaded yet
    }
  };

  useEffect(() => {
    setStartTyping(true);
  }, []);

  return (
    <ModuleGate module={0}>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Welcome to the E-Bike Safety Course!</h1>
          <div className={styles.container}>
            {/* prettier-ignore */}
            <svg width="856" height="384" viewBox="0 0 856 384" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" d="M692.092 383.11C746.909 383.11 791.348 373.997 791.348 362.755C791.348 351.513 746.909 342.4 692.092 342.4C637.274 342.4 592.836 351.513 592.836 362.755C592.836 373.997 637.274 383.11 692.092 383.11Z" fill="#3D3D60" />
            <path d="M678.764 354.98V301.691C678.764 294.33 672.797 288.363 665.436 288.363H665.417C658.056 288.363 652.089 294.33 652.089 301.691V354.98C652.089 362.341 658.056 368.307 665.417 368.307H665.436C672.797 368.307 678.764 362.341 678.764 354.98Z" fill="#171759" />
            <path d="M646.006 368.308H665.436C672.797 368.308 678.764 362.341 678.764 354.981V354.961C678.764 347.601 672.797 341.634 665.436 341.634H646.006C638.646 341.634 632.679 347.601 632.679 354.961V354.981C632.679 362.341 638.646 368.308 646.006 368.308Z" fill="#171759" />
            <path d="M741.052 342.726L721.098 293.313C718.342 286.488 710.575 283.19 703.75 285.946L703.731 285.953C696.906 288.709 693.608 296.476 696.364 303.301L716.318 352.714C719.074 359.539 726.841 362.837 733.666 360.081L733.684 360.074C740.509 357.318 743.808 349.551 741.052 342.726Z" fill="#171759" />
            <path d="M715.747 367.272L733.763 359.996C740.588 357.24 743.887 349.473 741.131 342.648L741.123 342.63C738.367 335.805 730.6 332.506 723.775 335.263L705.759 342.538C698.934 345.294 695.635 353.061 698.392 359.886L698.399 359.904C701.155 366.729 708.922 370.028 715.747 367.272Z" fill="#171759" />
            <path d="M683.096 322.301C751.938 322.301 807.746 266.493 807.746 197.651C807.746 128.808 751.938 73 683.096 73C614.253 73 558.445 128.808 558.445 197.651C558.445 266.493 614.253 322.301 683.096 322.301Z" fill="#62657A" />
            <path d="M675.221 263.421C712.632 263.421 742.96 233.093 742.96 195.682C742.96 158.271 712.632 127.943 675.221 127.943C637.81 127.943 607.482 158.271 607.482 195.682C607.482 233.093 637.81 263.421 675.221 263.421Z" stroke="#D3D3DD" strokeWidth="9.84291" strokeMiterlimit="10" />
            <path d="M675.22 247.396C703.782 247.396 726.935 224.243 726.935 195.681C726.935 167.12 703.782 143.967 675.22 143.967C646.659 143.967 623.506 167.12 623.506 195.681C623.506 224.243 646.659 247.396 675.22 247.396Z" fill="#D3D3DD" />
            <path opacity="0.2" d="M807.747 197.65C807.747 266.491 751.937 322.301 683.096 322.301C647.917 322.301 616.164 307.733 593.506 284.287C612.759 296.453 635.555 303.501 660.005 303.501C728.846 303.501 784.635 247.691 784.635 178.85C784.635 145.187 771.308 114.635 749.595 92.2129C784.537 114.281 807.747 153.259 807.747 197.65Z" fill="#3D3D60" />
            <path d="M795.896 201.372C794.006 258.047 750.324 304.131 694.672 309.781" stroke="#4E4E68" strokeWidth="9.84291" strokeMiterlimit="10" strokeLinecap="round" />
            <path d="M778.789 208.774C774.242 247.851 746.308 279.781 709.357 290.215" stroke="#4E4E68" strokeWidth="9.84291" strokeMiterlimit="10" strokeLinecap="round" />
            <path d="M570.316 193.931C572.206 137.255 615.889 91.1708 671.541 85.521" stroke="#4E4E68" strokeWidth="9.84291" strokeMiterlimit="10" strokeLinecap="round" />
            <path d="M587.424 186.509C591.971 147.432 619.905 115.502 656.856 105.068" stroke="#4E4E68" strokeWidth="9.84291" strokeMiterlimit="10" strokeLinecap="round" />
            <path d="M635.16 215.23C646.978 215.23 656.559 205.649 656.559 193.831C656.559 182.013 646.978 172.433 635.16 172.433C623.342 172.433 613.762 182.013 613.762 193.831C613.762 205.649 623.342 215.23 635.16 215.23Z" stroke="#ED351D" strokeWidth="7.87432" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M704.1 215.23C715.918 215.23 725.498 205.649 725.498 193.831C725.498 182.013 715.918 172.433 704.1 172.433C692.282 172.433 682.701 182.013 682.701 193.831C682.701 205.649 692.282 215.23 704.1 215.23Z" stroke="#ED351D" strokeWidth="7.87432" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M656.559 193.831C658.921 192.689 663.39 190.878 669.295 190.819C675.555 190.74 680.319 192.67 682.721 193.831" stroke="#ED351D" strokeWidth="7.87432" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M746.774 253.098L755.115 264.944L833.342 209.864L825.001 198.017L746.774 253.098Z" fill="#FFBC00" />
            <path d="M738.45 241.244L746.791 253.09L825.018 198.01L816.676 186.163L738.45 241.244Z" fill="#FFD815" />
            <path d="M816.672 186.179L833.344 209.856L842.068 203.714L825.396 180.036L816.672 186.179Z" fill="#DBD9E2" />
            <path d="M842.078 203.712L825.407 180.035L832.859 174.787C836.432 172.271 841.37 173.128 843.886 176.702L851.445 187.438C853.961 191.011 853.104 195.948 849.531 198.465L842.078 203.712Z" fill="#FF558A" />
            <path d="M738.491 241.235L755.165 264.917L740.873 267.83L730.932 253.716L738.491 241.235Z" fill="#FFE7C5" />
            <path d="M730.931 253.716L740.872 267.831L727.663 270.508C724.671 271.118 722.368 267.85 723.962 265.252L730.931 253.716Z" fill="#171759" />
            <path d="M802.982 262.733C814.637 262.733 824.085 253.285 824.085 241.63C824.085 229.975 814.637 220.527 802.982 220.527C791.327 220.527 781.879 229.975 781.879 241.63C781.879 253.285 791.327 262.733 802.982 262.733Z" fill="#171759" />
            <path d="M645.871 199.796V194.756C645.871 189.896 641.931 185.957 637.072 185.957C632.212 185.957 628.272 189.896 628.272 194.756V199.796C628.272 204.656 632.212 208.595 637.072 208.595C641.931 208.595 645.871 204.656 645.871 199.796Z" fill="#171759" />
            <path d="M711.012 199.796V194.756C711.012 189.896 707.072 185.957 702.212 185.957C697.352 185.957 693.413 189.896 693.413 194.756V199.796C693.413 204.656 697.352 208.595 702.212 208.595C707.072 208.595 711.012 204.656 711.012 199.796Z" fill="#171759" />
            <path d="M655.715 210.446C656.896 217.041 662.664 222.061 669.633 222.061C676.602 222.061 682.369 217.041 683.551 210.446" stroke="#171759" strokeWidth="7.28375" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M637.01 311.887L575.314 323.994C572.558 324.526 569.704 322.793 568.916 320.136L546.514 243.322C545.727 240.644 547.341 238.046 550.097 237.495L611.792 225.388C614.548 224.856 617.403 226.589 618.19 229.246L640.593 306.06C641.38 308.738 639.766 311.336 637.01 311.887Z" fill="#C2E9F9" />
            <path d="M631.656 312.931L569.961 325.038C567.205 325.57 564.35 323.837 563.563 321.18L541.161 244.366C540.373 241.688 541.987 239.09 544.743 238.539L606.439 226.432C609.195 225.9 612.049 227.633 612.837 230.29L635.239 307.104C636.026 309.782 634.412 312.38 631.656 312.931Z" fill="#F3FDFF" />
            <path d="M633.901 314.781L568.092 327.695C565.336 328.226 562.481 326.494 561.694 323.836L539.291 247.022C538.504 244.345 540.118 241.747 542.874 241.195L608.684 228.281C611.44 227.75 614.294 229.482 615.082 232.14L637.484 308.954C638.272 311.631 636.657 314.23 633.901 314.781Z" fill="#3A6DED" />
            <path d="M630.81 315.393L565 328.307C562.244 328.838 559.389 327.106 558.602 324.448L536.2 247.634C535.412 244.957 537.026 242.358 539.782 241.807L605.592 228.893C608.348 228.362 611.203 230.094 611.99 232.752L634.392 309.566C635.18 312.243 633.566 314.841 630.81 315.393Z" fill="#5086FF" />
            <path d="M594.883 241.629L555.413 249.366C552.657 249.897 549.803 248.165 549.015 245.507L548.621 244.129C547.834 241.452 549.448 238.853 552.204 238.302L591.674 230.566C594.43 230.034 597.285 231.766 598.072 234.424L598.466 235.802C599.253 238.479 597.639 241.078 594.883 241.629Z" fill="#3A6DED" />
            <path d="M594.194 239.307L554.724 247.043C551.968 247.575 549.113 245.842 548.326 243.185L547.932 241.807C547.145 239.13 548.759 236.531 551.515 235.98L590.985 228.243C593.741 227.712 596.595 229.444 597.383 232.102L597.776 233.48C598.564 236.157 596.95 238.756 594.194 239.307Z" fill="#AAB0BA" />
            <rect width="502" height="311" rx="20" fill="#BBD567" />
            <path d="M605 215.554C544.616 215.554 504.502 180.277 493.214 168H453C480.43 202.687 565.069 218.973 605 215.554Z" fill="#BBD567" />
          </svg>
            <div className={styles.descriptionContainer}>
              <div className={styles.description}>
                <span ref={typeAnimationRef}></span>
              </div>
              <div className={styles.description}>
                <TypingAnimation
                  text="Over the past three years, we've seen a <b>rise in serious e-bike injuries</b> in San Diego County, including areas like North County and UCSD. These injuries can be <b>serious and life-changing</b>, so it's important to know how to stay safe while riding."
                  onFinishTyping={() => {
                    isTextLoaded(true);
                  }}
                  showCursor={false}
                  shouldStart={startTyping}
                />
              </div>
            </div>
            <button
              type="button"
              style={
                {
                  "--animation-play-state": startTyping ? "running" : "paused",
                  "--disabled-duration": "5s",
                } as CSSProperties
              }
              id={styles.video_intro_button}
              className={`${buttonStyles.start_button}  ${textLoaded ? buttonStyles.buttonFinal : buttonStyles.buttonInitial}`}
              onClick={(e) => {
                void handleSubmit(e);
              }}
            >
              <p className={buttonStyles.buttonText}>Let&apos;s get started!</p>
              {/* prettier-ignore */}
              <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.7071 12.7071C19.0976 12.3166 19.0976 11.6834 18.7071 11.2929L13.7071 6.29289C13.3166 5.90237 12.6834 5.90237 12.2929 6.29289C11.9024 6.68342 11.9024 7.31658 12.2929 7.70711L15.5858 11L6 11C5.44771 11 5 11.4477 5 12C5 12.5523 5.44771 13 6 13L15.5858 13L12.2929 16.2929C11.9024 16.6834 11.9024 17.3166 12.2929 17.7071C12.6834 18.0976 13.3166 18.0976 13.7071 17.7071L18.7071 12.7071Z" fill="white" />
            </svg>
            </button>
          </div>
        </div>
      </main>
    </ModuleGate>
  );
}
