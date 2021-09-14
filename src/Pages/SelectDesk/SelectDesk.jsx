// Importing modules:
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Import components:
import ConsultorHeader from '../.././Components/ConsultorHeader/ConsultorHeader';
import DesksLayoutImg from './../../Assets/desks-layout.svg';

// Importing style-sheets:

const SelectDesk = () => {

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
            btnSelectDesk.removeAttribute('disabled');
            btnSelectDesk.setAttribute('style', 'btn-orange');
        }
        else {
            btnSelectDesk.setAttribute('disabled', '')
            btnSelectDesk.setAttribute('style', 'background-color: var(--grey); color: var(--dark-grey); border-color: var(--grey)')
        }
    }, [HandleChange]);

    return (
        <React.Fragment>

            <div className="container-lg d-flex flex-column justify-content-start bg-white container vw-100 vh-100">
                <ConsultorHeader currentStep={'desk'} />
                
                <main className="mt-1 mt-md-5 d-flex flex-column flex-lg-row justify-content-center align-items-center">
                    <div className="container-lg d-flex flex-column flex-lg-row justify-content-around align-items-start">
                        <p className='d-md-block text-start text-md-center col-md-8 fw__medium d-lg-none ms-auto me-auto text-black mt-4 mb-md-3 mt-lg-5'>Escolha sua estação de trabalho</p>

                        <img className='img-fluid mt-4 ms-auto me-auto col-lg-4' src={ DesksLayoutImg } alt='Imagem ilustrando layout de um escritório FCamara.'/>

                        <form className='col-md-8 col-12 col-lg-4 mt-4 ms-auto me-auto mt-md-5'>
                            <h5 className='d-lg-block fw__medium d-none mb-md-3'>Escolha sua estação de trabalho</h5>
                            <input onChange={HandleChange}
                                type='number'
                                style={inputStyle}
                                className='text-start fw__light form mt-lg-5 form-control shadow-none'
                                placeholder='Digite o nº da mesa que quer reservar'
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
                            <Link to='/review' className='text-decoration-none'>
                                <button id='btnSelectDesk' className='form-control text-center btn-orange shadow-none mb-3' disabled >
                                    Escolher estação de trabalho
                                </button>
                            </Link>
                        </form>
                    </div>
                </main>

            </div>

        </React.Fragment>
    )
}

export default SelectDesk;