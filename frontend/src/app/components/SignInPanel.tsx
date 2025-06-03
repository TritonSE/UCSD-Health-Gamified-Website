"use client";
import { UserCredential, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { getUser, updateUser } from "../api/user";
import { auth } from "../firebase-config.js";

import { LoginButton } from "./LoginButton";
import styles from "./SignInPanel.module.css";
import { TextBox } from "./TextBox";

export default function SignInPanel() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [signInError, setSignInError] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const router = useRouter();

  const firebaseAuth = (): Promise<UserCredential> => {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, loginInfo.email, loginInfo.password)
        .then((userCredential) => {
          resolve(userCredential);
        })
        .catch((error: unknown) => {
          const firebaseError = error as { code?: string; message: string };
          const errorCode = firebaseError.code ?? "unknown_error";
          const errorMessage = firebaseError.message;
          console.error(errorCode, errorMessage);

          reject(new Error(errorCode));
        });
    });
  };

  const handleChange = (field: string, value: string) => {
    setLoginInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    firebaseAuth()
      .then((userCredential) => {
        const user = userCredential.user;
        if (!user.emailVerified) {
          setSignInError("Email is not verified!");
        } else {
          getUser(loginInfo.email)
            .then((result) => {
              if ("data" in result) {
                console.log("Firebase sign in successful");
                setSignInError("");

                if (result.data.firstLogin) {
                  // First time using logging in
                  updateUser({
                    ...result.data,
                    firstLogin: false,
                  })
                    .then((_) => {
                      // TODO: replace with intro video page
                      router.push("/intro-video");
                    })
                    .catch((error) => {
                      console.error("Error updating first login: ", error);
                    });
                } else {
                  // TODO: replace with homepage
                  router.push("/");
                }
              }
            })
            .catch((_) => {
              setSignInError("Error signing in.");
            });
        }
      })
      .catch((error) => {
        console.error("Error during the sign-in process:", error);
        setSignInError("Incorrect email or password.");
      });
  };

  const sendEmail = () => {
    const user = auth.currentUser;
    if (user) {
      sendEmailVerification(user)
        .then(() => {
          console.log("Email sent.");
          setSignInError("Verification email has been sent!");
        })
        .catch((error: unknown) => {
          console.error("Error sending verification email: ", error);

          const firebaseError = error as { code?: string; message: string };
          const errorCode = firebaseError.code ?? "unknown_error";

          if (errorCode === "auth/too-many-requests") {
            setSignInError("Too many email verification requests. Please try again later.");
          }
        });
    } else {
      console.error("No user found.");
    }
  };

  const trackEmail = (name: string) => {
    if (!name.includes("@") || !name.split("@")[1].includes(".")) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const checkFormValidity = () => {
    const { email, password } = loginInfo;
    const isValid = email !== "" && password !== "" && emailError === "";
    setIsButtonEnabled(isValid);
  };

  useEffect(() => {
    checkFormValidity();
  }, [loginInfo, emailError]);

  return (
    <div className={styles.rightSideContainer}>
      <h1 className={styles.loginTitle}>Sign-In</h1>
      <div className={styles.createAccount}>
        <TextBox
          label="Email"
          type="text"
          placeholder="name@gmail.com"
          value={loginInfo.email}
          onChange={(value) => {
            handleChange("email", value);
          }}
          onBlur={() => {
            trackEmail(loginInfo.email);
          }}
          error={emailError}
        />
      </div>
      <div>
        <TextBox
          label="Password"
          type="password"
          placeholder="••••••"
          value={loginInfo.password}
          onChange={(value) => {
            handleChange("password", value);
          }}
        />
        <a className={styles.forgotPassword} href="/forgotpassword">
          Forgot password?
        </a>
      </div>
      <br />
      <div>
        {signInError && (
          <div className={styles.error}>
            <Image src="/red_exclamation.svg" alt="Warning!" width={18} height={18} />
            <p>
              {signInError}{" "}
              {signInError === "Email is not verified!" && (
                <a href="#" onClick={sendEmail}>
                  <u>Click to send</u>
                </a>
              )}
              {signInError === "Verification email has been sent!" && (
                <a href="#" onClick={sendEmail}>
                  <u>Click to resend</u>
                </a>
              )}
            </p>
          </div>
        )}
      </div>
      <div className={styles.createAccount}>
        <LoginButton label="Sign in" disabled={!isButtonEnabled} onClick={handleSubmit} />
        <p className={styles.signInLink}>
          Don&apos;t have an account?{" "}
          <a className={styles.underlined} href="/signup">
            Sign-up
          </a>
        </p>
      </div>
    </div>
  );
}
