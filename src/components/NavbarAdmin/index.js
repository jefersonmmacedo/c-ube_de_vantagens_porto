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
    <div className="container">
      <Nav>
        <NavLink to='/'>
          <img src={logoImg} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/admin/dashboard' activeStyle>
          Painel
          </NavLink>
          <NavLink to='/admin/companyadmin' activeStyle>
            Parceiros
          </NavLink>
          <NavLink to='/admin/cuponsadmin' activeStyle>
            Cupons
          </NavLink>
          <NavLink to='/admin/users' activeStyle>
            Usuários
          </NavLink>
          <NavBtn>
            <NavBtnLink to='/searchcupom'>X Sair</NavBtnLink>
         </NavBtn>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default Navbar;


    