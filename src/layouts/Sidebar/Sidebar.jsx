import React from "react";
import styled from "styled-components";
import logoSidebar from "assets/images/logo-sidebar.svg";
import { Link } from "react-router-dom";
import SidebarNavLink from "components/SidebarNavLink/SidebarNavLink";
import {
  RiShieldUserLine,
  RiCustomerService2Line,
  RiCellphoneFill,
} from "react-icons/ri";
import { BsPhone } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineHistory } from "react-icons/ai";
import { VscCallIncoming } from "react-icons/vsc";
import defaultTheme from "theme/defaultTheme";
import { Box, Typography } from "@material-ui/core";

let LogoSidebar = styled.a`
  width: 100%;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  img {
    width: 180px;
    cursor: pointer;
  }
`;
let SidebarLogoutTitleBtn = styled.a`
  text-decoration: none;
  color: white;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: ${defaultTheme.palette.textLightColor};
`;

const Sidebar = () => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="350px"
      height="100vh"
      bgcolor={defaultTheme.palette.textDarkColor}
      overflow="hidden scroll"
      pb="50px"
    >
      <LogoSidebar as={Link} to="/">
        <img src={logoSidebar} alt="" />
      </LogoSidebar>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100px"
        color="white"
        marginBottom="50px"
      >
        <Box fontSize="27px" width="50px">
          <RiShieldUserLine />
        </Box>
        <Box>
          <Box mb="5px">
            <Typography
              variant="h4"
              color={defaultTheme.palette.textLightColor}
            >
              Super Admin
            </Typography>
          </Box>
          <SidebarLogoutTitleBtn as={Link} to="/">
            Log out
          </SidebarLogoutTitleBtn>
        </Box>
      </Box>

      <Box>
        <SidebarNavLink
          icon={<RiCustomerService2Line />}
          title="Agents"
          to="/Agents"
        />
        <SidebarNavLink icon={<BsPhone />} title="Phone" to="/agents/Phone" />
        <SidebarNavLink
          icon={<FiPhoneCall />}
          title="Calls"
          to="/agents/Calls"
        />
        <SidebarNavLink
          icon={<AiOutlineHistory />}
          title="Call History"
          to="/agents/CallHistory"
        />
        <SidebarNavLink
          icon={<VscCallIncoming />}
          title="Call Backs"
          to="/agents/CallBacks"
        />
        <SidebarNavLink
          icon={<RiCellphoneFill />}
          title="Reports"
          to="/agents/Reports"
        />
      </Box>
    </Box>
  );
};

export default Sidebar;
