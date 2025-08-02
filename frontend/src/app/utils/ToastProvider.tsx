"use client";

import { ToastBar, Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      containerStyle={{
        position: "fixed",
        top: "10px",
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      {(t) => (
        <ToastBar
          toast={t}
          style={{
            ...t.style,
            margin: "0 auto",
            boxShadow: "none",
            backgroundColor: "#FAFFEA",
            borderRadius: "16px",
            maxWidth: "55ch",
            border: "1px solid #1c3a29",
          }}
        />
      )}
    </Toaster>
  );
}
