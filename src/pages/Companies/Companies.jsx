import React from 'react';
import companiesImg from '../../assets/images/companie.jpg';
import Footer from '../../components/Footer/Footer';
import './companies.css'
function Companies () {
    return (
        <div className="container">
        <div className="content">
            <div className="companies">
                <h1>NOSSOS PARCEIROS</h1>
                <h3>VEJA ONDE USAR OS CUPONS E OS DESCONTOS OFERTADOS</h3>


        <div className="companies-list">
            <img src={companiesImg} alt="companies" />
            <div className="text">
                <h2>NOME DA EMPRESA</h2>
                <h3>ENDEREÇO DA EMPRESA</h3>
            </div>
            <div className="percentage">
                <h2>20%</h2>
            </div>
        </div>

        <div className="companies-list">
            <img src={companiesImg} alt="companies" />
            <div className="text">
                <h2>NOME DA EMPRESA</h2>
                <h3>ENDEREÇO DA EMPRESA</h3>
            </div>
            <div className="percentage">
                <h2>20%</h2>
            </div>
        </div>

        <div className="companies-list">
            <img src={companiesImg} alt="companies" />
            <div className="text">
                <h2>NOME DA EMPRESA</h2>
                <h3>ENDEREÇO DA EMPRESA</h3>
            </div>
            <div className="percentage">
                <h2>20%</h2>
            </div>
        </div>

        <div className="companies-list">
            <img src={companiesImg} alt="companies" />
            <div className="text">
                <h2>NOME DA EMPRESA</h2>
                <h3>ENDEREÇO DA EMPRESA</h3>
            </div>
            <div className="percentage">
                <h2>20%</h2>
            </div>
        </div>
            </div>
        <Footer />        
        </div>
        </div>
    )
}

export default Companies;