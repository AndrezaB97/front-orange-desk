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

      <div className='container vh-100 d-flex flex-column'>
        <div className="container mt-3">
          <div className="row justify-content-between">
            <div className="col-1">
              <Link to='/'> <Logo /> </Link>
            </div>
            <div className="col-1 h-auto bg-primary"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
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
              </form>
              <button id='btnRegister' className='btn w-100 h-auto mt-3 d-flex flex-column justify-content-end' onClick={save}>Cadastrar e continuar</button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default Register