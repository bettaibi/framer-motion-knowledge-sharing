import React, { useEffect, useRef, useState, useId } from "react";
import Stack from "components/styled/Stack.styled";
import RandomImage from "components/RandomImage";
import { motion } from "framer-motion";

// https://picsum.photos/500/350
export default function Carousel() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [leftBoundary, setLeftBoundary] = useState<number>(0);
  const [x, setX] = useState<number>(0);

  const id = useId();

  useEffect(() => {
    if (wrapperRef.current) {
      const computedLeftBoundary =
        wrapperRef.current.scrollWidth - wrapperRef.current.offsetWidth;
      setLeftBoundary(computedLeftBoundary);
    }
  }, []);

  const animateToNextImage = () => {
    const val = x - 500;
    if (Math.abs(val) < leftBoundary) {
      setX(val);
    }
  };

  return (
    // Carousel Wrapper
    <>
      <Stack
        ref={wrapperRef}
        overflow="hidden"
        as={motion.div}
        style={{ cursor: "grab" }}
        whileTap={{ cursor: "grabbing" }}
      >
        {/* Draggable Zone */}
        <Stack
          gap={2}
          as={motion.div}
          drag="x"
          dragConstraints={{ left: -leftBoundary, right: 0 }}
          animate={{ x }}
          style={{ x }}
        >
          {/* Images */}

          {Array(7)
            .fill(1)
            .map((_, index) => (
              <RandomImage
                width={500}
                height={350}
                key={id + index}
                pointerEvents="none"
              />
            ))}
        </Stack>
      </Stack>

      <button onClick={animateToNextImage}>Next Image</button>
    </>
  );
}
