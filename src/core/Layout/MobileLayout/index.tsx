import AsideForMobile from "components/AsideForMobile";
import { Box } from "components/styled/Box.styled";
import React from "react";

export default function MobileLayout() {
  return (
    <Box p={4} width="100%" height="100vh" position="relative" as="main">
      Page content
      <AsideForMobile />
    </Box>
  );
}
