// Importing modules:
import React from 'react'
import { Link, useHistory } from 'react-router-dom'

// Import components:
import { FiArrowLeftCircle } from 'react-icons/fi'
import ConsultorHeader from '../.././Components/ConsultorHeader/ConsultorHeader'
import DesksLayoutImg from './../../Assets/desks-layout.svg'
import Input from './../../Components/FormInput/Input'

// Importing style-sheets:

const SelectDesk = () => {

    const inputStyle = {
        backgroundColor: '#F4F4F4',
        borderColor: '#F2F2F2'
    }

    const accordionHeader = {
        color: '#404099'
    }

    return (
        <React.Fragment>

            <div className="container-fluid">
                <ConsultorHeader currentStep={'desk'} />

                <div className="container mt-3">
                    <h5>Escolha sua estação de trabalho.</h5>
                    <img className='img-fluid' src={DesksLayoutImg} alt="Imagem com layout das mesas" />
                    <form className='mt-3'>
                        <input
                            type='number'
                            name=''
                            id=''
                            style={inputStyle}
                            className='form-control border-0 shadow-none'
                            placeholder='Digite o nº da mesa'
                            min='1'
                            max='40'
                            required />

                    </form>
                    <div class="accordion accordion-flush mt-3" id="accordionFlush">
                        <div class="accordion-item text-center">
                            <p class="accordion-header" id="flush-showDesks">
                                <button style={accordionHeader} class="collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Mostrar mesas disponíveis
                                </button>
                            </p>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-showDesks" data-bs-parent="#accordionFlush">
                                <div class="accordion-body">01 | 02 | 03</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </React.Fragment>
    )
}

export default SelectDesk;