"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

type TextboxProps = {
  header: string;
  text: string;
  width: number;
  height: number;
  onClose: () => void;
};

const Textbox: React.FC<TextboxProps> = ({ header, text, width, height, onClose }) => {
  const subtitles = [
    "PUMP IT UP!",
    "HOW TO CHECK",
    "LUBRICATE YOUR CHAIN",
    "PAY ATTENTION TO RATTLES, CREAKS AND SQUEAKS",
    "A CLEAN BIKE IS A SAFER BIKE",
    "INSPECT YOUR BRAKES",
    "MORE ABOUT BRAKES",
    "CHECK YOUR LIGHTS",
  ];

  const subtitleRegex = new RegExp(`(${subtitles.join("|")})`, "i");
  const sections = text.split(subtitleRegex);
  const renderText = () => {
    const elements: JSX.Element[] = [];
    let isSubheader = false;

    sections.forEach((section, index) => {
      const isSubtitle = subtitles.some(
        (subtitle) => subtitle.toLowerCase() === section.trim().toLowerCase()
      );

      if (isSubtitle) {
        elements.push(
          <h3
            key={`subheader-${index}`}
            style={{
              fontSize: "24px",
              fontWeight: "700",
              textAlign: "center",
              fontFamily:"DM Sans",
            }}
          >
            {section.trim()}
          </h3>
        );
        isSubheader = true;
      } else if (section.trim()) {
        const words = section.split(" ");
        const styledWords = words.map((word, wordIndex) => {
  
          const isDash = word === "–"; 
          return (
            <span
              key={`word-${index}-${wordIndex}`}
            >
              {word}
              {wordIndex < words.length - 1 && !isDash ? " " : ""}
            </span>
          );
        });

        elements.push(
          <p
            key={`paragraph-${index}`}
            style={{
              fontSize: "18px",
              maxWidth: "90%",
              textAlign: "center",
              margin: isSubheader ? "0 0 15px 0" : "15px 0",
              fontFamily:"DM Sans",
              lineHeight:"24px"
            }}
          >
            {styledWords}
          </p>
        );
        isSubheader = false;
      }
    });

    return elements;
  };

  return (
    <Dialog.Root open={true} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.5)",
            animation: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
        <Dialog.Content
          style={{
            backgroundColor: "#BBD567",
            width: `${width}px`,
            height: `${height}px`,
            padding: "30px",
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
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            animation: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
            letterSpacing:0.02
          }}
          onInteractOutside={onClose}
          onEscapeKeyDown={onClose}
        >
          <Dialog.Title asChild>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "15px",
                fontFamily: "Rammetto One",
              }}
            >
              {header}
            </h2>
          </Dialog.Title>

          <Dialog.Close asChild>
            <button
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
          </Dialog.Close>

          {renderText()}
        </Dialog.Content>
      </Dialog.Portal>

      <style jsx global>{`
        @keyframes overlayShow {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes contentShow {
          from {
            opacity: 0;
            transform: translate(-50%, -48%) scale(0.96);
          }
          to {
            opacity: 1;
            transform: "translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </Dialog.Root>
  );
};

export default Textbox;