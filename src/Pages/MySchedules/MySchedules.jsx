import React from 'react';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import Logo from './../../Assets/logo-Orange-Desk.svg';
import { FiXCircle } from 'react-icons/fi';

const MySchedules = () => {

    const history = useHistory();

    return (
        <React.Fragment>

            <div className="container-lg container-md d-flex flex-column justify-content-start bg-white container vw-100 vh-100">

                <header className='container-lg d-flex flex-column justify-content-between mt-3 mt-lg-4'>
                    <nav className='col-lg-10 col-11 container-fluid d-flex justify-content-between align-items-center mb-4'>
                        <FiArrowLeftCircle className='icon-size col-2 bg-white' color='#6A6A6A' onClick={() => history.goBack()} />
                        <Link className='col-3 col-md-2 col-lg-1' to='/'>
                            <img className='img-fluid p-2' src={Logo} alt='Logotipo FCamara' />
                        </Link>
                    </nav>
                </header>


                <div className="container-lg d-flex flex-column col-md-6">
                    <h5 className='fw__medium'>Olá, Jéssica da Silva!</h5>
                    <p className="fs-12 fw__light text-grey">veja aqui suas reservas no OrangeDesk.</p>

                    <p className='fw__light text-grey'>SÃO PAULO</p>
                    <div className="container-lg fw__bold">
                        <div style={{ backgroundColor: '#FAFAFA' }} className="row align-items-center border rounded shadow mb-3">
                            <div className="col-10">
                                <table className="table table-borderless">
                                    <thead>
                                        <tr className='text-grey fw__light fs-10'>
                                            <th className='pb-0 pt-4' scope="col" colspan='2'>data</th>
                                            <th className='pb-0 pt-4' scope="col">mesa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='text-blue'>
                                            <td>15/09/2021</td>
                                            <td colspan='2'>24</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-2 ps-0 text-center"><FiXCircle cursor='pointer' size='2rem' color='#F20000' /></div>
                        </div>

                        <div style={{ backgroundColor: '#FAFAFA' }} className="row align-items-center border rounded shadow mb-3">
                            <div className="col-10">
                                <table className="table table-borderless">
                                    <thead>
                                        <tr className='text-grey fw__light fs-10'>
                                            <th className='pb-0 pt-4' scope="col" colspan='2'>data</th>
                                            <th className='pb-0 pt-4' scope="col">mesa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='text-blue'>
                                            <td>16/09/2021</td>
                                            <td colspan='2'>30</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-2 ps-0 text-center"><FiXCircle cursor='pointer' size='2rem' color='#F20000' /></div>
                        </div>
                    </div>
                </div>
                <div className="container col-md-6 align-self-center mt-auto mb-3">
                    <button className='w-100 btn-orange'>Realizar novo agendamento</button>
                </div>

            </div>

        </React.Fragment>
    )
}

export default MySchedules;