"use client";
import {
  UserCredential,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
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
  });

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const firebaseAuth = (): Promise<UserCredential> => {
    return new Promise((resolve, reject) => {
      if (
        errors.firstNameError ||
        errors.lastNameError ||
        errors.emailError ||
        errors.passwordError ||
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.password
      ) {
        // setError("Please fill out all fields appropriately.");
        alert("Please fill out all fields appropriately.");
        reject(new Error("Validation failed"));
        return;
      } else {
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
          .then((userCredential) => {
            const user = userCredential.user;
            setErrors({
              firstNameError: "",
              lastNameError: "",
              emailError: "",
              passwordError: "",
            });
            sendEmailVerification(user)
              .then(() => {
                localStorage.setItem("emailForSignIn", formData.email);
                localStorage.setItem("user", JSON.stringify(user));
                resolve(userCredential);
              })
              .catch((error: Error) => {
                setIsAccountCreated(false);
                console.error("Error sending verification email: ", error);
                reject(error);
              });
          })
          .catch((error: unknown) => {
            const firebaseError = error as { code?: string; message: string };
            const errorCode = firebaseError.code ?? "unknown_error";
            const errorMessage = firebaseError.message;

            console.log(errorCode, errorMessage);
            setIsAccountCreated(false);
            if (errorCode === "auth/email-already-in-use") {
              // setError("Email already in use!");
              alert("Email already in use!");
            }
            reject(new Error(errorCode));
          });
      }
    });
  };

  const handleSubmit = () => {
    firebaseAuth()
      .then((userCredential) => {
        console.log("Firebase authentication successful:", userCredential.user);

        // MongoDB creation
        createUser({
          name: formData.firstName + formData.lastName,
          email: formData.email,
        })
          .then((result) => {
            if (result.success) {
              console.log("MongoDB user creation successful:", userCredential.user);

              setFormData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
              });
              setIsAccountCreated(true);
            } else {
              alert(result.error);
            }
          })
          .catch((reason) => {
            setIsAccountCreated(false);
            alert(reason);
          });
      })
      .catch((error) => {
        console.error("Error during signup process:", error);
        setIsAccountCreated(false);
        alert("An error has occurred");
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
  }, [formData]);

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
      <div className={styles.createAccount}>
        <LoginButton label="Sign Up" disabled={!isButtonEnabled} onClick={handleSubmit} />
        <p className={styles.signInLink}>
          Already have an account? <a href="/signin">Sign-in</a>
        </p>
      </div>
    </div>
  );
}
