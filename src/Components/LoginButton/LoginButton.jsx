import React from 'react';

import '../../style/global-style.css';
import './LoginButton.css';

const LoginButton = ({ children }) => {
    return ( 

        <button className='login-button'>
            <span>{ children }</span>
        </button>

     );
}
 
export default LoginButton;