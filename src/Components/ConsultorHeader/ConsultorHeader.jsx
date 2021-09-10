import React from 'react';
import { useHistory } from 'react-router-dom';

import StepBar from '../StepBar/StepBar';
import { FiArrowLeftCircle } from 'react-icons/fi';


const ConsultorHeader = ({ currentStep }) => {

    const history = useHistory();

    return ( 

        <>
            <header className='row container-fluid d-flex flex-column justify-content-between mt-2 mt-lg-4'>
                <nav className='row d-flex justify-content-between align-items-center mb-4'>
                    <FiArrowLeftCircle className='icon-size col-3 p2 bg-white' onClick={() => history.goBack()}/>
                    <div className='col-1 p-2'>Logo</div>
                </nav>

                <StepBar step={currentStep}/>
            </header>
        </>

     );
}
 
export default ConsultorHeader;