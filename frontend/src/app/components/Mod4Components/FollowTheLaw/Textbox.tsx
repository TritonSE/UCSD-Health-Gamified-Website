"use client";

import React from "react";

type TextboxProps = {
  text: string;
  width: number;
  height: number;
  onClose: () => void;
};

const Textbox: React.FC<TextboxProps> = ({ text, width, height, onClose }) => {
  return (
    <div
      style={{
        backgroundColor: "#FAFFEA",
        width: `${width}px`,
        height: `${height}px`,
        padding: "15px",
        borderRadius: "15px",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "auto",
        zIndex: 100,
      }}
    >
      {text.split("\n").map((paragraph, index) => (
        <p
          key={`paragraph-${index}`}
          style={{
            fontSize: "14px",
            maxWidth: "100%",
            textAlign: "left",
            fontFamily: "DM Sans",
          }}
        >
          {paragraph.trim()}
        </p>
      ))}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "none",
          border: "none",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        ×
      </button>
    </div>
  );
};

export default Textbox;