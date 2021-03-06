import React, { useEffect, useState } from 'react';
import {toast} from 'react-toastify';
import firebase from '../../../services/firebaseConnection';
import Navbar2 from '../../../components/NavbarAdmin/index';
import './cuponsPageAdmin.css'
import { Link } from 'react-router-dom';

function CuponsPageAdmin() {
    const [cupons, setCupons] = useState([]);
    
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
             <Navbar2 />
        <div className="content">
        <div className="dashboard-data">
        <div className="data-cupons">
                <h3>ULTIMOS CUPONS GERADOS</h3>
               <br />
               <Link className="btn-header-2" to='/Admin/newcupom'>+ Gerar Novo Cupom</Link>
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