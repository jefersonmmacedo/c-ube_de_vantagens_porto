import React, { useContext, useEffect, useState } from 'react';
import TopBar from '../../../components/TopBar/TopBar';
import {toast} from 'react-toastify';
import firebase from '../../../services/firebaseConnection';
import { AuthContext } from '../../../contexts/Auth';
import './userAdmin.css'

function UsersAdmin() {
    const [users, setUsers] = useState([]);
    const {user, signOut} = useContext(AuthContext);

    
    useEffect(() => {
        //CARREGANDO OS CUPONS
    async function loadCupons() {
        await firebase.firestore().collection('users')
        .get()
            .then((snapshot) => {
                let list = [];

                
                snapshot.forEach((doc) => {
                    list.push({
                        id: doc.id,
                        name:doc.data().name,
                        email:doc.data().email,
                    })
                })
                setUsers(list);
            }).catch(error => {
                console.log(error)
                toast.error('Ops. Deu algo errado');
            })
    }

    loadCupons();
    }, [])


    async function handleDelete(id) {
        await firebase.firestore().collection('users')
            .doc(id)
                .delete()
                    .then(() => {
                        window.location.reload(true);
                        toast.success('Usuário deletado com sucesso');
                    }).catch(error => {
                console.log(error)
                toast.error('Ops. Deu algo errado');
            })
    }


    return (
        <div className="container">
        <div className="content">
            <TopBar />
        <div className="dashboard-data">
        <div className="data-cupons">
                <h3>USUÁRIOS CADASTRADOS</h3>
               <br />
               {
                   users.map((user) => {
                       return (
                           <div className="cupom-data">
                               <h3>{user.name}</h3>
                               <h3>{user.email}</h3>
                               <div className="buttons">
                                   <button>Editar</button>
                                   <button onClick={() => handleDelete(user.id)}>Excluir</button>
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

export default UsersAdmin;