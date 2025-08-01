import { useEffect, useMemo, useRef, useState } from "react";

import styles from "./TypingAnimation.module.css";

type TypingAnimationProps = {
  text: string;
  speed?: number; // ms between characters
  onFinishTyping?: () => void;
  showCursor?: boolean;
  shouldStart?: boolean;
};

const TypingAnimation = ({
  text = "Example Text",
  speed = 20,
  onFinishTyping,
  showCursor = true,
  shouldStart = true,
}: TypingAnimationProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  // RAF-specific refs
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const lastUpdateTimeRef = useRef<number>(0);

  const textSegments = useMemo(() => {
    const segments: { char: string; bold: boolean }[] = [];
    const parts = text.split(/(<b>.*?<\/b>)/g);

    parts.forEach((part) => {
      if (part.startsWith("<b>") && part.endsWith("</b>")) {
        // Extract text between <b> tags
        const boldText = part.slice(3, -4);
        for (const char of boldText) {
          segments.push({ char, bold: true });
        }
      } else {
        // Regular text
        for (const char of part) {
          segments.push({ char, bold: false });
        }
      }
    });

    return segments;
  }, [text]);

  const cleanup = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    startTimeRef.current = null;
    lastUpdateTimeRef.current = 0;
  };

  // RAF animation loop
  const animate = (currentTime: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = currentTime;
      lastUpdateTimeRef.current = currentTime;
    }

    const elapsed = currentTime - startTimeRef.current;
    const expectedIndex = Math.min(Math.floor(elapsed / speed), textSegments.length);

    if (expectedIndex > currentIndex) {
      setCurrentIndex(expectedIndex);
      lastUpdateTimeRef.current = currentTime;
    }

    if (expectedIndex < textSegments.length && isTyping) {
      rafRef.current = requestAnimationFrame(animate);
    } else if (expectedIndex >= textSegments.length && !hasFinished) {
      // Animation finished
      setIsTyping(false);
      setHasFinished(true);
      requestAnimationFrame(() => {
        onFinishTyping?.();
      });
    }
  };

  useEffect(() => {
    if (isTyping && !hasFinished && textSegments.length > 0) {
      rafRef.current = requestAnimationFrame(animate);
    } else {
      cleanup();
    }

    return cleanup;
  }, [isTyping, hasFinished, textSegments.length, speed]);

  const startTyping = () => {
    cleanup();
    setCurrentIndex(0);
    setIsTyping(true);
    setHasFinished(false);
  };

  useEffect(() => {
    if (shouldStart && !isTyping && !hasFinished) {
      startTyping();
    } else if (!shouldStart) {
      cleanup();
      setIsTyping(false);
    }
  }, [shouldStart, isTyping, hasFinished]);

  useEffect(() => {
    return cleanup;
  }, []);

  const visibleSegments = textSegments.slice(0, currentIndex);

  const renderedText = useMemo(() => {
    const elements: React.ReactNode[] = [];
    let normalText = "";
    let boldText = "";
    let key = 0;

    const flushNormal = () => {
      if (normalText) {
        elements.push(<span key={`normal-${key++}`}>{normalText}</span>);
        normalText = "";
      }
    };

    const flushBold = () => {
      if (boldText) {
        elements.push(<strong key={`bold-${key++}`}>{boldText}</strong>);
        boldText = "";
      }
    };

    visibleSegments.forEach((segment) => {
      if (segment.bold) {
        flushNormal();
        boldText += segment.char;
      } else {
        flushBold();
        normalText += segment.char;
      }
    });

    flushNormal();
    flushBold();

    return elements;
  }, [visibleSegments]);

  return (
    <div className={styles.container}>
      {renderedText}
      {showCursor && (
        <span className={styles.cursor} aria-hidden="true">
          |
        </span>
      )}
    </div>
  );
};

export default TypingAnimation;
