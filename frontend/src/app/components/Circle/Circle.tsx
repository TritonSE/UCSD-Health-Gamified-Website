"use client";
import React, { useState } from 'react';
import Textbox from '../Textbox/Textbox';

interface Circle {
  number: number;
}

const Circle = ({ number }: Circle) => {
  const [isClicked, setIsClicked] = useState(false);
  const [activeTextbox, setActiveTextbox] = useState<number | null>(null);

  const circleStyle = {
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    backgroundColor: isClicked ? '#1C3A29' : '#909090',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
    }
    setActiveTextbox(number);
  };

  const handleCloseTextbox = () => {
    setActiveTextbox(null);
  };

  const textboxContent: { [key: number]: { header: string; text: string; width:number;height:number } } = {
    1: { header: 'Popup 1', text: 'This is the content for Textbox 1.' ,width:719,height:577},
    2: { header: 'Popup 2', text: 'This is the content for Textbox 2.',width:719,height:361 },
    3: { header: 'Popup 3', text: 'This is the content for Textbox 3.',width:719,height:397 },
    4: { header: 'Popup 4', text: 'This is the content for Textbox 4.',width:719,height:469 },
    5: { header: 'Popup 5', text: 'This is the content for Textbox 5.' ,width:719,height:329},
  };

  return (
    <>
      <div style={circleStyle} onClick={handleClick}>
        {number}
      </div>

      {activeTextbox !== null && (
        <div
        >
          <Textbox
            header={textboxContent[activeTextbox].header}
            text={textboxContent[activeTextbox].text}
            width={textboxContent[activeTextbox].width}
            height={textboxContent[activeTextbox].height}
            onClose={handleCloseTextbox}
          />
        </div>
      )}
    </>
  );
};

export default Circle;