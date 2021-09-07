import React, { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'

import '../../style/global-style.css';
// import './Input.css';


const Input = ({ type, placeholder, name, className }) => {

    const [toggle, setToggle] = useState(false)

    return (
        <div className='input-group border rounded mt-2'>
            <input type={!toggle ? type : 'text'} className={className} placeholder={placeholder} {...name} />
            {type === 'password' && (
                toggle ?
                    (
                        <span className='input-group-text bg-transparent border-0'>
                            <IoMdEye size='1.5rem' color='#000' opacity='60%' cursor='pointer' onClick={() => setToggle(false)} />
                        </span>
                    )
                    :
                    (
                        <span className='input-group-text bg-transparent border-0'>
                            <IoMdEyeOff size='1.5rem' color='#000' opacity='60%' cursor='pointer' onClick={() => setToggle(true)} />
                        </span>
                    )
                )
            }
        </div>
    )
}

export default Input;