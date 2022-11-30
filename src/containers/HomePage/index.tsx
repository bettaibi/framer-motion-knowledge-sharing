import React from "react";
import { Box } from "components/styled/Box.styled";
import { Typography } from "components/styled/Typography.styled";
import Gallery from "components/Gallery";
import Carousel from "components/Carousel";

export default function HomePage() {
  return (
    <Box p={4} height="100%">
      <Typography variant="heading4" weight={600} as="h1">
        1. Stories
      </Typography>

      <Carousel />

      <Gallery />
    </Box>
  );
}
