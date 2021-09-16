// Importing modules:
import React from 'react'
import { Link, useHistory } from 'react-router-dom';

// Import components:
import SignsImg from './../../Assets/signs.svg';
import NumeredDeskImg from './../../Assets/numered-desk.svg';
import { FiArrowLeftCircle } from 'react-icons/fi';
import Logo from './../../Assets/logo-Orange-Desk.svg';

const DeskInstructions = () => {

    document.title = 'INSTRUCTIONS | Orange Desk;'

    const history = useHistory()

    return (
        <React.Fragment>

            <div className="container-lg d-flex flex-column justify-content-start bg-white container vw-100 vh-100">
                <header className='col-lg-10 col-11 container-fluid d-flex justify-content-between align-items-center mb-4 mt-3 mt-lg-4'>
                    <FiArrowLeftCircle className='icon-size col-2 bg-white' color='#6A6A6A' onClick={() => history.goBack()} />
                
                    <Link className='col-3 col-md-2 col-lg-1' to='/'>
                        <img className='img-fluid p-2' src={ Logo } alt='Logotipo FCamara'/>
                    </Link>
                </header>

                <main className="row vw-100 container-lg d-flex flex-column mt-md-4">
                    <div className='vw-100 ms-auto me-auto'>
                        <p className='text-start text-md-center text-black md-fs-16 fs-12 fw__light'>Nessa etapa você vai escolher o andar e o número da mesa que irá ocupar.</p>
                        <h4 className='text-dark-orange text-start text-md-center fw__bold mt-1'>Mas fique tranquilo!</h4>
                    </div>

                    <div className='d-md-flex flex-md-row col-md-11 col-lg-8 justify-content-md-between ms-auto me-auto mt-md-5'>
                        <div className='text-black fw__light mt-1 d-flex flex-column justify-content-md-start align-items-center'>
                            <p className='col-md-8'>Quando chegar no escritório, as placas vão te orientar.</p>
                            <img src={ SignsImg } className='img-fluid mt-3 col-8' alt="Pessoa lendo placas de orientação" />
                        </div>
                        <div className='text-black fw__light mt-1 d-flex flex-column justify-content-md-start align-items-center'>
                            <p className='col-md-8'>E você encontrará sua mesa numerada.</p>
                            <img src={ NumeredDeskImg } className='img-fluid mt-3 col-10' alt="Mesa laranja com objetos de escritório em cima." />
                        </div>
                    </div>
                    
                    <div className='col-md-10 col-lg-8 mt-md-5 align-self-center'>
                        <Link to='/desks' id='btnContinue' className='text-center btn-orange form-control shadow-none'>
                            Obrigado (a) por avisar!
                        </Link>
                    </div>
                </main>
            </div>

        </React.Fragment>
    )
}

export default DeskInstructions;