import React from 'react';
import Footer from '../../components/Footer/Footer';
import './validadeCupom.css'

function ValidadeCupom() {
    return (
        <div className="container">
        <div className="content">
        <div className="box">
            <h1> VALIDAR MEU CUPOM</h1>
            <form className="form">
                <label>CÓDIGO DO CUPOM</label>
                <input type="text" />

                <button>VALIDAR CUPOM</button>
            </form>
            
        <br /><br /><br /><br />
        <p>SO RESULTADO DA VALIDAÇÃO APARECERÁ AQUI!</p>
        <br /><br /><br /><br />
        </div>
        <Footer />
        </div>
        </div>
    )
}

export default ValidadeCupom;