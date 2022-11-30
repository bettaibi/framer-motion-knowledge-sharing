import React from "react";
import { Box } from "components/styled/Box.styled";
import AsideContent from "components/AsideContent";
import {
  animate,
  motion,
  PanInfo,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { themeColors } from "core/styles/themes";
import * as Styled from "./styled";

const DEFAULT_WIDTH = 192; // Wrapper width - handler width

export default function AsideForMobile() {
  const x = useMotionValue<number>(-DEFAULT_WIDTH);
  const backgroundColor = useTransform(
    x,
    [-DEFAULT_WIDTH, 0],
    [themeColors["primary"]["main"], "#ffffff99"]
  );
  const opacity = useTransform(x, [-DEFAULT_WIDTH, 0], [0, 1]);
  const zIndex = useTransform(x, [-DEFAULT_WIDTH, 0], [-2, 99]);

  const onPanHandler = (e: any, pointInfo: PanInfo) => {
    const offsetX = Math.round(pointInfo.offset.x);

    if (offsetX > 0) {
      const diff = offsetX - DEFAULT_WIDTH;

      // right boundary
      if (diff < 0) {
        x.set(diff);
      } else {
        x.set(0);
      }
    } else {
      // left boundary
      if (offsetX >= -DEFAULT_WIDTH) {
        x.set(offsetX);
      } else {
        x.set(-DEFAULT_WIDTH);
      }
    }
  };

  const onPanEndHandler = (e: any, pointInfo: PanInfo) => {
    const offsetX = pointInfo.offset.x;

    if (offsetX > 100) {
      animate(x, 0, { duration: 0.3 });
    } else {
      animate(x, -DEFAULT_WIDTH, { duration: 0.3 });
    }
  };

  const handleClose = () => {
    animate(x, -DEFAULT_WIDTH, { duration: 0.5 });
  };

  return (
    <>
      <Styled.Overlay
        onClick={handleClose}
        as={motion.div}
        style={{ opacity, zIndex }}
      />

      {/* Sidebar wrapper */}

      <Styled.Wrapper
        as={motion.div}
        style={{ x }}
        transition={{ type: "spring" }}
      >
        {/* Asidebar */}
        <Box
          height="100%"
          className="glass_blur_bg"
          as={"aside"}
          radius="16px"
          py={2}
        >
          <AsideContent />
        </Box>

        {/* Handler indicator */}
        <Styled.HandlerIndicator
          as={motion.div}
          style={{ backgroundColor }}
          whileTap={{ scale: 1.1, cursor: "grabbing" }}
          onPan={onPanHandler}
          onPanEnd={onPanEndHandler}
        />
      </Styled.Wrapper>
    </>
  );
}
