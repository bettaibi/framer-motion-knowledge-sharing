import React from "react";
import { Box } from "components/styled/Box.styled";
import { Typography } from "components/styled/Typography.styled";
import Gallery from "components/Gallery";
import Carousel from "components/Carousel";
import { motion } from "framer-motion";

const routeAnimationVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
};
export default function HomePage() {
  return (
    <Box
      p={4}
      height="100%"
      as={motion.div}
      variants={routeAnimationVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5, type: "ease" }}
    >
      <Typography variant="heading4" weight={600} as="h1">
        1. Stories
      </Typography>

      <Carousel />

      <Gallery />
    </Box>
  );
}
