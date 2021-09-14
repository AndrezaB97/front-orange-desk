// Importing modules:
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';

// Importing services:
import api from '../../services/api'

// Import components:
import Input from '../../Components/FormInput/Input';
import { FiArrowLeftCircle } from 'react-icons/fi';

// Importing style-sheets:
import Logo from './../../Assets/logo-Orange-Desk.svg';

const Register = () => {

  document.title = 'REGISTER | Orange Desk';

  const { handleSubmit, register, formState: { errors } } = useForm();

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

      <div className="container-lg d-flex flex-column align-items-center vh-100">

        <header className='col-lg-10 col-11 container-fluid d-flex justify-content-between align-items-center mb-4 mt-3 mt-lg-4'>
          <FiArrowLeftCircle className='icon-size col-2 bg-white' color='#6A6A6A' onClick={() => history.goBack()} />
          
          <Link className='col-3 col-md-2 col-lg-1' to='/'>
            <img className='img-fluid p-2' src={ Logo } alt='Logotipo FCamara'/>
          </Link>
        </header>

        <main className="container-lg d-flex flex-column justify-content-center align-items-center mt-5">
          <div className='col-12 col-md-6 ms-4'>
              <h5 className='fs-5 fw__extra-bold'>Vamos começar?</h5>
              <p className='fs__light'>Só precisamos de algumas informações.</p>
          </div>

          <div className="row col-12 col-md-6 mt-4">
            <form className='col-12' onSubmit={handleSubmit(onSubmit)}>
              <Input type={'text'} className={'form-control form fw__light shadow-none'} placeholder={'Nome *'} name={register('name', { required: true })} />
              {errors.name && errors.name.type === "required" && <span className="text-danger">Campo obrigatório</span>}
              <Input type={'email'} className={'form-control form fw__light shadow-none'} placeholder={'Email *'} name={register('email', { required: true })} />
              {errors.email && errors.email.type === "required" && <span className="text-danger">Campo obrigatório</span>}
              <Input type={'password'} className={'form-control form fw__light shadow-none'} placeholder={'Senha *'} name={register('password', { required: true })} />
              {errors.password && errors.password.type === "required" && <span className="text-danger">Campo obrigatório</span>}
              <Input type={'password'} className={'form-control form fw__light shadow-none'} placeholder={'Confirme a senha *'} name={register('password_confirmation', { required: true })} />
              {errors.password_confirmation && errors.password_confirmation.type === "required" && <span className="text-danger">Campo obrigatório</span>}
              <button id='btnRegister' className='btn-orange w-100 mt-5'>Criar cadastro e continuar</button>
              <ToastContainer />
            </form>
            
            <Link className='btn-white mt-3' to='/login'>Já tenho login</Link>
              
          </div>
        </main>

      </div>

    </React.Fragment>
  )
}

export default Register