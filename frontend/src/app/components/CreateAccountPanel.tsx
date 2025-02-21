"use client";
import {
  UserCredential,
  createUserWithEmailAndPassword,
  deleteUser,
  sendEmailVerification,
} from "firebase/auth";
import Image from "next/image";
import { useEffect, useState } from "react";

import { createUser } from "../api/user";
import { auth } from "../firebase-config.js";

import styles from "./CreateAccountPanel.module.css";
import { LoginButton } from "./LoginButton";
import { TextBox } from "./TextBox";

export type CreateAccountPanelProps = {
  setIsAccountCreated: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CreateAccountPanel({ setIsAccountCreated }: CreateAccountPanelProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
    otherError: "",
  });

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const firebaseAuth = (): Promise<UserCredential> => {
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          setErrors({
            firstNameError: "",
            lastNameError: "",
            emailError: "",
            passwordError: "",
            otherError: "",
          });

          resolve(userCredential);
        })
        .catch((error: unknown) => {
          const firebaseError = error as { code?: string; message: string };
          const errorCode = firebaseError.code ?? "unknown_error";
          const errorMessage = firebaseError.message;

          console.log(errorCode, errorMessage);

          setIsAccountCreated(false);

          if (errorCode === "auth/email-already-in-use") {
            setErrors((prev) => ({
              ...prev,
              ["otherError"]: "Email already in use!",
            }));
          }

          reject(new Error(errorCode));
        });
    });
  };

  const handleSubmit = () => {
    firebaseAuth()
      .then((userCredential) => {
        console.log("Firebase authentication successful:", userCredential.user);

        // MongoDB creation
        createUser({
          name: formData.firstName + " " + formData.lastName,
          email: formData.email,
          module: 1,
          firstLogin: true,
        })
          .then((result) => {
            if (result.success) {
              console.log("MongoDB user creation successful:", userCredential.user);

              sendEmailVerification(userCredential.user)
                .then(() => {
                  localStorage.setItem("emailForSignIn", formData.email);
                  localStorage.setItem("user", JSON.stringify(userCredential.user));
                })
                .catch((error: Error) => {
                  setIsAccountCreated(false);
                  console.error("Error sending verification email: ", error);
                });

              setIsAccountCreated(true);
            } else {
              setIsAccountCreated(false);

              deleteUser(userCredential.user)
                .then(() => {
                  setIsAccountCreated(false);
                  setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                  });
                })
                .catch((error: unknown) => {
                  console.error(error);
                });

              setErrors((prev) => ({
                ...prev,
                ["otherError"]: "Error creating account!",
              }));
            }
          })
          .catch((_) => {
            setIsAccountCreated(false);

            deleteUser(userCredential.user)
              .then(() => {
                setIsAccountCreated(false);
                setFormData({
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                });
              })
              .catch((error: unknown) => {
                console.error(error);
              });

            setErrors((prev) => ({
              ...prev,
              ["otherError"]: "Error creating account!",
            }));
          });
      })
      .catch((_) => {
        // setErrors((prev) => ({
        //   ...prev,
        //   ["otherError"]: "Error creating account!",
        // }));
      });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const trackField = (name: string, field: string) => {
    if (name === "" || name === null) {
      setErrors((prev) => ({
        ...prev,
        [field]: "This field is required.",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const trackEmail = (name: string) => {
    if (name === "" || name === null) {
      setErrors((prev) => ({
        ...prev,
        ["emailError"]: "This field is required.",
      }));
    } else if (!name.includes("@") || !name.split("@")[1].includes(".")) {
      setErrors((prev) => ({
        ...prev,
        ["emailError"]: "Please enter a valid email address.",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        ["emailError"]: "",
      }));
    }
  };

  const trackPassword = (password: string) => {
    if (password.length < 6) {
      setErrors((prev) => ({
        ...prev,
        ["passwordError"]: "Password must be at least six characters.",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        ["passwordError"]: "",
      }));
    }
  };

  const checkFormValidity = () => {
    const { firstName, lastName, email, password } = formData;
    const { firstNameError, lastNameError, emailError, passwordError } = errors;
    const isValid =
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      password.length >= 6 &&
      firstNameError === "" &&
      lastNameError === "" &&
      emailError === "" &&
      passwordError === "";
    setIsButtonEnabled(isValid);
  };

  useEffect(() => {
    checkFormValidity();
  }, [formData, errors]);

  return (
    <div className={styles.createAccountContainer}>
      <h1 className={styles.loginTitle}>Create an Account</h1>
      <div className={styles.inputContainer}>
        <TextBox
          label="First Name"
          type="text"
          placeholder="Jane"
          value={formData.firstName}
          onChange={(value) => {
            handleChange("firstName", value);
          }}
          onBlur={() => {
            trackField(formData.firstName, "firstNameError");
          }}
          error={errors.firstNameError}
        />
        <TextBox
          label="Last Name"
          type="text"
          placeholder="Doe"
          value={formData.lastName}
          onChange={(value) => {
            handleChange("lastName", value);
          }}
          onBlur={() => {
            trackField(formData.lastName, "lastNameError");
          }}
          error={errors.lastNameError}
        />
        <TextBox
          label="Email"
          type="text"
          placeholder="janedoe@gmail.com"
          value={formData.email}
          onChange={(value) => {
            handleChange("email", value);
          }}
          onBlur={() => {
            trackEmail(formData.email);
          }}
          error={errors.emailError}
        />
        <TextBox
          label="Password"
          type="password"
          placeholder="••••••"
          caption="Must be at least six characters"
          value={formData.password}
          onChange={(value) => {
            handleChange("password", value);
          }}
          onBlur={() => {
            trackPassword(formData.password);
          }}
          error={errors.passwordError}
        />
      </div>
      {errors.otherError && (
        <div className={styles.error}>
          <Image src="/red_exclamation.svg" alt="Warning!" width={18} height={18} />
          <p>{errors.otherError}</p>
        </div>
      )}
      <div>
        <LoginButton label="Sign Up" disabled={!isButtonEnabled} onClick={handleSubmit} />
        <p className={styles.signInLink}>
          Already have an account? <a href="/signin">Sign-in</a>
        </p>
      </div>
    </div>
  );
}
