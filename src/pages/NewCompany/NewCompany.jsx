import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import './newCompany.css'

function NewCompany() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="container">
        <div className="content">
        <div className="box">
            <h1> CADASTRO DE PARCEIROS</h1>
            <form className="form">
                <label>NOME</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <label>E-MAIL</label>
                <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>SENHA</label>
                <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>

                <button type="submit">ENTRAR</button>
            </form>
            
        </div>
        <Footer />
        </div>
        </div>
    )
}

export default NewCompany;