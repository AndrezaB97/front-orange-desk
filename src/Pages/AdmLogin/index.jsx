import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import api from './../../services/api';
import { toast, ToastContainer } from 'react-toastify';
import './AdmLoginStyle.css';

const AdmLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    api.post(`/auth/adm`, data)
    .then(res => {
      toast.success("Bem vindo!", {
        position: toast.POSITION.TOP_RIGHT
      });
    }).catch(function (error) {
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT
      });
    })
  };

  return(
    <React.Fragment>
      <div className="d-flex justify-content-center vh-100 align-items-center">
        <div className="card w-50 p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h5 className="text-center">Login ADM</h5>
            <input type="text" className="form-control" placeholder="username"
            {...register('username', { required: true})}/>
            {errors.username && errors.username.type === "required" && <span className="text-danger">Campo obrigatório</span>}

            <input type="password" className="form-control mt-3" placeholder="password"
            {...register('password', { required: true})}/>
            {errors.password && errors.password.type === "required" && <span className="text-danger">Campo obrigatório</span>}
            
            <button className="btn-orange w-100 mt-3">Logar</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
}

export default AdmLogin;