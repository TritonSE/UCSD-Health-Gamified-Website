"use client";
import { onAuthStateChanged } from "firebase/auth";
import { toPng } from "html-to-image";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { getUser } from "../api/user";
import Certificate from "../components/Certificate/Certificate";
import ModuleGate from "../components/ModuleGate/ModuleGate";
import Sidebar from "../components/Sidebar/Sidebar";
import { auth } from "../firebase-config.js";
import { showErrorToast } from "../utils/toastUtils";

import styles from "./CertificatePage.module.css";

export default function CertificatePage() {
  const certificateRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState("");
  const [certificateReady, setCertificateReady] = useState(false);
  const [isVerifying, setIsVerifying] = useState(true);

  const handleDownloadPDF = () => {
    if (!certificateReady || !name || !certificateRef.current) {
      showErrorToast();
      return;
    }

    toPng(certificateRef.current, { cacheBust: true })
      .then((dataUrl: string) => {
        const link = document.createElement("a");
        link.download = "certificate.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err: unknown) => {
        if (process.env.NODE_ENV !== "production") {
          console.error(err);
        }
        showErrorToast();
      });
  };

  const handlePrint = () => {
    if (!certificateReady || !name) {
      showErrorToast();
      return;
    }
    window.print();
  };

  useEffect(() => {
    const getName = onAuthStateChanged(auth, (user) => {
      if (user?.email) {
        setIsVerifying(true);
        setCertificateReady(false);

        getUser(user.email)
          .then((result) => {
            if (result.success && result.data.name && result.data.module >= 10) {
              setName(result.data.name);
              setCertificateReady(true);
            } else {
              setCertificateReady(false);
            }
          })
          .catch((err) => {
            if (process.env.NODE_ENV !== "production") {
              console.error("Error fetching user from MongoDB:", err);
            }
            showErrorToast();
            setCertificateReady(false);
          })
          .finally(() => {
            setIsVerifying(false);
          });
      } else {
        setIsVerifying(false);
        setCertificateReady(false);
      }
    });

    return () => {
      getName();
    };
  }, []);

  return (
    <ModuleGate module={10}>
      <main className={styles.main}>
        <div className={styles.sidebar}>
          <Sidebar currentlyOn={9} />
        </div>
        <div className={styles.content}>
          {(isVerifying || !certificateReady) && (
            <div
              style={{
                backgroundColor: "white",
                height: "100vh",
                width: "100%",
              }}
            ></div>
          )}

          {!isVerifying && certificateReady && (
            <div className={styles.congratsStarsWrapper}>
              <div className={styles.congratsWrapper}>
                <div className={styles.row}>
                  <Image
                    src="/certificate/star1.svg"
                    alt="Star"
                    width={35}
                    height={35}
                    className={styles.star1}
                  />

                  <p className={styles.congrats}>
                    Congratulations! You&apos;ve officially completed the E Bike safety course!
                  </p>

                  <Image
                    src="/certificate/star2.svg"
                    alt="Star"
                    width={32}
                    height={32}
                    className={styles.star2}
                  />

                  <Image
                    src="/certificate/star3.svg"
                    alt="Star"
                    width={50}
                    height={50}
                    className={styles.star3}
                  />
                </div>

                <div className={styles.certificateWrapper}>
                  <div className={styles.certificate}>
                    <Certificate name={name} certificateRef={certificateRef} />
                  </div>

                  <div className={styles.icons}>
                    <button
                      className={styles.button}
                      onClick={handlePrint}
                      disabled={!certificateReady}
                    >
                      <Image src="/certificate/print.svg" alt="Print" width={24} height={24} />
                    </button>

                    <button
                      className={styles.button}
                      onClick={handleDownloadPDF}
                      disabled={!certificateReady}
                    >
                      <Image src="/certificate/download.svg" alt="Save" width={24} height={24} />
                    </button>
                  </div>
                </div>

                <p className={styles.printInstruction}>
                  Be sure to print and save this certificate for school purposes.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </ModuleGate>
  );
}
