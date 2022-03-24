import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './styledSideBar.jsx'

export default function SideBar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
       <Icon onClick={toggle}>
           <CloseIcon/>
       </Icon>

       <SidebarWrapper>
         
         <SidebarMenu>
             <SidebarLink to='/inicio'>
                 inicio
             </SidebarLink>
              
             <SidebarLink to='/servicios'>
                 servicios
             </SidebarLink>

             <SidebarLink to='/Nosotros'>
                 Nosotros
             </SidebarLink>

             <SidebarLink to='/contactanos'>
                 contactanos
             </SidebarLink>

         </SidebarMenu>




       </SidebarWrapper>
    
    </SidebarContainer>
  );
};