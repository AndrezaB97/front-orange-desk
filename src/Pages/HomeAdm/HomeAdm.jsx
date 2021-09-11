import React from 'react';
import Img from './../../Assets/home-adm.png';


const HomeAdm = () => {
  return(
    <React.Fragment>
      <div className="container">
        <div className="row vh-100 d-flex align-items-center">

          <div className="d-flex justify-content-end">
            <a href="/adm/criar" className="login-text p-3">Minha Empresa</a>
            <a href="#" className="login-text p-3">Login</a>
          </div>


          <div className="col-md-6 col-12">
            <img src={Img} alt="Pessoas sentadas" className="img-fluid" />
          </div>

          <div className="col-md-6 col-12">
            <h5>Bateu saudade dos colegas? Precisa fazer uma reunião importante?</h5>
            
            <p>asdasakjsfjaksdlfa Seja qual for o motivo, aqui você agenda o dia que precisa ir ao escritório e garante um dia de trabalho seguro e agradável.</p>

            <a href="/consultor"><button className="btn-orange mt-3 w-100">Quero reservar</button></a>

          </div>

        </div>
      </div>      
    </React.Fragment>
  );
}

export default HomeAdm;