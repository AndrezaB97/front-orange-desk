import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '.././Logo/Logo';
import StepBar from '.././StepBar/StepBar';

import { Header } from './ConsultorHeaderStyle';

const ConsultorHeader = () => {
    return ( 

        <>
            <Header>
                <Link to='/'> <Logo/> </Link>
                <StepBar></StepBar>
            </Header>
        </>

     );
}
 
export default ConsultorHeader;