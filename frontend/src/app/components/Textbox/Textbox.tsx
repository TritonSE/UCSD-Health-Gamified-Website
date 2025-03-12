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
        padding: '10px',
        borderRadius: '15px',
        position: 'relative',
        boxSizing: 'border-box',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '5px',
          right: '5px',
          background: 'none',
          border: 'none',
          fontSize: '16px',
          cursor: 'pointer',
          color: '#000',
        }}
      >
        ×
      </button>

      {/* Header */}
      <h3 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>{header}</h3>

      {/* Text content */}
      <p style={{ margin: '0', fontSize: '14px' }}>{text}</p>
    </div>
  );
};

export default Textbox;