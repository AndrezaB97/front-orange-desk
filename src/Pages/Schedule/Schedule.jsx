import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


import { Calendar, utils } from 'react-modern-calendar-datepicker';
import ConsultorHeader from '../.././Components/ConsultorHeader/ConsultorHeader';
import { toast, ToastContainer } from 'react-toastify';


// import { CalendarContainer } from './CalendarStyle.js';
import './CalendarStyle.css';
import Img from './../../Assets/calendar-img.svg';
import api from './../../services/api';

const Schedule = () => {
    const history = useHistory();
    
    document.title = 'CALENDAR | Orange Desk';

    const currentDate = utils().getToday();
    const [selectedDay, setSelectedDay] = useState(currentDate);
    const [deskNumbers, setNumber] = useState(0);
    
    const handleMaximumDate = () =>  {
        return {year: currentDate.year, month: currentDate.month + 1, day: currentDate.day};
    };

    const confirmData = () => {
        let date = new Date(`${selectedDay.year}-${selectedDay.month}-${selectedDay.day}`);
        localStorage.setItem('date', date);

        history.push("/desks");
    }

    const [unity, setUnity] = useState({});

    useEffect(() => {
        let unityId = localStorage.getItem('unity_id');
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
        getUnities();
        getDesksAvailable(selectedDay);
    }, []);
    
    async function getDesksAvailable(selectedDay) {
        // desk_available

        let selectedDate = `${selectedDay.year}-${selectedDay.month}-${selectedDay.day}`;

        localStorage.setItem('date_desk', selectedDate);

        var config = {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
          }

        setSelectedDay(selectedDay);

        var dataDesk = {
            date: selectedDate,
            unity_id: localStorage.getItem('unity_id')
        };

        try {
          const { data } = await api.post(`/desk_available/`, dataDesk, config);
          setNumber(data['number']);
        } catch (error) {
          toast.error("Erro ao buscar mesas disponíveis", {
              position: toast.POSITION.TOP_RIGHT
          });
        }
    }


    return ( 

        <React.Fragment>
            <div className="container-lg d-flex flex-column justify-content-start bg-white container vw-100 vh-100">

                <ConsultorHeader currentStep={'date'}/>

                <main className='mt-3 d-flex flex-column flex-lg-row justify-content-center align-items-center'>
                    <div className="mt-4 align-self-start">
                        <h1 className='text-grey fs-5 fw-normal'>Unidade: {unity.is_main ? 'Sede' : 'Filial'} - { unity?.address?.city }</h1>
                        {/* <h1 className=''>Unidade: FILIAL - Santos</h1> */}

                        <p className='text-black mt-3 mb-lg-4'>Quais os dias que você precisa ir ao escritório?</p>

                        <img className='img-fluid mt-4 col-lg-10 image' src={ Img } alt='Pessoas diversificadas trabalhando no escritório.'/>
                    </div>

                    <div>
                        <Calendar
                            value={ selectedDay }
                            onChange={ selectedDay => getDesksAvailable(selectedDay) }
                            minimumDate={ currentDate }
                            maximumDate={ handleMaximumDate() }
                            locale='en'
                            calendarClassName='mt-lg-4'
                        />

                        <div className="g-col-5 align-self-start mt-2 mb-2 w-100">
                            <span className='fw__light text-blue'>
                                Dia {selectedDay.day < 10 ? `0${selectedDay.day} - ` : selectedDay.day}/{selectedDay.month < 10 ? `0${selectedDay.month} - ` : `${selectedDay.month} - `}
                            </span>
                            <span className='fw__extra-bold text-blue'>
                                {deskNumbers} mesas disponíveis
                            </span>
        
                            <button className='btn-orange mt-lg-4 w-100' onClick={confirmData}>Confirmar data</button>
                        </div>
                    </div>
                </main>
                
            </div>

            <ToastContainer />
        </React.Fragment>

     );
}
 
export default Schedule;