import { Box } from "components/styled/Box.styled";
import React from "react";

export default function MobileLayout() {
  return (
    <Box
      bg={{ color: "white" }}
      flex={1}
      width="100%"
      height="100%"
      radius="16px"
      position="relative"
      as="main"
    >
      Page content
    </Box>
  );
}
