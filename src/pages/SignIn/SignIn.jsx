import React, { useContext, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import { AuthContext } from '../../contexts/Auth';
import {toast} from'react-toastify';
import './signIn.css'

function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signIn, loadingAuth} = useContext(AuthContext)

    function handleLogin(e) {
        e.preventDefault()

        if(email !== '' && password !== '') {
            signIn(email, password)
        } else {
            toast.error('Falha no login')
        }
    }
    return (
        <div className="container">
        <div className="content">
        <div className="box">
            <h1> FAÇA LOGIN NO SISTEMA</h1>
            <form className="form" onClick={handleLogin}>
                <label>E-MAIL</label>
                <input type="email" placeholder="seuemail@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>SENHA</label>
                <input type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)}/>

                <button>ENTRAR</button>
            </form>
            
        </div>
        </div>
        <Footer />
        </div>
    )
}

export default SignIn;