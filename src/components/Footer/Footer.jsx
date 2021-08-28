import React from 'react';
import {Link} from 'react-router-dom';
import {FiPhoneCall, FiMapPin, FiMail} from 'react-icons/fi';
import logo2Img from '../../assets/images/logo2.svg';
import codingit from '../../assets/images/codingit.svg';
import './footer.css'

function Footer() {
    return (
        <div className="container">

        <div className="footer">
            <div className="infos">
            <div className="footer-1">
            <img src={logo2Img} alt="logo" />
            <p>MAIS BENEFÍCIOS PARA NOSSOS CLIENTES</p>
            </div>
            <div className="footer-2">
                <h3>NAVEGAÇÃO</h3>
                <Link to='/regulation'>REGULAMENTO</Link>
                <Link to='/companies'>ONDE USAR?</Link>
                <Link to='/partners'>SEJA UM PARCEIRO</Link>
                <Link to='/contact'>FALE CONOSCO</Link>
            </div>
            <div className="footer-3">
                <h3>CUPONS</h3>
                <Link className="btn-footer" to='/searchcupom'>VER MEUS CUPONS</Link>
                <Link className="btn-footer" to='/validatecupom'>VALIDAR CUPONS</Link>

            </div>
            <div className="footer-4">
            <h3>FALE CONOSCO</h3>
            <p>< FiPhoneCall /> 22 3031-4272</p>
                    <p>< FiMail /> reservas@portorentacar.com.br</p>
                    <p>< FiMapPin /> Shopping Ipanema Mall - Rua Raul Veiga,</p>
                    <p className="line">389 – Loja 28 – Centro, Cabo Frio – RJ</p>
            </div>
            </div>
            <div className="copy">
                <p>CLUBE DE VANTAGENS - PORTO RENT A CAR © 2021. TODOS OS DIREITOS RESERVADOS</p>
                <div className="img">
                    <p>FEITO POR:</p>
                    <img src={codingit} alt="codingit" />
                </div>
            </div>
        </div>

        </div>
    )
}

export default Footer;