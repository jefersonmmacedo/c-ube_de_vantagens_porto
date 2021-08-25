import React from 'react';
import Footer from '../../components/Footer/Footer';
import './searchCupom.css'

function SearchCupom() {
    return (
        <div className="container">
        <div className="content">
        <div className="box">
            <h1> VER MEUS CUPONS</h1>
            <form className="form">
                <label>CPF (Apenas números)</label>
                <input type="text" />

                <button>BUSCAR CUPONS</button>
            </form>
            
        <br /><br /><br /><br />
        <p>SEUS CUPONS APARECERAM AQUI!</p>
        <br /><br /><br /><br />
        </div>
        <Footer />
        </div>
        </div>
    )
}

export default SearchCupom;