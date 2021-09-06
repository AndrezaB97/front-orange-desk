import React, { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'

import '../../style/global-style.css';
import './Input.css';


const Input = ({ type, placeholder, name }) => {

    const [toggle, setToggle] = useState(false)

    return (
        <div className='input-container'>
            <input type={!toggle ? type : 'text'} placeholder={placeholder} {...name} />
            {type === 'password' && (
                toggle ?
                    <IoMdEye size='2.5rem' color='#414141' cursor='pointer' onClick={() => setToggle(false)} />
                    :
                    <IoMdEyeOff size='2.5rem' color='#414141' cursor='pointer' onClick={() => setToggle(true)} />
                )
            }
        </div>
    )
}

export default Input;