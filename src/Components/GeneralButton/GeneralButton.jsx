import React from 'react';

import '../../style/global-style.css';
import './GeneralButton.css';

const GeneralButton = ({ children }) => {
    return ( 

        <button>{ children }</button>

     );
}
 
export default GeneralButton;