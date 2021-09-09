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
import ConsultorHeader from '../../Components/ConsultorHeader/ConsultorHeader';

const Login = () => {
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
                <form className="row w-100 h-100 my-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-6 col-12 bg-primary">
                        <h5>Faça seu login!</h5>
                        <p>Só precisamos de mais algumas informações.</p>
                        <Input type={'email'} className={'form-control border-0 shadow-none'} placeholder={'Email *'} name={register('email', { required: true })} />
                        {errors.email && errors.email.type === "required" && <span className="text-danger">Campo obrigatório</span>}
                        <Input type={'password'} className={'form-control border-0 shadow-none'} placeholder={'Senha *'} name={register('password', {required: true})} />
                        {errors.password && errors.password.type === "required" && <span className="text-danger">Campo obrigatório</span>}
                    </div>
                    <div className="col-md-6 col-12 bg-secondary align-self-end text-center">
                        <button className='w-100'>Entrar</button>
                    </div>
                </form>
            </div>

        </React.Fragment>
    )
}

export default Login