import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import {toast} from 'react-toastify';
import firebase from '../../services/firebaseConnection';
import {FiCopy} from 'react-icons/fi'
import './searchCupom.css'

function SearchCupom() {

        const [cpf, setCpf] = useState('');
        const [data, setData] = useState([]);
        const [verification, setVerification] = useState('');

async function handleSearchCupons(e) {
    e.preventDefault();
    await firebase.firestore().collection("cupons").where("cpf", "==", cpf.toString())
    .get()
        .then((snapshot) => {
           let list = []
            snapshot.forEach((doc) => {
                const dateFormated = doc.data().date.toDate();
                const newDateFormated = ((dateFormated.getDate() )) + "/" + ((dateFormated.getMonth() + 1)) + "/" + dateFormated.getFullYear(); ;
                //console.log(newDateFormated)
                const newDate = doc.data().date.toDate()
                const dateActual = new Date();
                 const timeDifference = Math.abs(dateActual.getTime() - newDate.getTime());
                const datDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
                let disponible;
                let css;
                if(datDifference <= 30) {
                    disponible = 'Disponível'
                    css = 'verde'
                } else {
                    disponible = 'Expirado'
                    css = 'vermelho'
                }

               //console.log(doc.data().cpf) 
                list.push({
                    id:doc.id,
                    name:doc.data().name,
                    contract: doc.data().contract,
                    cpf: doc.data().cpf,
                    disponible,
                    newDateFormated: newDateFormated,
                    css: css,
            })
            })
            console.log(list)
            setData(list)
            setVerification('1')
        }).catch(error => {
                            console.log(error)
                            toast.error('Ops. Deu algo errado');
                        })
}


function handleCopyCode(code) {
    navigator.clipboard.writeText(code);
    navigator.clipboard.readText().then((code)=> {
        toast.success('Código de cupom copiado: ' + code);
    });
}
    
    return (
        <div className="container">
        <div className="content">
        <div className="box">
            <br/> <br/> <br/> <br/>
            <h1> VER MEUS CUPONS</h1>
            <form className="form">
                <label>CPF (Apenas números)</label>
                <input type="text" value={cpf} onChange={e => setCpf(e.target.value) }/>

                <button type="submit" onClick={handleSearchCupons} >BUSCAR CUPONS</button>
            </form>
            
        {verification.length === 0? 
        <div className="text-info"><p>VOCÊ VERÁ SEUS CUPONS AQUI!</p></div>: 
        data.map(user => {
            return (
                <div className={user.css}>
                    <div className="data">
                        <div className="infos">
                        <p><b>Contrato:</b> {user.contract}</p>
                        <p><b>CPF:</b> {user.cpf}</p>
                        <p><b>Data de início:</b> {user.newDateFormated}</p>
                        </div>
                        <div className="name">
                        <p><b>Nome:</b> {user.name}</p>
                        </div>
                    <h2>{user.id}</h2>
                    <p><b>Seu cupom está: {user.disponible}</b></p>
                    </div>
                        <button type="button" onClick={() => handleCopyCode(user.id)}><FiCopy size={40}/> COPIAR CUPOM</button>
                </div>
            )
        })
        
        }
        
        
        </div>
        </div>
        <Footer />
        </div>
    )
}

export default SearchCupom;
