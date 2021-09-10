// Importing modules:
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'

// Importing services:
import api from '../../services/api'

// Import components:
import Input from '../../Components/FormInput/Input'
import { FiArrowLeftCircle } from 'react-icons/fi'

// Importing style-sheets:
import '../../style/global-style.css';
import './Login.css'

const Login = () => {
    const { handleSubmit, register, formState: { errors } } = useForm()

    const history = useHistory()

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

            <main className="container-fluid d-flex flex-column align-items-center vh-100">
                <header className='container d-flex justify-content-between mt-3'>
                    <button className='bg-white'>
                        <FiArrowLeftCircle size='24' onClick={() => history.push('/')}/>
                    </button>
                    <div>Logo</div>
                </header>
                <form className="row w-auto h-100 align-content-md-center my-3 mx-1" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-12">
                        <h5>Faça seu login.</h5>
                        <p>Só precisamos de mais algumas informações.</p>
                        <Input type={'email'} className={'form-control border-0 shadow-none'} placeholder={'Email'} name={register('email', { required: true })} />
                        {errors.email && errors.email.type === "required" && <span className="text-danger">Campo obrigatório</span>}
                        <Input type={'password'} className={'form-control border-0 shadow-none'} placeholder={'Senha'} name={register('password', { required: true })} />
                        {errors.password && errors.password.type === "required" && <span className="text-danger">Campo obrigatório</span>}
                    </div>
                    <div className="col-12 align-self-end text-center mt-md-3">
                        <button id='btnLogin' className='form-control w-100 rounded border-0'>Entrar</button>
                        <ToastContainer/>
                    </div>
                </form>
            </main>

        </React.Fragment>
    )
}

export default Login