import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './../../Assets/logo-Orange-Desk.svg';
import Img from './../../Assets/home-page.svg';

const HomeAdm = () => {

  document.title = 'HOME | Orange Desk'

  return(
    
    <React.Fragment>

      <div className="container-lg container-md d-flex flex-column justify-content-start align-items-center bg-white container vw-100 vh-100">

          <header className='col-lg-10 col-11 container-fluid d-flex justify-content-between align-items-center mt-3 mt-lg-4'>
            <Link className='col-3 col-md-2 col-lg-1' to='/'>
              <img className='img-fluid p-2' src={ Logo } alt='Logotipo FCamara'/>
            </Link>
            <Link to='/login' className='text-orange link-hover col-1'>Entrar</Link>
          </header>

          <main className= 'container-fluid row w-100 d-flex justify-content-start flex-column align-items-center flex-lg-row'> 
            <img className="img-fluid col-10 col-lg-6" src={Img} alt="Duas mulheres sentadas no escritório conversando e tomando café."/>

            <div className="d-flex flex-column col-md-9 col-lg-5 col-12 mt-2">
              <h5 className='mb-1 fs-5 fw__bold'>Bateu saudade dos colegas?</h5>
              <h5 className='fs-5 fw__bold'>Precisa fazer uma reunião importante?</h5>
              <p className='fw__light mt-3'>Seja qual for o motivo, aqui você agenda o dia que precisa ir ao escritório e garante um dia de trabalho seguro e agradável.</p>

              <Link className="btn-orange fw__extra-bold text-center mt-2 mt-md-4 w-100 col-12" to='/register'>
                Quero reservar meu lugar
              </Link>
            </div>
          </main>

      </div>      
    </React.Fragment>

  );
}

export default HomeAdm;