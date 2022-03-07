import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle, setOpenTable }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            className="buttonNavbar"
            onClick={() => setOpenTable("standings")}
          >
            Liga CronBowl
          </SidebarLink>
          <SidebarLink
            className="buttonNavbar"
            onClick={() => setOpenTable("teams")}
          >
            Equipos
          </SidebarLink>
          <SidebarLink className="buttonNavbar">Ligs Anteriores</SidebarLink>
          <SidebarLink className="buttonNavbar">Estadisticas</SidebarLink>
          <SidebarLink className="buttonNavbar">Salon de la Fama</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
