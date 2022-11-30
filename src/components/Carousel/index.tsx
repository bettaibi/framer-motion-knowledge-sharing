import React, { useEffect, useRef, useState, useId } from "react";
import Stack from "components/styled/Stack.styled";
import RandomImage from "components/RandomImage";
import { motion } from "framer-motion";

// https://picsum.photos/500/350
export default function Carousel() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [leftBoundary, setLeftBoundary] = useState<number>(0);

  const id = useId();

  useEffect(() => {
    if (wrapperRef.current) {
      const computedLeftBoundary =
        wrapperRef.current.scrollWidth - wrapperRef.current.offsetWidth;
      setLeftBoundary(computedLeftBoundary);
    }
  }, []);

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
        >
          {/* Images */}

          {Array(20)
            .fill(1)
            .map((_, index) => (
              <RandomImage
                width={180}
                height={250}
                index={index}
                key={id + index}
                style={{ pointerEvents: "none" }}
                as={motion.div}
              />
            ))}
        </Stack>
      </Stack>
    </>
  );
}
