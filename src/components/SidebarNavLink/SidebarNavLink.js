import React from "react";
import { NavLink } from "react-router-dom";
import "./SidebarNavLink.css";

function SidebarNavLink(props) {
  let { icon, to, title } = props;
  return (
    <NavLink
      exact
      activeClassName="SideBarLinkActive"
      className="SideBarLink"
      to={to}
    >
      <div className="SideBarLinkWrapper">
        <div className="SidebarLinkIcon">
          {/* <RiCustomerService2Line /> */}
          {icon}
        </div>
        <p className="SidebarLinkLabel">{title}</p>
      </div>
    </NavLink>
  );
}

export default SidebarNavLink;
