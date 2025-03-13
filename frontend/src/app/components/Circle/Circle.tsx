"use client"
import { useEffect, useState } from 'react';

interface CircleProps {
  number: number;
  onCircleClick: () => void;
}

const Circle = ({ number, onCircleClick }: CircleProps) => {
  
  const [activated, setActivated] = useState(false);

 ;

  const handleClick = () => {
    setActivated(true);
  };


  return (
    <>
      {/* Clickable Circle */}
      <div
        style={{
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          backgroundColor: activated ? '#1C3A29' : '#909090',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '20px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onClick={() => {
          handleClick();
          onCircleClick();
        }}
      >
        {number}
      </div>
        </>
      )}

export default Circle;