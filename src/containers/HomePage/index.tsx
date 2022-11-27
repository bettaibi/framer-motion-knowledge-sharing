import React from "react";
import { Box } from "components/styled/Box.styled";
import { Typography } from "components/styled/Typography.styled";

export default function HomePage() {
  return (
    <Box p={4}>
      <Typography variant="heading3" weight={600} as="h1">
        1. Carousel
      </Typography>
    </Box>
  );
}
