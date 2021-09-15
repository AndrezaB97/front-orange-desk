import React, { useState, useEffect } from 'react';

import ConsultorHeader from '../../Components/ConsultorHeader/ConsultorHeader';
import Img from './../../Assets/consultor-page.svg';
import api from './../../services/api';
import { Link, useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Office = () => {
    const history = useHistory();

    const [office, setOffice] = useState('');
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        async function getUnities() {
          try {
            const { data } = await api.get("/unity");
            setCardData(data);
          } catch (error) {
            toast.error("Erro ao buscar unidades", {
                position: toast.POSITION.TOP_RIGHT
            });
          }
        }
        getUnities();
      }, []);


    return ( 
        
        <React.Fragment>
            <div className="container-lg container-md d-flex flex-column justify-content-start bg-white container vw-100 vh-100">

                <ConsultorHeader currentStep={'office'}/>

                <main className= 'container-fluid row w-100 d-flex justify-content-start flex-column align-items-center flex-lg-row'>
                    <img className='img-fluid w-md-25 col-lg-8 col-10' src={ Img } alt='Colegas conversando de forma descontraída no escritório.' />

                    <div className='container-fluid col-lg-4 flex-column justify-content-evenly align-items-start mt-3'>
                        
                        <div className="col-md-12 mb-3 ms-2 fw__medium">
                            <p>Em qual unidade FCamara você vai?</p>
                        </div>

                        <div className='d-flex flex-column flex-md-row flex-lg-column w-100'>
                        
                        {cardData.map((item) => (
                            <>
                            <Link className='card hover btn w-100 m-md-1 mb-1' value={item.id}
                            onClick={() => {
                                localStorage.setItem('unity_id', item.id);
                                console.log(localStorage.getItem('unity_id'));
                                history.push("/office/schedule/");
                            }} 
                            >
                                <div className="container d-flex flex-row justify-content-between 
                                align-items-center p-3 rounded text-white">
                                    <div className="text-start">

                                        <h1 className=' fs-3 fw-bold text-orange'>{ item.address.city }</h1>
                                        <p className='fs-10 fw-normal text-black'>
                                            { item.address.road }, 
                                            { item.address.number } - 2° andar<br/>
                                            { item.address.district }, 
                                            { item.address.city } - 
                                            { item.address.state }
                                        </p>
                                    </div>

                                    <div className="text-end fs-1 fw-bold text-blue">
                                        { console.log(item.is_main) }
                                        { item.is_main === 1 ? 'sede' : 'filial' }                             

                                        
                                    </div>

                                </div>
                            </Link>
                            </>
                        ))}
                        </div>

                    </div>
                </main>
            </div>

            <ToastContainer />
        </React.Fragment>

     );
}
 
export default Office;