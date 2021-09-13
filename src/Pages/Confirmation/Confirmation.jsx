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
                    <Link className='col-3 col-md-2 col-lg-1' to='/'>
                        <img className='img-fluid p-2' src={ Logo } alt='Logotipo FCamara'/>
                    </Link>
                </header>

                <main className= 'container-fluid row w-100 d-flex justify-content-evenly flex-column align-items-center flex-lg-row mt-md-3'> 
                    <img className="img-fluid col-10 col-lg-6" src={ Img } alt="Rapaz sentado com um notebook no colo, observando que seu agendamento foi concluído."/>

                    <div className="d-flex flex-column align-items-center col-lg-6 col-lg-5 col-12 mt-2">
                        <h4 className='fw__bold text-black'>Reserva concluída</h4>
                        <p className='mt-2 text-center text-orange fw__light'>Prontinho, Sangue Laranja!</p>
                        <p className='mt-2 text-center text-black fw__light'>Você pode frequentar o escritório no dia selecionado entre às <span className='fw__extra-bold'>8h e 18h</span></p>
                        <p className='mt-2 text-center text-black'>Não esqueça o álcool gel! Até mais :D</p>

                        <Link className="btn-orange fw__extra-bold mt-2 mt-md-4 w-100 col-12 text-center" to='#'>
                            Ver meus agendamentos
                        </Link>
                    </div>
                </main>

            </div>      
        </React.Fragment>

     );
}
 
export default Confirmation;