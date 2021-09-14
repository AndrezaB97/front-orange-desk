// Importing modules:
import React from 'react'
import { Link, useHistory } from 'react-router-dom'

// Import components:
import SignsImg from './../../Assets/signs.svg'
import NumeredDeskImg from './../../Assets/numered-desk.svg'
import { FiArrowLeftCircle } from 'react-icons/fi'
import { FiThumbsUp } from 'react-icons/fi'
import Logo from './../../Assets/logo-Orange-Desk.svg'

// Importing style-sheets:
import './DeskInstructions.css'

const DeskInstructions = () => {

    const history = useHistory()

    return (
        <React.Fragment>

            <div className="container-fluid d-flex flex-column vh-100">
                <header className='container d-flex justify-content-between mt-3'>
                    <button className='bg-white'>
                        <FiArrowLeftCircle size='24' color='#FE885C' onClick={() => history.goBack()} />
                    </button>
                    <Link to='/'>
                        <img className='img-fluid' style={{width: '2.938rem', height: '2.638rem'}} src={Logo} alt="Logotipo OrangeDesk" />
                    </Link>
                </header>

                <div className="container d-flex h-100 mt-md-0 mt-3">
                    <div className="row align-self-md-center text-md-start text-center">
                        <p className='mb-md-5'>Nessa etapa você vai escolher o andar e o número da mesa que irá ocupar.</p>
                        <h4 style={{color: '#B93200'}}>Mas fique tranquilo!</h4>
                        <div className='col-md-6 col-12 d-md-flex'>
                            <p>Quando chegar no escritório, as placas vão te orientar.</p>
                            <img src={SignsImg} className='img-fluid' alt="Pessoa lendo placas de orientação" />
                        </div>
                        <div className='col-md-6 col-12 d-md-flex mt-md-0 mt-3'>
                            <p>E você encontrará sua mesa numerada.</p>
                            <img src={NumeredDeskImg} className='img-fluid' alt="Mesa laranja com objetos em cima" />
                        </div>
                        <Link to='/#' id='btnLike' className='btnLink d-md-none d-flex justify-content-center align-items-center rounded'>
                            <FiThumbsUp size='1.5rem' />
                        </Link>
                        <Link to='/#' id='btnContinue' className='btnLink d-none d-md-block mt-3 form-control border-0 shadow-none text-center text-decoration-none'>Continuar</Link>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default DeskInstructions;