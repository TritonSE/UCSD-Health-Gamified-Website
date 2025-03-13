"use client";

import React from 'react';

interface TextboxProps {
  header: string;
  text: string;
  width: number;
  height: number;
  onClose: () => void;
}

const Textbox: React.FC<TextboxProps> = ({ header, text, width, height, onClose }) => {
  return (
    <div
      style={{
        backgroundColor: '#BBD567',
        width: `${width}px`,
        height: `${height}px`,
        padding: '30px',
        borderRadius: '15px',
        position: 'relative',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow: 'auto',
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Improved shadow
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "15px",
          right: "15px",
          background: "none",
          border: "none",
          fontSize: "22px",
          cursor: "pointer",
          color: "#000",
        }}
      >
        ✖
      </button>

      {/* Header */}
      <h2 style={{ fontSize: "32px", fontWeight: "bold", textAlign: "center", marginBottom: "15px",fontFamily:"Rammetto One" }}>
        {header}
      </h2>

      {/* Text */}
      <p style={{ fontSize: "16px", lineHeight: "1.5", maxWidth: "90%" }}>
        {text}
      </p>
    </div>
  );
};

export default Textbox;