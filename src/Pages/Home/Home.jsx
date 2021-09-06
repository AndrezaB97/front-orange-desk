// Importing modules:
import React from 'react';
import { Link } from 'react-router-dom';

// Importing components:
import Logo from '../../Components/Logo/Logo';
import LoginAreaButton from '../../Components/LoginAreaButton/LoginAreaButton';
import GeneralButton from '../../Components/GeneralButton/GeneralButton';

// Importing style-sheets:
import '../../style/global-style.css';
import './Home.css';

const Home = () => {

    return ( 

        <>
            <header>
                <nav>
                    <div className="nav-container">
                        <Link to='/'> <Logo/> </Link>
                    </div>

                    <div className="nav-container">
                        <Link to='/register'> <LoginAreaButton/> </Link>
                    </div>
                </nav>
            </header>

            <main>
                <div className="img-container"></div>
                <div className="main-description">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation 
                </div>

                <div className="btn-container">
                    <Link to='/office'>
                        <GeneralButton>Button</GeneralButton>
                    </Link>
                </div>
            </main>
        </>

     );
}
 
export default Home;