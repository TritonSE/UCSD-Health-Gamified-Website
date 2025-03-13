"use client"
import { useEffect, useState } from 'react';
import Textbox from '../Textbox/Textbox';

interface CircleProps {
  number: number;
}

const Circle = ({ number }: CircleProps) => {
  const [activeTextbox, setActiveTextbox] = useState<number | null>(null);
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    if (activeTextbox !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [activeTextbox]);

  const handleClick = () => {
    setActivated(true);
    setActiveTextbox(number);
  };

  const handleCloseTextbox = () => {
    setActiveTextbox(null);
  };

  const textboxContent: { [key: number]: { header: string; text: string; width: number; height: number } } = {
    1: { header: 'Tire Pressure', text: 'Check tire pressure monthly...', width: 719, height: 577 },
    2: { header: 'Chain Lubrication', text: 'Lubricate the chain every 100 miles...', width: 719, height: 361 },
    3: { header: 'Brake Check', text: 'Ensure brakes are working before each ride.', width: 719, height: 397 },
    4: { header: 'Gear Maintenance', text: 'Keep gears clean and properly adjusted.', width: 719, height: 469 },
    5: { header: 'Frame Inspection', text: 'Regularly check for cracks or damage.', width: 719, height: 329 },
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
        onClick={handleClick}
      >
        {number}
      </div>

      {/* Popup */}
      {activeTextbox !== null && (
        <>
          {/* Fullscreen Overlay to Disable Page Interaction */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              zIndex: 999,
              pointerEvents: 'all',
            }}
            onClick={handleCloseTextbox}
          ></div>

          {/* Centered Popup */}
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Textbox
              header={textboxContent[activeTextbox].header}
              text={textboxContent[activeTextbox].text}
              width={textboxContent[activeTextbox].width}
              height={textboxContent[activeTextbox].height}
              onClose={handleCloseTextbox}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Circle;