import React from "react";
import AsideForMobile from "components/AsideForMobile";
import { Box } from "components/styled/Box.styled";
import Router from "Router";

export default function MobileLayout() {
  return (
    <>
      <Box width="100%" height="100vh" as="main">
        <Router />
      </Box>

      <AsideForMobile />
    </>
  );
}
