import React, { useEffect, useState, setUser } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import api from '../../services/api'
import './Register.css'
import InputText from '../../Components/FormInputText/InputText'
import InputSubmit from '../../Components/FormInputSubmit/InputSubmit'

function Register() {
  const { handleSubmit, register, errors } = useForm()

  const [result, setResult] = useState('')
  const onSubmit = data => setResult(JSON.stringify(data))

  const show = useEffect(() => {
    console.log(result)
  }, [result])

  const save = async () => {
    try {
      await api.post('/users', result)
      toast.success('Cadastro efetuado com sucesso', {
        position: toast.POSITION.BOTTOM_RIGHT
      })
    }
    catch {
      toast.warn('Erro ao cadastrar', {
        position: toast.POSITION.BOTTOM_RIGHT
      })
    }
  }

  return (
    <div className="center">
      <div className="container">
        <h1>Cadastro Novo Usuário</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputText placeholder='Nome' name={register('name')} />
          <InputText placeholder='Email' name={register('email')} />
          <InputText placeholder='Senha' name={register('password')} />
          <InputSubmit event={save} />
        </form>
        <button>Notify !</button>
        <ToastContainer />
      </div>
    </div>
  )
}

export default Register
