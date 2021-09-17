import React, { useEffect, useState } from 'react';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import Logo from './../../Assets/logo-Orange-Desk.svg';
import { FiXCircle } from 'react-icons/fi';
import api from './../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import moment from 'moment';

const MySchedules = () => {

    document.title = 'MINHAS RESERVAS | Orange Desk';

    const history = useHistory();
    const [reserves, setReserves] = useState([]);
    const [user, setUser] = useState({});

    var config = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }

    useEffect(() => {
        // my_reserves
        myReserves();
        authUser();

        console.log(reserves);
        
    }, [])

    async function authUser() {

        try {
            let response = await api.get('/auth', config);
            setUser(response.data);
          } catch (err) {
            toast.error("Erro ao buscar dados do usuário", {
              position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    async function deleteReserve(reserveId) {
       // delete_reserve
       try {
        await api.delete('/delete_reserve/' + reserveId, config);
        
        toast.success("Reserva removida com sucesso");

        myReserves();

      } catch (err) {
        toast.error("Erro ao remover reserva", {
          position: toast.POSITION.TOP_RIGHT
        });
    }
    }

    async function myReserves() {
        try {
            let response = await api.get('/my_reserves', config);
            setReserves(response.data);
          } catch (err) {
            toast.error("Erro ao buscar reservas", {
              position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    return (
        <React.Fragment>

            <div className="container-lg container-md d-flex flex-column justify-content-start bg-white container vw-100 vh-100">

                <header className='container-lg d-flex flex-column justify-content-between mt-3 mt-lg-4'>
                    <nav className='col-lg-10 col-11 container-fluid d-flex justify-content-between align-items-center mb-4'>
                        <FiArrowLeftCircle className='icon-size col-2 bg-white' color='#6A6A6A' onClick={() => history.push('/office')} />
                        <Link className='col-3 col-md-2 col-lg-1' to='/'>
                            <img className='img-fluid p-2' src={Logo} alt='Logotipo FCamara' />
                        </Link>
                    </nav>
                </header>


                <div className="container-lg d-flex flex-column col-md-6">
                    <h4 className=' text-black fw__medium'>Olá, { user.name }</h4>
                    <p className="fs-12 md-fs-16 fw__light text-grey">veja aqui suas reservas no OrangeDesk.</p>

                    <div className="container-lg fw__bold">

                        {reserves.length === 0 ? <h6 className='fw__medium text-black text-center mt-5'>Você não possui reservas no momento.</h6> : reserves.map(element => {
                            return(
                                <div style={{ backgroundColor: '#FAFAFA' }} className="row align-items-center border rounded shadow mt-4 mb-3">
                                    <div className="col-10">
                                        <table className="table table-borderless">
                                            <thead>
                                                <tr className='text-grey fw__light fs-10'>
                                                    <th className='pb-0 pt-4 col-6' scope="col">unidade</th>
                                                    <th className='pb-0 pt-4' scope="col">data</th>
                                                    <th className='pb-0 pt-4' scope="col">mesa</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className='text-blue'>
                                                    <td>{element?.unity?.address?.city}</td>
                                                    <td>{ moment((element.date)).format("DD/MM/YYYY") }</td>
                                                    <td colspan='2'>{element.desk}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-2 ps-0 text-center">
                                        <FiXCircle cursor='pointer' size='2rem' color='#F20000' onClick={ () => { deleteReserve(element.id) }} />
                                    </div>
                                </div>
                            )
                        }) }
                    </div>
                </div>
                <div className="container col-md-6 align-self-center mt-auto mb-3">
                    <button className='w-100 btn-orange' onClick={() => { history.push('/office') }}>Realizar novo agendamento</button>
                </div>
            </div>

            <ToastContainer />
        </React.Fragment>
    )
}

export default MySchedules;