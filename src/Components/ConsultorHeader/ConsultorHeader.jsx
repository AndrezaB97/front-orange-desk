import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GrPrevious } from 'react-icons/gr'

import Logo from '.././Logo/Logo';
import { Header } from './ConsultorHeaderStyle';

const ConsultorHeader = ({currentStep, stepLabel}) => {

    const history = useHistory();

    return ( 

        <>
            <Header>
                <Link to='/'> <Logo/> </Link>
                
                <nav className="step-bar-container">

                    <button onClick={ () => history.goBack() } className={`previous-btn`}> <GrPrevious/> </button>
                    <div className="step-container">
                        <div className="step">{ `${currentStep}. ${stepLabel}` }</div>
                    </div>
                </nav>
            </Header>
        </>

     );
}
 
export default ConsultorHeader;