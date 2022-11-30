import React from "react";
import Stack from "components/styled/Stack.styled";
import { Box } from "components/styled/Box.styled";
import Router from "Router";
import AsideContent from "components/AsideContent";

export default function DesktopLayout() {
  return (
    <Box className="gradient_bg" p={4}>
      <Stack gap={4} height="calc(100vh - 64px)">
        {/* Sidebar */}
        <Box
          height="100%"
          className="glass_blur_bg"
          as={"aside"}
          radius="16px"
          py={2}
        >
          <AsideContent />
        </Box>

        {/* Content */}
        <Box
          flex={1}
          bg={{ color: "white" }}
          radius="16px"
          as="main"
          height="100%"
          overflow="hidden"
        >
          <Router />
        </Box>
      </Stack>
    </Box>
  );
}
