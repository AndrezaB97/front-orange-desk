// Importing modules:
import React from 'react';
import { Link } from 'react-router-dom';

// Importing components:
import Logo from '../../Components/Logo/Logo';
import LoginAreaButton from '../../Components/LoginAreaButton/LoginAreaButton';
import GeneralButton from '../../Components/GeneralButton/GeneralButton';

// Importing style-sheets:
import '../../style/global-style.css';
import { Header, Main } from './HomeStyle';

const Home = () => {

    

    return ( 

        <>
            <Header>
                <nav>
                    <div className="logo-container">
                        <Link to='/'> <Logo/> </Link>
                    </div>

                    <div className="login-container">
                        <Link to='/adm'> <LoginAreaButton/> </Link>
                    </div>
                </nav>
            </Header>

            <Main>
                <div className="img-container"></div>
                <div className="main-description">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation 
                </div>

                <div className="btn-container">
                    <Link to='/consultor'>
                        <GeneralButton>Button</GeneralButton>
                    </Link>
                </div>
            </Main>
        </>

     );
}
 
export default Home;