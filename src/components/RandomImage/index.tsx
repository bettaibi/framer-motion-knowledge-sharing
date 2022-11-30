import React from "react";
import { Box } from "components/styled/Box.styled";
import { motion } from "framer-motion";

export default function RandomImage({
  width,
  height,
  index,
  style,
  ...extraProps
}: any) {
  return (
    <Box
      overflow="hidden"
      radius="16px"
      elevation={1}
      bg={{ color: "gray", ingredient: "200" }}
      style={{ minWidth: width, height, ...style }}
      {...extraProps}
    >
      <img
        src={`https://picsum.photos/${width}/${height}?random=${index}`}
        style={{ objectFit: "cover" }}
        alt={`random-${index}`}
      />
    </Box>
  );
}
