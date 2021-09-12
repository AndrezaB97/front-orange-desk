import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './../../Assets/logo-Orange-Desk.svg';
import Img from './../../Assets/confirmation-page.svg';

const Confirmation = () => {

    document.title = 'CONFIRMATION | Orange Desk';

    return ( 

        <React.Fragment>
            <div className="container-lg container-md d-flex flex-column justify-content-start align-items-center bg-white container vw-100 vh-100">

                <header className='col-lg-10 col-11 container-fluid d-flex justify-content-between align-items-center mt-3 mb-sm-1 mt-lg-4'>
                    <Link className='col-3 col-lg-1' to='/'>
                        <img className='img-fluid p-2' src={ Logo } alt='Logotipo FCamara'/>
                    </Link>
                </header>

                <main className= 'container-fluid row w-100 d-flex justify-content-evenly flex-column align-items-center flex-lg-row mt-md-3'> 
                    <img className="img-fluid col-10 col-lg-6" src={ Img } alt="Rapaz sentado com um notebook no colo, observando que seu agendamento foi concluído."/>

                    <div className="d-flex flex-column align-items-center col-md-9 col-lg-5 col-12 mt-2">
                        <h5 className='mb-1'>Reserva concluída</h5>
                        <p className='mt-3 text-start'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>

                        <Link className="btn-orange mt-2 mt-md-4 w-100 col-12 text-center" to='#'>
                            Ver meus agendamentos
                        </Link>
                    </div>
                </main>

            </div>      
        </React.Fragment>

     );
}
 
export default Confirmation;