import React, { useId } from "react";
import Stack from "components/styled/Stack.styled";
import { navigations } from "core/navigations";
import { NavLink } from "react-router-dom";
import * as Styled from "./styled";
import { BoxArrowInRight } from "react-bootstrap-icons";

export default function AsideContent() {
  const id = useId();

  return (
    <Stack
      as={Styled.Asidebar}
      direction="column"
      alignItems="center"
      height="100%"
      pb={2}
    >
      <Stack direction="column" gap={2} as="ul" alignItems="center" flex={1}>
        {navigations.map((item, index) => (
          <Stack
            direction="column"
            gap={1}
            key={id + index}
            as="li"
            alignItems="center"
          >
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? "icon active" : "icon"
              }
              to={item.path}
            >
              {item.icon}
            </NavLink>
            <span>{item.title}</span>
          </Stack>
        ))}
      </Stack>

      {/* Signout button */}
      <Stack as="li" alignItems="center" direction="column" key={id} gap={1}>
        <NavLink className="icon" to="/signout">
          <BoxArrowInRight />
        </NavLink>
        <span>Sign out</span>
      </Stack>
    </Stack>
  );
}
