// Importing modules:
import React, { useEffect, useState, setUser } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

// Importing services:
import api from '../../services/api'

// Import components:
import Input from '../../Components/FormInput/Input'

// Importing style-sheets:
import '../../style/global-style.css';
import './Register.css'
import ConsultorHeader from '../../Components/ConsultorHeader/ConsultorHeader';


const Register = () => {
  const { handleSubmit, register, formState: { errors } } = useForm()

  const onSubmit = async data => {
    try {
      await api.post('/users', data);
      toast.success("Empresa cadastrada com sucesso!", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (err) {
      console.log(err.response.data);
      toast.error(err.response.data[0].message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  };

  return (
    <React.Fragment>

      <div className="container-fluid d-flex flex-column align-items-center vh-100">

        <ConsultorHeader currentStep={'login'} />

        <div className="container d-flex align-items-center vh-100">
          <div className="row flex-grow-1">
            <div className="col-md-6 col-12">
              <h3>Estamos quase lá!</h3>
              <p>Só precisamos de mais algumas informações.</p>
            </div>
            <div className="col-md-6 col-12">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input type={'text'} className={'form-control border-0 shadow-none'} placeholder={'Nome *'} name={register('name', {required: true})} />
                {errors.name && errors.name.type === "required" && <span className="text-danger">Campo obrigatório</span>}
                <Input type={'email'} className={'form-control border-0 shadow-none'} placeholder={'Email *'} name={register('email', {required: true})} />
                {errors.email && errors.email.type === "required" && <span className="text-danger">Campo obrigatório</span>}
                <Input type={'password'} className={'form-control border-0 shadow-none'} placeholder={'Senha *'} name={register('password', {required: true})} />
                {errors.password && errors.password.type === "required" && <span className="text-danger">Campo obrigatório</span>}
                <Input type={'password'} className={'form-control border-0 shadow-none'} placeholder={'Confirme a senha *'} name={register('password_confirmation', {required: true})} />
                {errors.password_confirmation && errors.password_confirmation.type === "required" && <span className="text-danger">Campo obrigatório</span>}                
                <button id='btnRegister' className='btn w-100 h-auto mt-md-3 mt-5'>Cadastrar e continuar</button>
                <ToastContainer/>
              </form>
              <div className='text-center mt-3'>
                <Link style={{'color': '#404099', 'textDecoration': 'none'}} to='#'>Já tenho login</Link>
              </div>
            </div>
          </div>
        </div>

      </div>

    </React.Fragment>
  )
}

export default Register