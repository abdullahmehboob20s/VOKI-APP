import { Box } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import defaultTheme from "theme/defaultTheme";

let SidebarLinkIcon = styled.div`
  font-size: 27px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
let SideBarLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  background-color: transparent;
  text-decoration: none;
  color: white;
  /* border: 2px solid blue; */
  margin-bottom: 10px;

  &.SideBarLinkActive {
    background-color: ${defaultTheme.palette.bgLightColor};
    color: ${defaultTheme.palette.textDarkColor};
  }
`;
let SidebarLinkLabel = styled.p`
  font-weight: 600;
  font-size: 22px;
`;

function SidebarNavLink(props) {
  let { icon, to, title } = props;
  return (
    <SideBarLink as={NavLink} exact activeClassName="SideBarLinkActive" to={to}>
      <Box display=" flex" justifyContent="flex-start" width="70%">
        <SidebarLinkIcon>{icon}</SidebarLinkIcon>
        <SidebarLinkLabel>{title}</SidebarLinkLabel>
      </Box>
    </SideBarLink>
  );
}

export default SidebarNavLink;
