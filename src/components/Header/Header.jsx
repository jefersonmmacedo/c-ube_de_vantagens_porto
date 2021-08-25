import {Link} from 'react-router-dom'
import React from 'react'
import imgHeader from '../../assets/images/imgHeader.png';
import imgParticipe from '../../assets/images/participe.svg';
import './header.css'


function Header() {
    return (
        <div className="header">
            <div className="header-img">
            <img src={imgHeader} alt="header" />
            </div>
            <div className="text">
            <img src={imgParticipe} alt="header" />
            <h2>ALUGUE UM VEÍCULO CONOSCO E TENHA DESCONTOS EM LOJAS, RESTAURANTES, HOTEIS E MAIS...</h2>
                <div className="buttons">
                    <Link className="btn-header"  to='/searchcupom'>VER MEUS CUPONS</Link>
                    <Link className="btn-header-2" to='/validatecupom'>VALIDAR CUPOM</Link>

                   <Link  to='/regulation'>VER REGULAMENTO COMPLETO</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;