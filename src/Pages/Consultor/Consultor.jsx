import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ConsultorHeader from '../../Components/ConsultorHeader/ConsultorHeader';

import { Main } from './ConsultorStyle.js';

const Consultor = () => {

    const [office, setOffice] = useState('');

    return ( 
        
        <>
            <ConsultorHeader currentStep={1} stepLabel={'Escolha um escritório'}/>

            <Main>
                <div className="img-container"></div>
                <div className="main-description">
                    Em qual unidade FCamara você vai?
                </div>

                <div className="cards-container">
                    
                    <Link to={ `/calendar/${JSON.stringify(office)}` } onClick={ () => {setOffice('sp'); console.log(office)} }>
                        <div className="card">
                            <div className="adress">
                                <h1>SÃO PAULO</h1>
                                <p>
                                    Rua Bela Cintra, 986 - 2° andar<br/>
                                    Consolação, São Paulo - SP
                                </p>
                            </div>

                            <div className="label">sede</div>
                        </div>
                    </Link>

                    <Link to={ `/calendar/${JSON.stringify(office)}` } onClick={ () => setOffice('santos') }>
                        <div className="card">
                            <div className="adress">
                                    <h1>SANTOS</h1>
                                    <p>
                                        Praça dos Expedicionários, 19 - 2° andar<br/>
                                        Gonzaga, Santos - SP
                                    </p>
                                </div>

                                <div className="label">filial</div>
                        </div>
                    </Link>

                </div>
            </Main>
        </>

     );
}
 
export default Consultor;