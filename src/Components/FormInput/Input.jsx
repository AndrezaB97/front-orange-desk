import React, { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs'


const Input = ({ type, placeholder, name, className }) => {

    const style = {
        backgroundColor: '#F4F4F4',
        borderColor: '#F2F2F2'
    }

    const [toggle, setToggle] = useState(false)

    return (
        <div style={style} className='input-group border rounded mt-2'>
            <input style={style} type={!toggle ? type : 'text'} className={className} placeholder={placeholder} {...name} />
            {type === 'password' && (
                toggle ?
                    (
                        <span className='input-group-text bg-transparent border-0'>
                            <BsEye size='1.5rem' color='#6A6A6A' cursor='pointer' onClick={() => setToggle(false)} />
                        </span>
                    )
                    :
                    (
                        <span className='input-group-text bg-transparent border-0'>
                            <BsEyeSlash size='1.5rem' color='#6A6A6A' cursor='pointer' onClick={() => setToggle(true)} />
                        </span>
                    )
                )
            }
        </div>
    )
}

export default Input;