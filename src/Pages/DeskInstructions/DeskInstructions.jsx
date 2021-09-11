// Importing modules:
import React from 'react'
import { Link, useHistory } from 'react-router-dom'

// Import components:
import SignsImg from './../../Assets/signs-image.svg'
import NumeredDesk from './../../Assets/numered-desk.svg'
import { FiArrowLeftCircle } from 'react-icons/fi'

// Importing style-sheets:
import './DeskInstructions.css';

const DeskInstructions = () => {

    const history = useHistory()

    return (
        <React.Fragment>

            <div className="container-fluid d-flex flex-column align-items-center vh-100">
                <header className='container d-flex justify-content-between mt-3'>
                    <button className='bg-white'>
                        <FiArrowLeftCircle size='24' color='#FE885C' onClick={() => history.goBack()} />
                    </button>
                    <div>Logo</div>
                </header>

                <div className="container mt-3">
                    <div className='mb-3'>
                        <p>Nessa etapa você vai escolher o andar e o número da mesa que irá ocupar.</p>
                        <h4 style={{color: '#B93200'}}>Mas fique tranquilo!</h4>
                        <p>Quando chegar no escritório, as placas vão te orientar!</p>
                        <img src={SignsImg} className='img-fluid' alt="Pessoa lendo placas de orientação" />
                    </div>
                    <div className='mb-3'>
                        <p>E você encontrará sua mesa numerada.</p>
                        <img src={NumeredDesk} className='img-fluid' alt="Mesa laranja com objetos em cima" />
                        <Link id='btnContinue' className='mt-2 form-control border-0 shadow-none text-center text-decoration-none'>Continuar</Link>
                    </div>
                </div> 
            </div>

        </React.Fragment>
    )
}

export default DeskInstructions;