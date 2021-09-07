import React from 'react';

import '../../style/global-style.css';
import './InputSubmit.css';

const InputSubmit = ({ value, event }) => {
    return (
        <input type='submit' onClick={event} value={value} />
    )
}

export default InputSubmit