import React, { useContext, useEffect, useState } from 'react';
import TopBar from '../../../components/TopBar/TopBar';
import {toast} from 'react-toastify';
import firebase from '../../../services/firebaseConnection';
import { AuthContext } from '../../../contexts/Auth';
import './cuponsPageAdmin.css'

function CuponsPageAdmin() {
    const [cupons, setCupons] = useState([]);
    const {user, signOut} = useContext(AuthContext);

    
    useEffect(() => {
        //CARREGANDO OS CUPONS
    async function loadCupons() {
        await firebase.firestore().collection('cupons')
        .get()
            .then((snapshot) => {
                let list = [];

                
                snapshot.forEach((doc) => {

                    const dateFormated = doc.data().date.toDate();
                    const newDateFormated = ((dateFormated.getDate() )) + "/" + ((dateFormated.getMonth() + 1)) + "/" + dateFormated.getFullYear();

                    list.push({
                        id: doc.id,
                        name:doc.data().name,
                        contract:doc.data().contract,
                        cpf:doc.data().cpf,
                        date: newDateFormated
                    })
                })
                setCupons(list);
            }).catch(error => {
                console.log(error)
                toast.error('Ops. Deu algo errado');
            })
    }

    loadCupons();
    }, [])


    return (
        <div className="container">
        <div className="content">
            <TopBar />
        <div className="dashboard-data">
        <div className="data-cupons">
                <h3>ULTIMOS CUPONS GERADOS</h3>
               <br />
               {
                   cupons.map((cupom) => {
                       return (
                           <div className="cupom-data">
                               <h3>{cupom.name}</h3>
                               <div className="cupom-infos">
                               <h5>Contrato: {cupom.contract}</h5>
                               <h5>CPF: {cupom.cpf}</h5>
                               <h5>Data: {cupom.date}</h5>
                               </div>
                               <h3>Cupom: {cupom.id}</h3>
                               <div className="buttons-cupom">
                                   <button>Editar</button>
                                   <button>Excluir</button>
                               </div>
                           </div>
                       )
                   })
               }
            </div>
        </div>
        </div>
        </div>
    )
}

export default CuponsPageAdmin;