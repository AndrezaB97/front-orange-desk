import React from 'react';
import { Link } from 'react-router-dom';

import Img from './../../Assets/home-page.svg';

const HomeAdm = () => {
  return(
    
    <React.Fragment>
      <div className="container-lg container-md d-flex flex-column justify-content-start align-items-center bg-white container vw-100 vh-100">

          <header className=' col-lg-10 container-fluid d-flex justify-content-between align-items-center mt-2 mb-4 mt-lg-4'>
            <div className='col-3 p-2'>Logo</div>
            <Link to='#' className='text-orange fw-bold col-2'>Login</Link>
          </header>

          <main className= 'container-fluid row v-100 d-flex justify-content-start flex-column align-items-center flex-lg-row'> 
            <img className="img-fluid w-md-25 col-lg-6" src={Img} alt="Pessoas sentadas"/>

            <div className="d-flex flex-column col-md-6 col-lg-5 col-12">
              <h5 className='mb-1'>Bateu saudade dos colegas?</h5>
              <h5>Precisa fazer uma reunião importante?</h5>
              <p className='mt-4'>Seja qual for o motivo, aqui você agenda o dia que precisa ir ao escritório e garante um dia de trabalho seguro e agradável</p>

              <Link className="btn-orange mt-4 w-100 " to='/consultor'>
                Quero reservar
              </Link>
            </div>
          </main>

      </div>      
    </React.Fragment>

  );
}

export default HomeAdm;