import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';

import api from './../../services/api';

import Img from './../../Assets/consultor-page.svg';

const Adm = () => {
  
  document.title = 'ADM SIGN-UP | Orange Desk'

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    api.post(`/register_company`, data)
    .then(res => {
      toast.success("Empresa cadastrada com sucesso!", {
        position: toast.POSITION.TOP_RIGHT
      });
    }).catch(function (error) {
      console.log(error.response.data);
      toast.error(error.response.data[0].message, {
        position: toast.POSITION.TOP_RIGHT
      });
    })
  };

  return(
    <React.Fragment>
       <div className="container">
        <div className="row vh-100 d-flex align-items-center">

          <div className="col-md-6 col-12">
            <img src={Img} alt="Pessoas sentadas" className="img-fluid" />
          </div>

          <div className="col-md-6 col-12">
            <h5>Bateu saudade dos colegas? Precisa fazer uma reunião importante?</h5>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="text" placeholder="Nome de Usuário *" className="form-control" {...register('username', { required: true})}/>
              {errors.username && errors.username.type === "required" && <span className="text-danger">Campo obrigatório</span>}

              <input type="text" placeholder="Apelido (Usarão para te encontrar) *" className="form-control mt-3"
              {...register('slug', { required: true})}
              />
              {errors.slug && errors.slug.type === "required" && <span className="text-danger">Campo obrigatório</span>}

              <input type="email" placeholder="Email *" className="form-control mt-3"
              {...register('email', { required: true})}/>
              {errors.email && errors.email.type === "required" && <span className="text-danger">Campo obrigatório</span>}

              <input type="text" placeholder="Telefone *" className="form-control mt-3"
              {...register('phone', { required: true})}/>
              {errors.phone && errors.phone.type === "required" && <span className="text-danger">Campo obrigatório</span>}

              <input type="password" placeholder="Senha *" className="form-control mt-3"
              {...register('password', { required: true})}/>
              {errors.password && errors.password.type === "required" && <span className="text-danger">Campo obrigatório</span>}

              <input type="password" placeholder="Confirmar Senha *" className="form-control mt-3"
              {...register('password_confirmation', { required: true})}/>
              {errors.password_confirmation && errors.password_confirmation.type === "required" && <span className="text-danger">Campo obrigatório</span>}

              <button className="btn-orange mt-3 w-100">Cadastrar Minha Empresa</button>
            </form>
          </div>
        </div>
        <ToastContainer />

      </div>
        
    </React.Fragment>
  )
}

export default Adm;