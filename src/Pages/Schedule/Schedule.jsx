import React, { useState } from 'react';

import { Calendar, utils } from 'react-modern-calendar-datepicker';
import ConsultorHeader from '../.././Components/ConsultorHeader/ConsultorHeader';


// import { CalendarContainer } from './CalendarStyle.js';
import './CalendarStyle.css';
import Img from './../../Assets/calendar-img.svg';

const Schedule = () => {
    
    const currentDate = utils().getToday();
    const [selectedDay, setSelectedDay] = useState(currentDate);
    
    const handleMaximumDate = () =>  {
        return {year: currentDate.year, month: currentDate.month + 1, day: currentDate.day};
    };

    return ( 

        <React.Fragment>
            <div className="container-lg d-flex flex-column justify-content-start bg-white container vw-100 vh-100">

                <ConsultorHeader currentStep={'date'}/>

                <main className='mt-1 mt-md-4 d-flex flex-column flex-lg-row justify-content-center align-items-center'>
                    <div className="mt-4 align-self-start ms-2 ms-md-5">
                        <h1 className='text-grey fs-5 fw-normal ms-md-5'>Unidade: SEDE - São Paulo</h1>
                        {/* <h1 className=''>Unidade: FILIAL - Santos</h1> */}
                        <p className='text-black mt-3 mb-lg-4 ms-md-5'>Quais os dias que você precisa ir ao escritório?</p>

                        <img className='img-fluid mt-4 col-lg-10 image' src={ Img } alt='Pessoas diversificadas trabalhando no escritório.'/>
                    </div>

                    <div>
                        <Calendar
                            value={ selectedDay }
                            onChange={ setSelectedDay }
                            minimumDate={ currentDate }
                            maximumDate={ handleMaximumDate() }
                            locale='en'
                            calendarClassName='mt-lg-4'
                        />

                        <div className="g-col-5 align-self-start mt-2 mb-2 w-100">
                            <span>
                                Dia {selectedDay.day < 10 ? `0${selectedDay.day}` : selectedDay.day}/{selectedDay.month < 10 ? `0${selectedDay.month}` : selectedDay.month} - 
                            </span>
                            <span>
                                {25} mesas disponíveis
                            </span>
        
                            <button className='btn-orange mt-3 w-100'>Confirmar data</button>
                        </div>
                    </div>
                </main>
                
            </div>
        </React.Fragment>

     );
}
 
export default Schedule;