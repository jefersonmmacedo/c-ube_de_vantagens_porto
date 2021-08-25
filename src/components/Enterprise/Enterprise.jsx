import React from 'react';
import {Link} from 'react-router-dom';
import {FiUsers, FiTrendingUp, FiThumbsUp, FiCoffee, FiBriefcase, FiMap } from 'react-icons/fi';
import companyTitle from '../../assets/images/parceiros.svg';
import companyImg from '../../assets/images/parceirosCentro.png';
import './enterprise.css'


function Enterprise() {
    return (
        <div className="company">

            <div className="company-texts">
                <div className="company-text-iten">
                    
                        <FiUsers  size={200} color='#2E4562'/>
                    <div className="iten-text">
                        <h3>+ CLIENTES</h3>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>  
                    </div>
                </div>


                <div className="company-text-iten">
                <FiTrendingUp size={200} color='#2E4562'/>
                <div className="iten-text">
                <h3>+ CLIENTES</h3>
                <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p> 
                </div>          
                </div>


                <div className="company-text-iten">
                <FiThumbsUp size={200} color='#2E4562'/> 
                <div className="iten-text">
                <h3>+ CLIENTES</h3>      
                <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p> 
                </div>
                </div>
            </div>

            <div className="title">
                <img src={companyTitle} alt="title-section" />
                <div className="image">
                <img src={companyImg} alt="imagem" />
                </div>
                <Link className="btn-company">VEJA COMO SER UM PARCEIRO</Link>
            </div>


            <div className="company-texts">
                <div className="company-text-iten2">
                    <div className="iten-text">
                     <h3>+ CLIENTES</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p> 
                    </div>
                     <FiCoffee size={200} color='#2E4562'/>
                </div>


                <div className="company-text-iten2">
                <div className="iten-text">
                    <h3>+ CLIENTES</h3>
                <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p> 
                </div>          
                    <FiBriefcase  size={200} color='#2E4562'/>
                </div>


                <div className="company-text-iten2">
                <div className="iten-text">
                       <h3>+ CLIENTES</h3>
                     <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p> 
                        </div>
                       <FiMap  size={200} color='#2E4562'/> 
                </div>
            </div>

        </div>
    )
}

export default Enterprise;
