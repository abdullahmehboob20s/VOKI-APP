import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import defaultTheme from "theme/defaultTheme";
import { Box, Typography } from "@material-ui/core";

let SidebarLinkIcon = styled.div`
  font-size: 27px;
  width: 50px;
  margin-right: 10px;
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
  margin-bottom: 10px;

  &.SideBarLinkActive {
    background-color: ${defaultTheme.palette.bgLightColor};
    color: ${defaultTheme.palette.textDarkColor};
  }
`;

const SidebarNavLink = (props) => {
  let { icon, to, title } = props;
  return (
    <SideBarLink as={NavLink} exact activeClassName="SideBarLinkActive" to={to}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        width="70%"
        // border="2px solid red"
      >
        <SidebarLinkIcon>{icon}</SidebarLinkIcon>
        <Typography variant="h5">{title}</Typography>
      </Box>
    </SideBarLink>
  );
};

export default SidebarNavLink;
