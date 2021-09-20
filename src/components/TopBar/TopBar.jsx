import React from 'react';
import {Link} from 'react-router-dom';
import './topBar.css';


function TopBar() {
    return (
        <div className="top-bar">
                <Link to="/Admin/dashboard">Painel</Link>
                <Link to="#">|</Link>
                <Link to="/Admin/companyadmin">Parceiros</Link>
                <Link to="#">|</Link>
                <Link to="/Admin/newcompany">Cadastrar novo parceiro</Link>
                <Link to="#">|</Link>
                <Link to="/Admin/cuponsadmin">Cupons</Link>
                <Link to="#">|</Link>
                <Link to="/Admin/newcupom">Cadastrar novo cupom</Link>
                <Link to="#">|</Link>
                <Link to="/Admin/users">Usuários</Link>
                <Link to="#">|</Link>
                <Link to="/Admin/signup">Cadastrar novo usuário</Link>
        </div>
    )
}

export default TopBar;