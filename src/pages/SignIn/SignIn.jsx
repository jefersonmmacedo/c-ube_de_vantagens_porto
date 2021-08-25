import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import './signIn.css'

function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div className="container">
        <div className="content">
        <div className="box">
            <h1> FAÇA LOGIN NO SISTEMA</h1>
            <form className="form">
                <label>E-MAIL</label>
                <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>SENHA</label>
                <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>

                <button>ENTRAR</button>
            </form>
            
        </div>
        <Footer />
        </div>
        </div>
    )
}

export default SignIn;