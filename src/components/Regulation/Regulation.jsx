import React from 'react';
import {Link} from 'react-router-dom'
import delimiterImg from '../../assets/images/delimiter.svg'
import regulationImg from '../../assets/images/comoParticipar.svg'
import regulationImg2 from '../../assets/images/regulationImg.png'
import './regulation.css'

function Regulation() {
    return (
        <div className="regulation">
            <div className="demiliter">
                    <img src={delimiterImg} alt="delimiter" />
            </div>
            <div className="info-regulation">
                <div className="text-itens-regulation">
                    <img src={regulationImg} alt="regulation" />
                    <div className="text-regulation">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <div className="buttons-regulation">
                            <Link className="btn-regulation">VER REGULAMENTO COMPLETO</Link>
                            <Link className="btn-regulation-2">ONDE USAR MEUS CUPONS?</Link>
                    </div>
                    </div>
                    
                    </div>
                <div className="img-regulation">
                        <img src={regulationImg2} alt="" />
                </div>
                
            </div>
        </div>
    )
}


export default Regulation;