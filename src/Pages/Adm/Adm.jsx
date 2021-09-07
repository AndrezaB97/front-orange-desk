import React from 'react';
import Img from './../../Assets/adm-image.png'


const Adm = () => {
  return(
    <React.Fragment>
      <div className="container vh-100 d-flex">
        <div className="row">
          <div className="col-md-6 col-12">
            <img src={Img} alt="Pessoas conversando" className="img-fluid" />
          </div>
          <div className="col-md-6 col-12">
            <h1 className="text-center">Dados da empresa</h1>
            <p className="text-justify">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor</p>
            <form>
            <input type="text" placeholder="Testando Form" className="form-control w-100" />
            <input type="text" placeholder="Testando Form" className="form-control w-100" />
            <input type="text" placeholder="Testando Form" className="form-control w-100" />
            <input type="text" placeholder="Testando Form" className="form-control w-100" />
            <button className="btn btn-secondary w-100 h-5 mt-3">Enviar</button>
            </form>
          </div>
        </div>
        </div>  
    </React.Fragment>
  )
}

export default Adm;