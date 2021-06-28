import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import defaultTheme from "theme/defaultTheme";
import { Box, Typography } from "@material-ui/core";

let SidebarLinkIcon = styled.div`
  font-size: 27px;
  width: 22px;
  height: 22px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
let SideBarLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: transparent;
  text-decoration: none;
  color: white;
  margin-bottom: 5px;

  &.SideBarLinkActive {
    background-color: ${defaultTheme.palette.bgLightColor};
    color: ${defaultTheme.palette.textDarkColor};
    font-weight: 600;
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
      >
        <SidebarLinkIcon>{icon}</SidebarLinkIcon>
        <Typography variant="h5">{title}</Typography>
      </Box>
    </SideBarLink>
  );
};

export default SidebarNavLink;
