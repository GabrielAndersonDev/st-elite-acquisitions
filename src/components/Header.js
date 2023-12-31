import React from 'react';
import logo from '../styles/imgs/STEA_1500px.png';

import '../styles/Header.css';

export default function Header({ currentPage, handlePageChange, notifState }) {

    return (
        <header className={`header-disable ${notifState? 'disabled' : ''}`}>
            <img className='logo' id='header-logo' src={logo} alt='Logo for ST Elite Acquisitions' />

            <nav className='nav-bar'>
                <ul className='nav-options'>
                    <li id='contact-top-links'>
                        <a href='#contact' className={`disabled-link ${notifState? "disabled" : ""} ${currentPage === 'Home' ? 'nav-link-active' : 'nav-link'}`} onClick={() => handlePageChange('Main')}>
                            CONTACT
                        </a>
                    </li>
                    <li id='about-us-top-links'>
                        <a href='#about-us' className={`disabled-link ${notifState? "disabled" : ""} ${currentPage === 'Home' ? 'nav-link-active' : 'nav-link'}`} onClick={() => handlePageChange('Main')}>
                            ABOUT US
                        </a>
                    </li>
                    <li id='how-it-top-links'>
                        <a href='#how-it-works' className={`disabled-link ${notifState? "disabled" : ""} ${currentPage === 'Home' ? 'nav-link-active' : 'nav-link'}`} onClick={() => handlePageChange('Main')}>
                            HOW IT WORKS
                        </a>
                    </li>
                </ul>
            </nav>
            
        </header>
    );
};