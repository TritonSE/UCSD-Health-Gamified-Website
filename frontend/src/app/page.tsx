"use client";
//import { Link } from "react-router-dom";
import React from "react";
//import HelmetProvider from "react-helmet";
//import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateAccount from "./pages/createAccount";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/createaccount" element={<CreateAccount />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider> */}

      <CreateAccount />

      <div className={styles.page}>
        <h1> TSE x UCSD Health </h1>
        <p>
          {" "}
          Use this page for pages and testing components. REMOVE ALL CHANGES BEFORE SUBMITTING A
          PULL REQUEST.
        </p>
      </div>
    </>
  );
}
