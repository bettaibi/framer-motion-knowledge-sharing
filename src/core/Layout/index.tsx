import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

const MOBILE_MAX_WIDTH = 767;

export const Mobile = ({ children }: { children: JSX.Element }) => {
  const isMobile = useMediaQuery({ maxWidth: MOBILE_MAX_WIDTH });
  return isMobile ? children : null;
};

export const Desktop = ({ children }: { children: JSX.Element }) => {
  const isDesktop = useMediaQuery({ minWidth: MOBILE_MAX_WIDTH });
  return isDesktop ? children : null;
};

export default function Layout() {
  return (
    <React.Fragment>
      <Mobile>
        <MobileLayout />
      </Mobile>

      <Desktop>
        <DesktopLayout />
      </Desktop>
    </React.Fragment>
  );
}
