import React from 'react';
import { Link } from 'react-router-dom';

import LoginButton from '../../Components/LoginButton/LoginButton';

import '../../style/global-style.css';
import './Home.css';

const Home = () => {

    return ( 

        <div className='container'>
        
            <header>
                <h1>Orange Desk</h1>
                <h2>FCamara</h2>
            </header>

            <main>
                <Link to='/adm'>
                    <LoginButton>Sou ADM</LoginButton>
                </Link>
                
                <Link to='/consultor'>
                    <LoginButton>Sou consultor</LoginButton>
                </Link>
            </main>

        </div>

     );
}
 
export default Home;