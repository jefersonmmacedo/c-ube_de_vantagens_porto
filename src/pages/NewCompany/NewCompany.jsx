import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import {toast} from 'react-toastify';
import firebase from '../../services/firebaseConnection';
import avatarLogo from '../../assets/images/avatar.svg';
import {FiUpload} from 'react-icons/fi'
import './newCompany.css'

function NewCompany() {
    const [cnpj, setCpnj] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [fantasyName, setFantasyName] = useState('');
    const [road, setRoad] = useState('');
    const [number, setNumber] = useState('');
    const [ddd, setDdd] = useState('');
    const [complement, setComplement] = useState('');
    const [reference, setReference] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const [code, setCode] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [percentage, setPercentage] = useState('');
    const [segment, setSegment] = useState('Selecione');
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [imageAvatar, setImageAvatar] = useState('');

 
 
    function handleFile(e) {
        console.log(e.target.files[0])

       if(e.target.files[0]){
           const image = e.target.files[0];

           if(image.type === 'image/jpeg' || image.type === 'image/jpg' || image.type === 'image/png') {
               setImageAvatar(image);
               setAvatarUrl(URL.createObjectURL(e.target.files[0]))
           } else {
               toast.error('Tipo dearquivo não aceito. Envie uma imagem dos tipos: .jpg, .jpeg, .png');
               setImageAvatar(null);
               return null;
           }
       }
    }

    async function handleAddCompany(e) {
        e.preventDefault();

        if(
            cnpj !== '' &&
            companyName !== '' &&
            fantasyName !== '' &&
            road !== '' &&
            number !== '' &&
            ddd !== '' &&
            complement !== '' &&
            reference !== '' &&
            district !== '' &&
            city !== '' &&
            uf !== '' &&
            code !== '' &&
            percentage !== '' &&
            segment !== '' &&
            email !== '' &&
            phone !== '' &&
            imageAvatar !== ''
         ) {

        const uploadTask = await firebase.storage()
            .ref(`images/${imageAvatar.name}`)
            .put(imageAvatar)
            .then(async () => {
                    await firebase.storage().ref(`images`)
                        .child(imageAvatar.name)
                        .getDownloadURL()
                        .then( async (url) => {
                            let urlImage = url;
                            console.log(url)

                            await firebase.firestore().collection('company')
                                .add({
                                    cnpj:cnpj,
                                    companyName:companyName,
                                    fantasyName:fantasyName,
                                    road: road,
                                    number:number,
                                    ddd:ddd,
                                    complement: complement,
                                    reference: reference,
                                    district:district,
                                    city:city,
                                    uf:uf,
                                    code:code,
                                    email:email,
                                    phone:phone,
                                    segment:segment,
                                    percentage:percentage,
                                    avatarUrl: urlImage
                                }).then(() => {
                                    setCpnj('');
                                    setCompanyName('');
                                    setFantasyName('');
                                    setRoad('');
                                    setNumber('');
                                    setDdd('');
                                    setComplement('');
                                    setDistrict('');
                                    setReference('');
                                    setCity('');
                                    setUf('');
                                    setCode('');
                                    setEmail('');
                                    setPhone('');
                                    setPercentage('');
                                    setSegment('');
                                    setAvatarUrl(null);
                        
                                    toast.success('Novo parceiro cadastrado com sucesso!')
                                }).catch(error => {
                                    console.log(error)
                                    toast.error('Ops. Deu algo errado')
                                })
                        }).catch(error => {
                            console.log(error);
                            toast.error('Ops. Deu algo errado. Tente novamente ou contate o desenvovedor!')
                        })
            }).catch(error => {
                console.log(error);
                toast.error('Ops. Deu algo errado. Tente novamente ou contate o desenvovedor!')
            })
            console.log(uploadTask)
    }  else {
        toast.error('Preencha todos os campos corretamente')
       };
      
};

    function handleSelectSegment(e) {
        setSegment(e.target.value)
    }

    function handleSelectUf(e) {
        setUf(e.target.value)
    }

    return (
        <div className="container">
        <div className="content">
        <div className="box">
            <h1> CADASTRO DE PARCEIROS</h1>
            <form className="form-company" onSubmit={handleAddCompany}>
                <div className="image">
                            <label className="label-avatar">
                            <span><FiUpload color="#f65" size={25} /></span>
                            <input type="file" accept="image/*" onChange={handleFile}/><br />
                            <img src={avatarUrl === null ? avatarLogo : avatarUrl} alt="Avatar" height={191} width={191}/>
                        </label>
                </div>
                <div className="data">
                <div className="company-data">
                        <span>Dados Empresa</span>
                       
                            <label>CNPJ: </label>
                            <input type="number" value={cnpj} onChange={(e) => setCpnj(e.target.value)} />
                            <label>Razão Social: </label>
                            <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                            <label>Nome Fantasia: </label>
                            <input type="text" value={fantasyName}  onChange={(e) => setFantasyName(e.target.value)}/>

                            <span>Dados Contato</span>
                      
                            <label>Email: </label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label>Telefone: </label>
                            <div className="phone">
                                <div className="ddd-phone">
                            <input type="number" value={ddd} onChange={(e) => setDdd(e.target.value)} />
                                </div>
                                <div className="number-phone">
                            <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            </div>
                            

                            <span>DESCONTOS</span>

                            <label>Segmento: </label>
                            <select value={segment} onChange={handleSelectSegment}>
                                <option value="Selecione">Selecione</option>
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
                            </select>
                        
                            <label>% de desconto: </label>
                            <input type="number" value={percentage} onChange={(e) => setPercentage(e.target.value)} />

                </div>

                
                <div className="adrress">
                        <span>Dados Endereço</span>
                        
                            <label>Rua: </label>
                            <input type="text" value={road} onChange={(e) => setRoad(e.target.value)} />
                            <label>Nº: </label>
                            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
                            <label>Complemento: </label>
                            <input type="text" value={complement} onChange={(e) => setComplement(e.target.value)} />
                            <label>Referência: </label>
                            <input type="text" value={reference} onChange={(e) => setReference(e.target.value)} />
                            <label>Bairro: </label>
                            <input type="text" value={district} onChange={(e) => setDistrict(e.target.value)} />
                                                 
                            <label>Cidade: </label>
                            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                            <label>Estado: </label>
                            <select value={uf} onChange={handleSelectUf}>
                                <option value="Selecione">Selecione</option>
                                <option value="Acre - AC">Acre - AC</option>
                                <option value="Alagoas - AL">Alagoas - AL</option>
                                <option value="Amapá - AP">Amapá - AP</option>
                                <option value="Amazonas - AM">Amazonas - AM</option>
                                <option value="Bahia - BA">Bahia - BA</option>
                                <option value="Ceará - CE">Ceará - CE</option>
                                <option value="Distrito Federal - DF">Distrito Federal - DF</option>
                                <option value="Espírito Santo - ES">Espírito Santo - ES</option>
                                <option value="Goiás - GO">Goiás - GO</option>
                                <option value="Maranhão - MA">Maranhão - MA</option>
                                <option value="Mato Grosso - MT">Mato Grosso - MT</option>
                                <option value="Mato Grosso do Sul - MS">Mato Grosso do Sul - MS</option>
                                <option value="Minas Gerais - MG">Minas Gerais - MG</option>
                                <option value="Pará - PA">Pará - PA</option>
                                <option value="Paraíba - PB">Paraíba - PB</option>
                                <option value="Paranpa - PR">Paranpa - PR</option>
                                <option value="Pernambuco - PE">Pernambuco - PE</option>
                                <option value="Piauí - PI">Piauí - PI</option>
                                <option value="Roraima - RR">Roraima - RR</option>
                                <option value="Rondônia - RO">Rondônia - RO</option>
                                <option value="Rio de Janeiro - RJ">Rio de Janeiro - RJ</option>
                                <option value="Rio Grande do Norte - RN">Rio Grande do Norte - RN</option>
                                <option value="Rio Grande do Sul - RS">Rio Grande do Sul - RS</option>
                                <option value="Santa Catarina - SC">Santa Catarina - SC</option>
                                <option value="São Paulo - SP">São Paulo - SP</option>
                                <option value="Sergipe - SE">Sergipe - SE</option>
                                <option value="Tocantins - TO">Tocantins - TO</option>
                            </select>
                            <label>CEP: </label>
                            <input type="text" value={code} onChange={(e) => setCode(e.target.value)} />
                      
                            </div> 

                            </div>
                            
                        <button type="submit" >Cadastrar Cliente</button>
                    </form>
            
        </div>
        </div>
        <Footer />
        </div>
    )
}

export default NewCompany;