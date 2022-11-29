import React from "react";
import { Box } from "components/styled/Box.styled";

export default function RandomImage({ width, height, ...extraStyles }: any) {
  return (
    <Box
      overflow="hidden"
      radius="16px"
      elevation={1}
      style={{ minWidth: width, ...extraStyles }}
    >
      <img src={`https://picsum.photos/${width}/${height}`} />
    </Box>
  );
}
