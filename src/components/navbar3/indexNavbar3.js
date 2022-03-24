import React from 'react'
import {FaSearchengin} from 'react-icons/fa';
import {Nav, NavLink, NavMenu, 
    Bars, InputCity, InputButton,
     SearchContainer, H3} from './styledNavbar3.jsx'

export default function Navbar3({toggle}) {
  return (
    <>
       <Nav>
               
           <NavLink to='/'>

              <H3>Logo</H3>

         </NavLink>
         


         <SearchContainer>
           <InputCity type='text' placeholder="Buscar.."/>
           <InputButton>
              <FaSearchengin color="black" fontSize='2.2em'/>
           </InputButton> 
         </SearchContainer>

         <Bars onClick={toggle}/>

         <NavMenu>

             <NavLink to='/inicio' activeStyle>
                     
                     inicio

             </NavLink>


             <NavLink to='/servicios' activeStyle>
                     
                     servicios

             </NavLink>

             <NavLink to='/nosotros' activeStyle>
                     
                     nosotros

             </NavLink>


             <NavLink to='/contactos' activeStyle>
                     
                     contactos

             </NavLink>


         </NavMenu>

       </Nav>
    </>
  )
}
