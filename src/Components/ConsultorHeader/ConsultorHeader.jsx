import React from 'react';
import { useHistory, Link } from 'react-router-dom';

import StepBar from '../StepBar/StepBar';
import { FiArrowLeftCircle } from 'react-icons/fi';

import Logo from './../../Assets/logo-Orange-Desk.svg';

const ConsultorHeader = ({ currentStep }) => {

    const history = useHistory();

    return (

        <>

            <header className='container-lg d-flex flex-column justify-content-between mt-3 mt-lg-4'>
                <nav className='col-lg-10 col-11 container-fluid d-flex justify-content-between align-items-center mb-4'>
                    <FiArrowLeftCircle className='icon-size col-2 bg-white' onClick={() => history.goBack()}/>
                    <Link className='col-3 col-lg-1' to='/'>
                        <img className='img-fluid p-2' src={ Logo } alt='Logotipo FCamara'/>
                    </Link>
                </nav>

                <StepBar step={currentStep}/>
            </header>
        </>

     );
}
 
export default ConsultorHeader;