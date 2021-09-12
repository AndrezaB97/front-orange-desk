import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ConsultorHeader from '../../Components/ConsultorHeader/ConsultorHeader';
import Img from './../../Assets/consultor-page.svg';

const Consultor = () => {

    document.title = 'OFFICE | Orange Desk';
    
    const [office, setOffice] = useState('');

    return ( 
        
        <React.Fragment>
            <div className="container-lg container-md d-flex flex-column justify-content-start bg-white container vw-100 vh-100">

                <ConsultorHeader currentStep={'office'}/>

                <main className= 'container-fluid row v-100 d-flex justify-content-start flex-column align-items-center flex-lg-row'>
                    <img className='img-fluid w-md-25 col-lg-8 col-10' src={ Img } alt='Colegas conversando de forma descontraída no escritório.' />

                    <div className='container-fluid col-lg-4 flex-column justify-content-evenly align-items-start mt-3'>
                        
                        <div className="col-md-12 mb-3">
                            <p>Em qual unidade FCamara você vai?</p>
                        </div>

                        <div className='d-flex flex-column flex-md-row flex-lg-column w-100'>    
                            <Link className='card hover btn w-100 m-md-1 mb-1' to={ `/consultor/schedule/${JSON.stringify(office)}` } onClick={ () => {setOffice('sp')} }>
                                <div className="container d-flex flex-row justify-content-between align-items-center p-3 rounded text-white">
                                    <div className="text-start">
                                        <h1 className=' fs-3 fw-bold text-orange'>SÃO PAULO</h1>
                                        <p className='fs-10 fw-normal text-black'>
                                            Rua Bela Cintra, 986 - 2° andar<br/>
                                            Consolação, São Paulo - SP
                                        </p>
                                    </div>

                                    <div className="text-end fs-1 fw-bold text-blue">sede</div>
                                </div>
                            </Link>

                            <Link className='card hover btn w-100 m-md-1 mb-2' to={ `consultor/schedule/${JSON.stringify(office)}` } onClick={ () => {setOffice('santos')} }>
                                <div className="container d-flex flex-row justify-content-between align-items-center bg-orange p-3 rounded text-white">
                                    <div className="text-start">
                                        <h1 className='fs-3 fw-bold text-orange'>SANTOS</h1>
                                        <p className='fs-10 col-md-10 fw-normal text-black'>
                                            Praça dos Expedicionários, 19 - 2° andar<br/>
                                            Gonzaga, Santos - SP
                                        </p>
                                    </div>

                                    <div className="text-end fs-1 fw-bold text-blue">filial</div>
                                </div>
                            </Link>
                        </div>

                    </div>
                </main>
            </div>
        </React.Fragment>

     );
}
 
export default Consultor;