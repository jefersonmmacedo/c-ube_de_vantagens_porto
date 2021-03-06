import React, { useContext, useState } from 'react';
import Footer from '../../../components/Footer/Footer';
import {toast} from'react-toastify';
import Navbar2 from '../../../components/NavbarAdmin/index';
import './signUp.css'
import { AuthContext } from '../../../contexts/Auth';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const {signUp} = useContext(AuthContext);


    function handleSignUp(e) {
        e.preventDefault()

        if(name !== '' && email !== '' && password !== '') {
            signUp(email, password, name);
        } else {
            toast.error('Falha no login')
        }
    }

    return (
        <div className="container">
             <Navbar2 />
        <div className="content">
        <div className="box">
            <h1> CADASTRO DE USUÁRIO</h1>
            <form className="form" onClick={handleSignUp}>
                <label>NOME</label>
                <input type="text" placeholder="Seu Nome" value={name} onChange={(e) => setName(e.target.value)}/>
                <label>E-MAIL</label>
                <input type="email"  placeholder="seuemail@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>SENHA</label>
                <input type="password"  placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)}/>

                <button type="submit">CRIAR CADASTRO</button>
            </form>
            
        </div>
        </div>
        <Footer />
        </div>
    )
}

export default SignUp;