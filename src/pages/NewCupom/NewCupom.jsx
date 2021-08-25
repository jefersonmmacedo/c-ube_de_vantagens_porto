import React from 'react';
import Footer from '../../components/Footer/Footer';
import './newCupom.css'

function newCupom() {
    return (
        <div className="container">
        <div className="content">
        <div className="box">
            <h1> GERAR NOVO CUPOM</h1>
            <form className="form">
                <label>Nº CONTRATO</label>
                <input type="text" />
                <label>NOME COMPLETO</label>
                <input type="text" />
                <label>CPF (Apenas números)</label>
                <input type="text" />

                <button>GERAR CUPOM</button>
            </form>
            
        </div>
        <Footer />
        </div>
        </div>
    )
}

export default newCupom;