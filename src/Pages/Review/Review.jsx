// Importing modules:
import React from 'react';
import { useForm } from 'react-hook-form';

import ConsultorHeader from '../../Components/ConsultorHeader/ConsultorHeader';

const Review = () => {

    document.title = 'REVIEW | Orange Desk';
    
    const { handleSubmit, register, formState: { errors } } = useForm();

    return ( 

        <React.Fragment>
            <div className="container-lg container-md d-flex flex-column justify-content-start bg-white container vw-100 vh-100">

                <ConsultorHeader currentStep={ 'review' } />

                <main clasName= 'container-lg row w-100 d-flex justify-content-start flex-column align-items-center flex-lg-row'>
                    
                    <div className='col-lg-6 col-md-10 ms-auto me-auto'>
                        <p className='text-black mt-4 mt-lg-5 text-center'>Confira as informações</p>
                
                        <div className='mt-4 ms-4'>
                            <h4 className='text-black fw__medium'>Jéssica da Silva</h4>
                            <p className='text-grey fw__light'>jessicasilva@fcamara.com.br</p>
                        </div>

                        <div className='mt-4 ms-4 me-4'>
                            <div className='d-flex justify-content-between text-grey fw__light'>
                                <p>data</p>
                                <p>mesa escolhida</p>
                            </div>

                            <div className='d-flex justify-content-between text-blue fw__bold'>
                                <h4>15/09/2021</h4>
                                <h4>24</h4>
                            </div>

                            <div className='mt-3'>
                                <p className='text-grey fw__light'>unidade</p>
                                <p className='text-black'>Sede - São Paulo</p>
                                <p className='text-black fs-12 fw__light'>
                                    Rua Bela Cintra, 986 - 2° andar<br/>
                                    Consolação, São Paulo - SP
                                </p>
                            </div>

                            <div>
                                <form className='mt-5' onSubmit={ handleSubmit() }>
                                    <div className='d-flex'>
                                        <input type={'checkbox'}
                                                value={ true } 
                                                className={'form-control me-4 fw__light checkbox-size shadow-none'} 
                                                name={register('checkbox', { required: true })} />
                                        <label className='text-grey fs-10 fw__light d-flex justify-space-between'>
                                            Eu me comprometo a respeitar as regras de distanciamento e os demais protocolos com o objetivo de combater a disseminação do coronavírus.
                                            {errors.password && errors.password.type === "required" && <span className="text-danger">Campo obrigatório</span>}
                                        </label>
                                    
                                    </div>            
                        
                                    <button id='btnRegister' className='btn-orange w-100 mt-3 mb-2'>Confirmar agendamento</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </main>

            </div>
        </React.Fragment>

     );
}
 
export default Review;