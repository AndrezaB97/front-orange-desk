import React from 'react';

import './GeneralButton.css';

const GeneralButton = ({ children }) => {
    return ( 

        <button className='w-100 btn-orange'>{ children }</button>

     );
}
 
export default GeneralButton;