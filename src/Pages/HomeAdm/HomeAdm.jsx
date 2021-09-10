import React from 'react';
import { Link } from 'react-router-dom';

import Img from './../../Assets/home-page.svg';
import Logo from './../../Assets/Logo-FCamara.png';

const HomeAdm = () => {
  return(
    
    <React.Fragment>

      <div className="container-lg container-md d-flex flex-column justify-content-start align-items-center bg-white container vw-100 vh-100">

          <header className='col-lg-10 col-11 container-fluid d-flex justify-content-between align-items-center mt-3 mb-4 mt-lg-4'>
            <Link className='col-6 col-md-2' to='/'>
              <img className='img-fluid p-2' src={ Logo } alt='Logotipo FCamara'/>
            </Link>
            <Link to='#' className='text-orange link-hover fw-bold col-1'>Login</Link>
          </header>

          <main className= 'container-fluid row w-100 d-flex justify-content-start flex-column align-items-center flex-lg-row'> 
            <img className="img-fluid col-10 col-lg-6" src={Img} alt="Duas mulheres sentadas no escritório conversando e tomando café."/>

<<<<<<< HEAD
            <div className="d-flex flex-column col-md-9 col-lg-5 col-12 mt-2">
=======
      <div className="container">
        <div className="row vh-100 d-flex align-items-center">


          <div className="d-flex justify-content-end">
            <a href="/adm/criar" className="login-text p-3">Minha Empresa</a>
            <a href="#" className="login-text p-3">Login</a>
          </div>


          <a href="#" className="login-text">Login</a>


          <div className="col-md-6 col-12">
            <img src={Img} alt="Pessoas sentadas" className="img-fluid" />
          </div>


            <div className="d-flex flex-column col-md-6 col-lg-5 col-12">
>>>>>>> 4e47453048d6a20f831338b1c2aed84cd2d3498b
              <h5 className='mb-1'>Bateu saudade dos colegas?</h5>
              <h5 className=''>Precisa fazer uma reunião importante?</h5>
              <p className='mt-3'>Seja qual for o motivo, aqui você agenda o dia que precisa ir ao escritório e garante um dia de trabalho seguro e agradável.</p>

              <Link className="btn-orange mt-4 w-100 col-12" to='/consultor'>
                Quero reservar
              </Link>
            </div>
          </main>

      </div>      
    </React.Fragment>

  );
}

export default HomeAdm;