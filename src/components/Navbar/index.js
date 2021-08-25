import React from 'react';
import logoImg from '../../assets/images/logo.svg'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={logoImg} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/regulation' activeStyle>
          Regulamento
          </NavLink>
          <NavLink to='/companies' activeStyle>
            Onde Usar?
          </NavLink>
          <NavLink to='/partners' activeStyle>
            Seja um parceiro
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Fale Conosco
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/searchcupom'>VER MEUS CUPONS</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
