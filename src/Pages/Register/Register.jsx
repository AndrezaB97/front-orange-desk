// Importing modules:
import React, { useEffect, useState, setUser } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';


// Importing services:
import api from '../../services/api'

// Import components:
import Input from '../../Components/FormInput/Input'
import Logo from '../../Components/Logo/Logo'

// Importing style-sheets:
import '../../style/global-style.css';
import './Register.css'


function Register() {
  const { handleSubmit, register, errors } = useForm()

  const [result, setResult] = useState('')
  const onSubmit = data => setResult(JSON.stringify(data))

  const save = () => {
    api
      .post('/users')
      .then(response => {
        toast.success('Cadastro efetuado com sucesso', {
          position: toast.POSITION.BOTTOM_RIGHT
        })
      })
      .catch(err => {
        toast.warn('Erro ao cadastrar', {
          position: toast.POSITION.BOTTOM_RIGHT
        })
      })
  }

  return (
    <React.Fragment>

      <div className="container mt-3">
        <div className="row">
          <div className="col-1">
            <Link to='/'> <Logo /> </Link>
          </div>
        </div>
      </div>
      <div className="container vh-100 d-flex align-items-center justify-content-center">
        <div className="row vw-100">
          <div className="col-md-6 col-12">
            <h3>Estamos quase lá!</h3>
            <p>Só precisamos de mais algumas informações.</p>
          </div>
          <div className="col-md-6 col-12">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input type={'text'} className={'form-control border-0 shadow-none'} placeholder={'Nome'} name={register('name')} />
              <Input type={'email'} className={'form-control border-0 shadow-none'} placeholder={'Email'} name={register('email')} />
              <Input type={'password'} className={'form-control border-0 shadow-none'} placeholder={'Senha'} name={register('password')} />
              <Input type={'password'} className={'form-control border-0 shadow-none'} placeholder={'Confirme a senha'} name={register('confirmPassword')} />
              <button id='btnRegister' className='btn w-100 h-5 mt-3' onClick={save}>Cadastrar e continuar</button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>

      {/* <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-md-1 col-1">
            <Link to='/'> <Logo /> </Link>
          </div>
        </div>
        <div className="vw-50">
          <h3>Estamos quase lá!</h3>
          <p className=''>Só precisamos de mais algumas informações.</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input type={'text'} className={'form-control border-0 shadow-none'} placeholder={'Nome'} name={register('name')} />
            <Input type={'email'} className={'form-control border-0 shadow-none'} placeholder={'Email'} name={register('email')} />
            <Input type={'password'} className={'form-control border-0 shadow-none'} placeholder={'Senha'} name={register('password')} />
            <Input type={'password'} className={'form-control border-0 shadow-none'} placeholder={'Confirme a senha'} name={register('confirmPassword')} />
            <button id='btnRegister' className='btn w-100 h-5 mt-3' onClick={save}>Cadastrar e continuar</button>
            <ToastContainer />
          </form>
        </div>
      </div> */}

    </React.Fragment>
  )
}

export default Register