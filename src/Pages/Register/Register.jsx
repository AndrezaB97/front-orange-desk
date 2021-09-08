// Importing modules:
import React, { useEffect, useState, setUser } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useForm } from 'react-hook-form'

// Importing services:
import api from '../../services/api'

// Import components:
import Input from '../../Components/FormInput/Input'

// Importing style-sheets:
import '../../style/global-style.css';
import './Register.css'
import ConsultorHeader from '../../Components/ConsultorHeader/ConsultorHeader';


function Register() {
  const { handleSubmit, register, errors } = useForm()

  const [result, setResult] = useState('')
  const onSubmit = data => setResult(JSON.stringify(data))

  const save = async () => {
    try {
      await api.post('/users', result)
      toast.success('Cadastro efetuado com sucesso', {
        position: toast.POSITION.TOP_RIGHT
      })
    }
    catch (err) {
      toast.error('Erro ao cadastrar', {
        position: toast.POSITION.TOP_RIGHT
      })
    }
  }

  return (
    <React.Fragment>

      <div className="container-fluid d-flex flex-column align-items-center vh-100">

        <ConsultorHeader currentStep={'register'} />

        <div className="container d-flex align-items-center vh-100">
          <div className="row flex-grow-1">
            <div className="col-md-6 col-12">
              <h3>Estamos quase lá!</h3>
              <p>Só precisamos de mais algumas informações.</p>
            </div>
            <div className="col-md-6 col-12">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input type={'text'} className={'form-control border-0 shadow-none'} placeholder={'Nome'} name={register('name', {required: true})} />
                <Input type={'email'} className={'form-control border-0 shadow-none'} placeholder={'Email'} name={register('email', {required: true})} />
                <Input type={'password'} className={'form-control border-0 shadow-none'} placeholder={'Senha'} name={register('password', {required: true})} />
                <Input type={'password'} className={'form-control border-0 shadow-none'} placeholder={'Confirme a senha'} name={register('confirmPassword', {required: true})} />
                <button id='btnRegister' className='btn w-100 h-auto mt-md-3 mt-5' onClick={save}>Cadastrar e continuar</button>
                <ToastContainer/>
              </form>
            </div>
          </div>
        </div>

      </div>

    </React.Fragment>
  )
}

export default Register