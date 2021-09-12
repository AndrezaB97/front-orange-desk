// Importing modules:
import React from 'react'
import { Link, useHistory } from 'react-router-dom'

// Import components:
import { FiArrowLeftCircle } from 'react-icons/fi'
import ConsultorHeader from '../.././Components/ConsultorHeader/ConsultorHeader'

// Importing style-sheets:

const SelectDesk = () => {
    return (
        <React.Fragment>
            <ConsultorHeader currentStep={'desk'}/>
        </React.Fragment>
    )
}

export default SelectDesk;