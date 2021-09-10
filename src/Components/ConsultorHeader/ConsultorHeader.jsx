import React from 'react';
import { useHistory } from 'react-router-dom';

import StepBar from '../StepBar/StepBar';
import { FiArrowLeftCircle } from 'react-icons/fi'

const ConsultorHeader = ({ currentStep }) => {

    const history = useHistory();

    return (

        <>
            <header className='row container-fluid d-flex flex-column justify-content-between mt-2'>
                <nav className='row d-flex justify-content-between mb-5'>
                    <button className='col-3 p2 bg-white'>
                        <FiArrowLeftCircle size='24' color='#6A6A6A' onClick={() => history.push('/')}/>
                    </button>
                    <div className='col-1 p-2'>Logo</div>
                </nav>

                <StepBar step={currentStep}/>
            </header>
        </>

     );
}
 
export default ConsultorHeader;