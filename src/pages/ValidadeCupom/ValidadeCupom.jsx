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
        const [actualDate, setActualDate] = useState('')

        // function handlePasteCode(e) {
        //     const data = window.clipboard
        //     const paste = document.execCommand("paste");
        //     console.log(data)
            
        // }
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
                            const dateFormated = date.toDate();
                            const newDateFormated = ((dateFormated.getDate() )) + "/" + ((dateFormated.getMonth() + 1)) + "/" + dateFormated.getFullYear();
                            setActualDate(newDateFormated);
                            const dateActual = new Date();
                             const timeDifference = Math.abs(dateActual.getTime() - dateFormated.getTime());
                            const datDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

                            if(datDifference <= 30) {
                                setDisponible('Disponível')
                            } else {
                                setDisponible('Expirado')
                            }

                            toast.success('Cupom validado com sucesso!');
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
                {/* <button className="btn" type="button" onClick={handlePasteCode}>COLAR CÓDIGO</button> */}
            </form>
            
       {data.length === 0 ? 
       <div className="text"> <h3>SEU CUPOM APARECERÁ AQUI!</h3></div> :
       <div className={disponible === "Disponível" ? "verde" : "vermelho" }>
            <div className="data">
                        <div className="infos">
                        <p><b>Contrato:</b>{contract} - {disponible}</p>
                        <p><b>CPF:</b> {cpf}</p>
                        <p><b>Data de início:</b> {actualDate}</p>
                        </div>
                        <div className="name">
                        <p><b>Nome:</b> {name}</p>
                        </div>
                        <h2>{id}</h2>
                        <b> Seu cupom está: {disponible} </b>
                    </div>        
        </div>}
        </div> 
        </div>
        <Footer />
        </div>
    )
}

export default ValidadeCupom;