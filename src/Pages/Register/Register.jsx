import React, { useEffect, useState, setUser } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import api from './../../services/api'
import './Style.css'

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
    <div className="center">
      <div className="container">
        <h1>Cadastro de empresa</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="username"
            {...register('username', { required: true, min: 4 })}
          />

          <input
            {...register('email', { required: true })}
            placeholder="E-mail"
          />

          <input
            {...register('password', { required: true })}
            placeholder="Senha"
          />

          <input type="submit" onClick={save} />
        </form>
        <button>Notify !</button>
        <ToastContainer />
      </div>
    </div>
  )
}

export default Register
