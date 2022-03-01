import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle, openClose }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={openClose}>Liga CronBowl</SidebarLink>
          <SidebarLink>Equipos</SidebarLink>
          <SidebarLink>Ligs Anteriores</SidebarLink>
          <SidebarLink>Estadisticas</SidebarLink>
          <SidebarLink>Salon de la Fama</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
