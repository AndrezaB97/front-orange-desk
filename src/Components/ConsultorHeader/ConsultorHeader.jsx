import React from 'react';
import { useHistory } from 'react-router-dom';

import StepBar from '../StepBar/StepBar';
import BackButton from '../.././Assets/arrow-left.svg';

const ConsultorHeader = ({ currentStep }) => {

    const history = useHistory();

    return ( 

        <>
            <header className='row container-fluid d-flex flex-column justify-content-between mt-2'>
                <nav className='row d-flex justify-content-between mb-5'>
                    <button className='col-3 p2 bg-white' onClick={() => history.push('/')}> <img className='img-fluid' src={ BackButton } alt='Botão para retornar à página anterior.'/> </button>
                    <div className='col-1 p-2'>Logo</div>
                </nav>

                <StepBar step={currentStep}/>
            </header>
        </>

     );
}
 
export default ConsultorHeader;