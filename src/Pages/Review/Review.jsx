// Importing modules:
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import api from './../../services/api';
import { toast, ToastContainer } from 'react-toastify';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

import ConsultorHeader from '../../Components/ConsultorHeader/ConsultorHeader';

const Review = () => {

    document.title = 'REVIEW | Orange Desk';
    
    const { handleSubmit, register, formState: { errors } } = useForm();
    const date = (new Date(localStorage.getItem('date'))).toLocaleDateString('pt-BR', {timeZone: 'UTC'});

    var dateRequest = new Date(localStorage.getItem('date'));

    dateRequest = moment(dateRequest).format("YYYY-MM-DD");

    const desk = localStorage.getItem('desk');
    const unityId = localStorage.getItem('unity_id');

    const [unity, setUnity] = useState([]);
    const [auth, setAuth] = useState({});

    const history = useHistory()

    const [checked, setChecked] = useState(false);

    const HandleCheckbox = () => setChecked(!checked);
    useEffect(() => {
        const btnConfirm = document.getElementById('btnConfirm');
        checked ? btnConfirm.removeAttribute('disabled') : btnConfirm.setAttribute('disabled', '');
    }, [HandleCheckbox])

    var config = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }

    const onSubmit = async () => {
        try {

            console.log(dateRequest);

            const data = {unity_id: unityId, desk: desk, date: dateRequest}

            await api.post('/reserve', data, config);

            history.push("/confirmation");

            toast.success("Reserva feita com sucesso!", {
                position: toast.POSITION.TOP_RIGHT
            });
        } catch (err) {
            console.log(err.response.data);
            toast.error(err.response.data[0].message, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    };

    useEffect(() => {
        async function getUnities() {
            try {
              const { data } = await api.get(`/unity/${unityId}`);
              setUnity(data);
            } catch (error) {
              toast.error("Erro ao buscar unidades", {
                  position: toast.POSITION.TOP_RIGHT
              });
            }
        }

        async function getAuthUser() {

            try {
              const { data } = await api.get(`/auth/`, config);
                console.log(data);
                setAuth(data);
            } catch (error) {
              toast.error("Erro ao buscar unidades", {
                  position: toast.POSITION.TOP_RIGHT
              });
            }
        }

        // auth
        getUnities();
        getAuthUser();
      }, []);

    return (

        <React.Fragment>
            <div className="container-lg container-md d-flex flex-column justify-content-start bg-white container vw-100 vh-100">

                <ConsultorHeader currentStep={'review'} />

                <main clasName='container-lg row w-100 d-flex justify-content-start flex-column align-items-center flex-lg-row'>

                    <div className='col-lg-6 col-md-10 ms-auto me-auto'>
                        <p className='text-black mt-4 mt-lg-5 text-center'>Confira as informações</p>

                        <div className='mt-4 ms-4'>
                            <h4 className='text-black fw__medium'>{ auth.name }</h4>
                            <p className='text-grey fw__light'>{ auth.email }</p>
                        </div>

                        <div className='mt-4 ms-4 me-4'>
                            <div className='d-flex justify-content-between text-grey fw__light'>
                                <p>data</p>
                                <p>mesa escolhida</p>
                            </div>

                            <div className='d-flex justify-content-between text-blue fw__bold'>
                                <h4>{ date }</h4>
                                <h4>{ desk }</h4>
                            </div>

                            <div className='mt-3'>
                                <p className='text-grey fw__light'>unidade</p>
                                <p className='text-black'>{ unity.is_main ? 'Sede' : 'Filial' } - { unity?.address?.city }</p>
                                <p className='text-black fs-12 fw__light'>
                                    { unity?.address?.road }, { unity?.address?.number } - 2° andar<br/>
                                    { unity?.address?.district }, { unity?.address?.city } - { unity?.address?.state }
                                </p>
                            </div>

                            <div>
                            <div className='mt-5'>
                                    <div className='container p-0'>
                                        <div className="row align-items-center">
                                            <div className="col-2 text-center">
                                                <input type='checkbox'
                                                    id='btnCheck'
                                                    className={'fw__light checkbox-size shadow-none'}
                                                    onClick={HandleCheckbox} />
                                            </div>
                                            <div className="col-10">
                                                <label for='' className='text-grey fs-10 fw__light'>
                                                    Eu me comprometo a respeitar as regras de distanciamento e os demais protocolos com o objetivo de combater a disseminação do coronavírus.
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <button id='btnConfirm' className='btn-orange w-100 mt-3 mt-lg-5 mb-2' onClick={onSubmit}>Confirmar agendamento</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>

            </div>
            <ToastContainer />
        </React.Fragment>

    );
}

export default Review;