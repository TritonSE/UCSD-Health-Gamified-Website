"use client";

import { auth } from "../firebase-config.js";

import { applyActionCode } from "firebase/auth";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import styles from "./Auth.module.css";
import WelcomePanel from "../components/WelcomePanel";

export default function Auth() {
    const searchParams = useSearchParams();
    const [titleMessage, setTitleMessage] = useState("Redirecting...");
    const [message, setMessage] = useState("Please wait a moment...");
 
    useEffect(() => {
        const mode = searchParams.get("mode");
        const oobCode = searchParams.get("oobCode");

        switch (mode) {
            case 'resetPassword':
                window.location.href = "/resetpassword";
                break;
            case 'verifyEmail':
                setTitleMessage("Validating Email...");
                setMessage("");
                applyActionCode(auth, oobCode as string)
                .then(() => {
                    console.log("email verified!");
                    window.location.href = "/emailverified";
                })
                .catch((error) => {
                    alert(error);
                    setTitleMessage("Error validating email");
                    setMessage("Please try again.");
                })
                break;
            default:
                setTitleMessage("Error authenticating");
                setMessage("");
        }
    }, [searchParams]);

    return (
        <main className={styles.container}>
            <section className={styles.leftSide}>
                <WelcomePanel />
            </section>
            <section className={styles.rightSide}>
                <div className={styles.title}>
                    <h1>{titleMessage}</h1>
                    <p className={styles.text}>
                        {message}
                    </p>
                </div>
            </section>
        </main>
    );
}