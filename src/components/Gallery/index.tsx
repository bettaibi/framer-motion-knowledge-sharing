import React, { useId, useState, useEffect } from "react";
import Stack from "components/styled/Stack.styled";
import { Typography } from "components/styled/Typography.styled";
import { Box } from "components/styled/Box.styled";
import { motion } from "framer-motion";

import * as Styled from "./styled";

const images = [15, 5, 18, 10, 25];

export default function Gallery() {
  const id = useId();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex < images.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else {
        setActiveIndex(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <>
      <Stack py={2} justifyContent="space-between" alignItems="center">
        <Typography variant="heading4" weight={600} as="h1" mt={2}>
          2. Gallery
        </Typography>
        {/* Indicators */}
        <Stack gap={1} alignItems="center" justifyContent="center">
          {Array(images.length)
            .fill(1)
            .map((_, index) => (
              <React.Fragment key={id + index}>
                {index === activeIndex ? (
                  <Styled.dot
                    as={motion.div}
                    transition={{ duration: 0.5 }}
                    layoutId="active_dot"
                    active={true}
                    onClick={() => setActiveIndex(index)}
                  />
                ) : (
                  <Styled.dot
                    active={false}
                    onClick={() => setActiveIndex(index)}
                  />
                )}
              </React.Fragment>
            ))}
        </Stack>
      </Stack>

      {/* Gallery Images */}
      <Styled.Grid as={motion.div} transition={{ duration: 0.5 }} layout>
        {Array(images[activeIndex])
          .fill(1)
          .map((_, index: number) => (
            <Box
              key={id + index}
              width="120px"
              height="120px"
              overflow="hidden"
              radius="16px"
              elevation={1}
              bg={{ color: "gray", ingredient: "200" }}
              as={motion.div}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          ))}
      </Styled.Grid>
    </>
  );
}
