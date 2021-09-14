// Importing modules:
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

// Import components:
import ConsultorHeader from '../.././Components/ConsultorHeader/ConsultorHeader'
import DesksLayoutImg from './../../Assets/desks-layout.svg'


// Importing style-sheets:

const SelectDesk = () => {
    const history = useHistory()

    const inputStyle = {
        backgroundColor: '#F4F4F4'
    }

    const accordionHeader = {
        color: '#404099'
    }

    const [value, setValue] = useState('')
    const HandleChange = (e) => setValue(e.target.value)

    useEffect(() => {
        const btnSelectDesk = document.getElementById('btnSelectDesk')
        if ((value !== '' && value !== undefined) && value.length <= 2 && (Number(value) >= 1 && Number(value) <= 40)) {
            btnSelectDesk.removeAttribute('disabled')
            btnSelectDesk.setAttribute('style', 'background-color: #FE4400; color: white')
        }
        else {
            btnSelectDesk.setAttribute('disabled', '')
            btnSelectDesk.setAttribute('style', 'background-color: #EAEAEA; color: #6A6A6A')
        }
    }, [HandleChange])

    const submit = () => {
        localStorage.setItem('desk', value)
        history.push("review/");
    }

    return (
        <React.Fragment>

            <div className="container-fluid vh-100">

                <ConsultorHeader currentStep={'desk'} />
                <div className="container mt-md-0 mt-3 mb-md-0 mb-3 text-center">
                    <div className="row">
                        <p className='d-md-none d-block'>Escolha sua estação de trabalho</p>
                        <div className="col-md-8 col-12 text-md-start">
                            <img className='img-fluid w-75' src={DesksLayoutImg} alt="Imagem com layout das mesas" />
                        </div>

                        <div className='col-md-4 col-12 mt-md-5 mt-3'>
                            <h5 className='d-md-block d-none mb-md-3'>Escolha sua estação de trabalho</h5>
                            <input onChange={HandleChange}
                                type='number'
                                style={inputStyle}
                                className='text-center form-control border-0 shadow-none'
                                placeholder='Digite o nº da mesa (01 a 40)'
                                min='1'
                                max='40'
                                required />
                            {((value !== '' && Number(value) < 1) || Number(value) > 40) && <span className='text-danger'>O valor deve estar entre 1 e 40</span>}
                            <div class="accordion accordion-flush mt-3 mb-5" id="accordionFlush">
                                <div class="accordion-item text-center">
                                    <p class="accordion-header" id="flush-showDesks">
                                        <button style={accordionHeader} class="collapsed bg-white shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Mostrar mesas disponíveis
                                        </button>
                                    </p>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-showDesks" data-bs-parent="#accordionFlush">
                                        <div class="accordion-body">01 | 02 | 03</div>
                                    </div>
                                </div>
                            </div>
                            <button id='btnSelectDesk' onClick={ submit } className='form-control border-0 shadow-none mb-md-0 mb-3'  >
                                Escolher estação de trabalho
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </React.Fragment>
    )
}

export default SelectDesk;