import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import {toast} from 'react-toastify';
import firebase from '../../services/firebaseConnection'
import './newCompany.css'

function NewCompany() {
    const [cnpj, setCpnj] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [fantasyName, setFantasyName] = useState('');
    const [road, setRoad] = useState('');
    const [number, setNumber] = useState('');
    const [complement, setComplement] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const [code, setCode] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [percentage, setPercentage] = useState('');

    async function handleAddClient(e) {
        e.preventDefault()
        
        if(cnpj !== '' &&
        companyName !== '' &&
        fantasyName !== '' &&
        road !== '' &&
        number !== '' &&
        complement !== '' &&
        district !== '' &&
        city !== '' &&
        uf !== '' &&
        code !== '' &&
        percentage !== '' &&
        email !== '' &&
        phone !== '') {
        await firebase.firestore().collection('company')
        .add({
            cnpj:cnpj,
        companyName:companyName,
        fantasyName:fantasyName,
        road: road,
        number:number,
        complement: complement,
        district:district,
        city:city,
        uf:uf,
        code:code,
        email:email,
        phone:phone,
        percentage:percentage,

        }).then(() => {
            setCpnj('');
            setCompanyName('');
            setFantasyName('');
            setRoad('');
            setNumber('');
            setComplement(';')
            setDistrict('');
            setCity('');
            setUf('');
            setCode('');
            setEmail('');
            setPhone('');
            setPercentage('');

            toast.success('Novo Cliente cadastrado com sucesso!')
        }).catch(error => {
            console.log(error)
            toast.error('Ops. Deu algo errado')
        })
        
       } else {
        toast.error('Preencha todos os campos corretamente')
       }
    }




    return (
        <div className="container">
        <div className="content">
        <div className="box">
            <h1> CADASTRO DE PARCEIROS</h1>
            <form className="form-company" onSubmit={handleAddClient}>
                        <span>Dados Empresa</span>
                       
                            <label>CNPJ: </label>
                            <input type="text" value={cnpj} onChange={(e) => setCpnj(e.target.value)} />
                            <label>Razão Social: </label>
                            <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                            <label>Nome Fantasia: </label>
                            <input type="text" value={fantasyName}  onChange={(e) => setFantasyName(e.target.value)}/>
                      
                        <span>Dados Endereço</span>
                        
                            <label>Rua: </label>
                            <input type="text" value={road} onChange={(e) => setRoad(e.target.value)} />
                            <label>Nº: </label>
                            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
                            <label>Complemento: </label>
                            <input type="text" value={complement} onChange={(e) => setComplement(e.target.value)} />
                            <label>Bairro: </label>
                            <input type="text" value={district} onChange={(e) => setDistrict(e.target.value)} />
                                                 
                            <label>Cidade: </label>
                            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                            <label>Estado: </label>
                            <input type="text" value={uf} onChange={(e) => setUf(e.target.value)} />
                            <label>CEP: </label>
                            <input type="text" value={code} onChange={(e) => setCode(e.target.value)} />
                      
                        <span>Dados Contato</span>
                      
                            <label>Email: </label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label>Telefone: </label>
                            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />

                            <span>DESCONTOS</span>
                      
                            <label>% de desconto: </label>
                            <input type="number" value={email} onChange={(e) => setEmail(e.target.value)} />
                            
                        
                       

                        <button type="submit" >Cadastrar Cliente</button>
                    </form>
            
        </div>
        <Footer />
        </div>
        </div>
    )
}

export default NewCompany;