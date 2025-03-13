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
        padding: '20px',
        borderRadius: '15px',
        position: 'relative',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        overflow: 'auto',
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'none',
          border: 'none',
          fontSize: '16px',
          cursor: 'pointer',
          color: '#000',
        }}
      >
        X
      </button>

      {/* Header */}
      <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', fontWeight: 'bold' }}>{header}</h3>

      {/* Text content */}
      <p
        style={{
          margin: '0',
          fontSize: '14px',
          whiteSpace: 'pre-wrap',
          overflowY: 'auto',
          flex: 1,
          width: '100%',
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default Textbox;