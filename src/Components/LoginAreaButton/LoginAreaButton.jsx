import React from 'react';

import '../../style/global-style.css';
import './LoginAreaButton.css';

const LoginButton = () => {
    return ( 

        <button className='login-button'>
            <div className="login-img"></div>
            <span className='login-state'></span>
        </button>

     );
}
 
export default LoginButton;