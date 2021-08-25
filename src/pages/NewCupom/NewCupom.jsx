import React,{ useState } from 'react';
import Footer from '../../components/Footer/Footer';
import {toast} from 'react-toastify';
import firebase from '../../services/firebaseConnection'
import './newCupom.css'

function NewCupom() {
    const [contract, setContract] = useState('');
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');

    async function handleAddCupom(e) {
        e.preventDefault()
        
        if(contract !== '' &&
            cpf !== '' &&
            name !== '' ) {
        await firebase.firestore().collection('cupons')
        .add({
            contract: contract,
            cpf: cpf,
            name:name,
            createdAt: new Date()

        }).then(() => {
            setContract('');
            setName('');
            setCpf('');

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
            <h1> GERAR NOVO CUPOM</h1>
            <form className="form" onSubmit={handleAddCupom}>
                <label>Nº CONTRATO</label>
                <input type="text" value={contract} onChange={(e) => setContract(e.target.value)} />
                <label>NOME COMPLETO</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <label>CPF (Apenas números)</label>
                <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)}/>

                <button>GERAR CUPOM</button>
            </form>
            
        </div>
        <Footer />
        </div>
        </div>
    )
}

export default NewCupom;