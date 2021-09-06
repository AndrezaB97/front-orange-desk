import React from 'react';

import '../../style/global-style.css';
import './InputText.css';

const InputText = ({ placeholder, name }) => {
    return ( 
        <input type="text" placeholder={placeholder} {...name} />
     )
}
 
export default InputText;