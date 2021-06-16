import React from "react";
import styled from "styled-components";
import logoSidebar from "assets/images/logo-sidebar.svg";
import { Link, NavLink } from "react-router-dom";
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

let SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 350px;
  height: 100vh;
  background-color: ${defaultTheme.palette.textDarkColor};
  overflow-y: scroll;
  padding-bottom: 50px;
`;
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

let SidebarLogout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  color: white;
  margin-bottom: 50px;
`;
let ShieldUserLineIcon = styled.div`
  font-size: 30px;
  margin-right: 10px;
`;
let SidebarLogoutTitles = styled.div``;
let SidebarLogoutTitle = styled.p`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: ${defaultTheme.palette.textLightColor};
`;
let SidebarLogoutTitleBtn = styled.a`
  text-decoration: none;
  color: white;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: ${defaultTheme.palette.textLightColor};
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <LogoSidebar as={Link} to="/">
        <img src={logoSidebar} alt="" />
      </LogoSidebar>

      <SidebarLogout>
        <ShieldUserLineIcon>
          <RiShieldUserLine />
        </ShieldUserLineIcon>
        <SidebarLogoutTitles>
          <SidebarLogoutTitle>Super Admin</SidebarLogoutTitle>
          <SidebarLogoutTitleBtn as={Link}>Log out</SidebarLogoutTitleBtn>
        </SidebarLogoutTitles>
      </SidebarLogout>

      {/*  */}

      <div className="SidebarLinks">
        <SidebarNavLink
          icon={<RiCustomerService2Line />}
          title="Agents"
          to="/Agents"
        />
        <SidebarNavLink icon={<BsPhone />} title="Phone" to="/Phone" />
        <SidebarNavLink icon={<FiPhoneCall />} title="Calls" to="/Calls" />
        <SidebarNavLink
          icon={<AiOutlineHistory />}
          title="Call History"
          to="/CallHistory"
        />
        <SidebarNavLink
          icon={<VscCallIncoming />}
          title="Call Backs"
          to="/CallBacks"
        />
        <SidebarNavLink
          icon={<RiCellphoneFill />}
          title="Reports"
          to="/Reports"
        />
      </div>

      {/*  */}
    </SidebarContainer>
  );
}

export default Sidebar;