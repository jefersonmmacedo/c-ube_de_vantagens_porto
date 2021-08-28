import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import {toast} from 'react-toastify';
import firebase from '../../services/firebaseConnection';
import './validadeCupom.css';


function ValidadeCupom() {
        const [name, setName] = useState('');
        const [contract, setContract] = useState('');
        const [cpf, setCpf] = useState('');
        const [id, setId] = useState('');
        const [search, setSearch] = useState('');
        const [data, setData]  = useState('');
        const [disponible, setDisponible] = useState('');


        async function handleSearchCupom(e) {
            e.preventDefault();
            await firebase.firestore().collection('cupons')
                .doc(search.toString())
                    .get()
                        .then((snapshot) => {
                            setName(snapshot.data().name)
                            setCpf(snapshot.data().cpf)
                            setContract(snapshot.data().contract)
                            setId(snapshot.id);
                            setData('1');
 
                            const date = snapshot.data().date;
                            const dateFormated = date.toDate()
                            const dateActual = new Date();
                             const timeDifference = Math.abs(dateActual.getTime() - dateFormated.getTime());
                            const datDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

                            if(datDifference <= 30) {
                                setDisponible('Disponível')
                            } else {
                                setDisponible('Expirado')
                            }

                            toast.success('Busca realizada com sucesso!');
                        }).catch(error => {
                            console.log(error)
                            toast.error('Ops. Deu algo errado');
                        })

        }

    return (
        <div className="container">
        <div className="content">
        <div className="box">
            <h1> VALIDAR MEU CUPOM</h1>
            <form className="form" >
                <label>CÓDIGO DO CUPOM</label>
                <input type="text" value={search} onChange={e => setSearch(e.target.value)}/>

                <button className="btn" type="submit" onClick={handleSearchCupom}>VALIDAR CUPOM</button>
            </form>
            
       {data.length === 0 ? 
       <div className="text"> <h3>SEU CUPOM APARECERÁ AQUI!</h3></div> :
       <div className={disponible}>
            <div className="contract">
           <p>Contrato: {contract}</p>
            </div>
            <div className="data">
           <p>Nome: {name}</p>
           <p>CPF: {cpf}</p>
            </div>
            <div className="cupom">
           <p><h4>{id}</h4></p>
           <p>Cupom {disponible}</p>
            </div>
        </div>}
        </div> 
        </div>
        <Footer />
        </div>
    )
}

export default ValidadeCupom;