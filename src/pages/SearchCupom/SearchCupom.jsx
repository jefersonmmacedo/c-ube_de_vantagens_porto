import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import {toast} from 'react-toastify';
import firebase from '../../services/firebaseConnection';
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
                if(datDifference <= 30) {
                    disponible = 'Disponível'
                } else {
                    disponible = 'Expirado'
                }

               //console.log(doc.data().cpf) 
                list.push({
                    id:doc.id,
                    name:doc.data().name,
                    contract: doc.data().contract,
                    cpf: doc.data().cpf,
                    disponible,
                    newDateFormated: newDateFormated
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
        <div><p>SEUS CUPONS APARECERAM AQUI!</p></div>: 
        data.map(user => {
            return (
                <div>
                    <p>Contrato: {user.contract}</p>
                    <p>Nome: {user.name}</p>
                    <p>CPF: {user.cpf}</p>
                    <p>Cupom: {user.id}</p>
                    <p>Seu cupom está {user.disponible}</p>
                    <p>Data de início: {user.newDateFormated}</p>
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