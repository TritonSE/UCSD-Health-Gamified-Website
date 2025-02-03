"use client";
import { useEffect, useState } from "react";

import { createUser } from "../api/user";

import styles from "./CreateAccountPanel.module.css";
import { LoginButton } from "./LoginButton";
import { TextBox } from "./TextBox";

export default function CreateAccountPanel() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    createUser({
      name: formData.firstName + formData.lastName,
      email: formData.email,
    })
      .then((result) => {
        if (result.success) {
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          });
        } else {
          alert(result.error);
        }
      })
      .catch((reason) => {
        alert(reason);
      });
  };

  const checkFormValidity = () => {
    const { firstName, lastName, email, password } = formData;
    const isValid = firstName !== "" && lastName !== "" && email !== "" && password.length >= 6;
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
        />
        <TextBox
          label="Last Name"
          type="text"
          placeholder="Doe"
          value={formData.lastName}
          onChange={(value) => {
            handleChange("lastName", value);
          }}
        />
        <TextBox
          label="Email"
          type="text"
          placeholder="janedoe@gmail.com"
          value={formData.email}
          onChange={(value) => {
            handleChange("email", value);
          }}
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
        />
      </div>
      <div className={styles.createAccount}>
        <LoginButton label="Sign Up" disabled={isButtonEnabled} onClick={handleSubmit} />
        <p className={styles.signInLink}>
          Already have an account? <a href="/signin">Sign-in</a>
        </p>
      </div>
    </div>
  );
}
