import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import {toast} from 'react-toastify';
import firebase from '../../services/firebaseConnection';
import './companies.css';


function Companies() {
    const [segment, setSegment] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        async function loadCompanies() {
            await firebase.firestore().collection('company')
            .get()
                .then((snapshot) => {
                    let list = [];
                    snapshot.forEach((doc) => {
                        list.push({
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
                        image: doc.data().avatarUrl
                        })
                    })

                    console.log(list);
                    setData(list);
                }).catch(error => {
                    console.log(error)
                    toast.error('Ops. Deu algo errado');
                })
        }

        async function loadCondidional() {
            await firebase.firestore().collection('company').where("segment", "==", segment)
            .get()
                .then((snapshot) => {
                    let list = [];
                    snapshot.forEach((doc) => {
                        list.push({
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
                        image: doc.data().avatarUrl
                        })
                    })

                    console.log(list);
                    setData(list);
                }).catch(error => {
                    console.log(error)
                    toast.error('Ops. Deu algo errado');
                })
        }

        if(segment === '') {
            loadCompanies();
        } else {
            loadCondidional();
        }


    }, [segment])


    function handleSelectSegment(e) {
        setSegment(e.target.value);
        console.log(segment);
    }


    return (
        <div className="container">
        <div className="content">
            <div className="companies">
                <h1>NOSSOS PARCEIROS</h1>
                <h3>VEJA ONDE USAR OS CUPONS E OS DESCONTOS OFERTADOS</h3>

                <div className="box">
            <form className="form">
                <label>Busque empresas por seguimento</label>
                <select value={segment} onChange={handleSelectSegment}>
                                <option value="">Todoas as empresas parceiras</option>
                                <option value="Hoteis e Pousadas">Hoteis e Pousadas</option>
                                <option value="Restairantes e Fast Foods">Restairantes e Fast Foods</option>
                                <option value="Padarias e Supermercados">Padarias e Supermercados</option>
                                <option value="Loja de roupas, sapatos e biquinis">Loja de roupas, sapatos e biquinis</option>
                                <option value="Loja de roupas infantís">Loja de roupas infantís</option>
                                <option value="Sorveteria e Açaí">Sorveteria e Açaí</option>
                                <option value="Informatica e Tecnologia">Informatica e Tecnologia</option>
                                <option value="Advocacia">Advocacia</option>
                                <option value="Contabilidade">Contabilidade</option>
                                <option value="Marketing Digital">Marketing Digital</option>
                            </select> <br />
            </form>           
        </div>


        { data.map(company => {
                return (
                    <div className="companies-list" key={company.fantasyName}>
                    <img src={company.image} alt="companie" />
                    <div className="text">
                        <h2>{company.fantasyName}</h2>
                        <h4>Rua {company.road}, {company.number}, {company.complement}</h4>
                        <h4>{company.district}, {company.city}, {company.uf}</h4>
                        <h4>({company.ddd}) {company.phone}</h4>
                        <h4>{company.email}</h4>
                        <h6>{company.segment}</h6>
                    </div>
                    <div className="percentage">
                        <h2>{company.percentage}%</h2>
                    </div>
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

export default Companies;