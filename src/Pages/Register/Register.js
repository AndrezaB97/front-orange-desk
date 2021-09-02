import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useForm } from 'react-hook-form'

function Register() {
  const { handleSubmit, register, errors } = useForm()

  const [result, setResult] = useState('')
  const onSubmit = data => setResult(JSON.stringify(data))

  const message = () =>
    toast.success('Success Notification !', {
      position: toast.POSITION.BOTTOM_RIGHT
    })

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} placeholder="Nome" />
        <input {...register('email')} placeholder="E-mail" />
        <select {...register('unity')}>
          <option value="">Select...</option>
          <option value="A">Category A</option>
          <option value="B">Category B</option>
        </select>

        <p>{result}</p>

        <input type="submit" />
      </form>
      <button onClick={message}>Notify !</button>
      <ToastContainer />
    </div>
  )
}

export default Register
