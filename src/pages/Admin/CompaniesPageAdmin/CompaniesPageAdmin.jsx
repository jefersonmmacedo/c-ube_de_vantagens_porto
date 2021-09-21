import React, { useEffect, useState } from 'react';
import {toast} from 'react-toastify';
import firebase from '../../../services/firebaseConnection';
import Navbar2 from '../../../components/NavbarAdmin/index';
import './companiesPageAdmin.css';
import { Link } from 'react-router-dom';

function CompanyPageAdmin() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        async function loadCompanies() {
            await firebase.firestore().collection('company')
            .get()
                .then((snapshot) => {
                    let data = [];
                    snapshot.forEach((doc) => {
                        data.push({
                        fantasyName:doc.data().fantasyName,
                        road:doc.data().road,
                        number:doc.data().number,
                        complement:doc.data().complement,
                        reference:doc.data().reference,
                        district:doc.data().district,
                        city:doc.data().city,
                        uf:doc.data().uf,
                        code:doc.data().code,
                        ddd:doc.data().ddd,
                        phone:doc.data().phone,
                        email:doc.data().email,
                        segment:doc.data().segment,
                        percentage:doc.data().percentage,
                        image: doc.data().avatarUrl,
                        })
                    })
                    setData(data);
                }).catch(error => {
                    console.log(error)
                    toast.error('Ops. Deu algo errado');
                })
        }

        loadCompanies();
    }, [])


    return (
        <div className="container">
            <Navbar2 />
        <div className="content">
        <div className="dashboard-data">
                        <div className="data-company">
            <h3>PARCEIROS CADASTRADOS</h3>
           <br />
           <Link className="btn-header-2" to='/Admin/newcompany'>+ Cadastrar Novo Parceiro</Link>
           <br />
           {
                   data.map((company) => {
                       return (
                            <div className="company-data">
                                <h2>{company.fantasyName}</h2>
                               <div className="company-infos">
                               <h4>Endereço: {company.road}, {company.number}, {company.complement}, </h4>
                               <h4>{company.district} - {company.city} - {company.uf} | {company.reference}</h4>
                               </div>
                               <h5>{company.segment}</h5>
                               <div className="buttons-company">
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

export default CompanyPageAdmin;