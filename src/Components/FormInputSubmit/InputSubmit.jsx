import React from 'react';

import '../../style/global-style.css';
import './InputSubmit.css';

const InputSubmit = ({ event }) => {
    return (
        <input type='submit' onClick={event} />
    )
}

export default InputSubmit