"use client";
import { onAuthStateChanged } from "firebase/auth";
import html2canvas from "html2canvas";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { getUser } from "../api/user";
import Certificate from "../components/Certificate/Certificate";
import Sidebar from "../components/HomePage/Sidebar/Sidebar";
import { auth } from "../firebase-config.js";

import styles from "./CertificatePage.module.css";

export default function CertificatePage() {
  const certificateRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState("");

  const handleDownloadPDF = () => {
    if (!certificateRef.current) return;

    html2canvas(certificateRef.current)
      .then((canvas) => {
        const dataURL = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "certificate.png";
        link.click();
      })
      .catch((error) => {
        console.error("Error saving certificate as image:", error);
      });
  };

  useEffect(() => {
    const getName = onAuthStateChanged(auth, (user) => {
      if (user?.email) {
        console.log("Logged in as:", user.email);
        getUser(user.email)
          .then((result) => {
            if (result.success) {
              setName(result.data.name);
            } else {
              console.error("No user data found");
            }
          })
          .catch((err) => {
            console.error("Error fetching user from MongoDB:", err);
          });
      } else {
        console.log("User is not logged in.");
      }
    });

    return () => {
      getName();
    };
  }, []);

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          <p className={styles.congrats}>
            Congratulations! You’ve officially completed the E-Bike safety course!
          </p>

          <div ref={certificateRef} className={styles.certificate}>
            <Certificate name={name} />
          </div>

          <div className={styles.icons}>
            <button
              className={styles.button}
              onClick={() => {
                window.print();
              }}
            >
              <Image
                src="/certificate/print.svg"
                alt="Print"
                width={73}
                height={27}
                className={styles.signature}
              />
            </button>

            <button className={styles.button} onClick={handleDownloadPDF}>
              <Image
                src="/certificate/save.svg"
                alt="Save"
                width={73}
                height={27}
                className={styles.signature}
              />
            </button>
          </div>

          <p className={styles.printInstruction}>
            Be sure to print this certificate out and show it to the school for a parking permit.
          </p>
        </div>
      </div>
    </main>
  );
}
