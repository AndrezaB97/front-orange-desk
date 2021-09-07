// Importing modules:
import React, { useEffect, useState, setUser } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';


// Importing services:
import api from '../../services/api'

// Import components:
import Input from '../../Components/FormInput/Input'
import InputSubmit from '../../Components/FormInputSubmit/InputSubmit'
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
    <>

      <header>
        <nav>
          <div className="nav-container">
            <Link to='/'> <Logo /> </Link>
          </div>
        </nav>
      </header>

      <main>
          <div className="main-description">
            <strong>Estamos quase lá!</strong>
            <br />
            <br />
            Só precisamos de mais algumas informações.
          </div>

          <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input type={'text'} placeholder={'Nome'} name={register('name')} />
              <Input type={'email'} placeholder={'Email'} name={register('email')} />
              <Input type={'password'} placeholder={'Senha'} name={register('password')} />
              <Input type={'password'} placeholder={'Confirme a senha'} name={register('confirmPassword')} />
              <div className="btn-container">
                <InputSubmit event={save} value='Cadastrar e continuar' />
                <ToastContainer />
              </div>
            </form>

          </div>
      </main>

    </>
  )
}

export default Register