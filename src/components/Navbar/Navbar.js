import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaFingerprint } from 'react-icons/fa';
import { Button } from '../Button/Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
import Hamburger from '../Hamburger/Hamburger';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setClick(!click);
    };

    const closeMobileMenu = () => {
        setClick(false);
    };

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <div className='navbar-container container'>
                        <Link
                            to='/'
                            className='navbar-logo'
                            onClick={closeMobileMenu}
                        >
                            <FaFingerprint className='navbar-icon' />
                            CatalinIspas
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            {/* {click ? <Hamburger /> : <Hamburger />} */}
                            <Hamburger className='menu-icon' />
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item' onClick={closeMobileMenu}>
                                <Link to='/' className='nav-links'>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item' onClick={closeMobileMenu}>
                                <Link to='/about' className='nav-links'>
                                    About
                                </Link>
                            </li>
                            <li className='nav-item' onClick={closeMobileMenu}>
                                <Link to='/portfolio' className='nav-links'>
                                    Portfolio
                                </Link>
                            </li>
                            <li className='nav-item' onClick={closeMobileMenu}>
                                <Link to='/cv' className='nav-links'>
                                    CV
                                </Link>
                            </li>
                            <li className='nav-btn' onClick={closeMobileMenu}>
                                {button ? (
                                    <Link to='#' className='btn-link'>
                                        <Button buttonStyle='btn--outline'>
                                            CONTACT
                                        </Button>
                                    </Link>
                                ) : (
                                    <Link to='#' className='btn-link'>
                                        <Button
                                            buttonStyle='btn--outline'
                                            buttonSize='btn--wide'
                                        >
                                            CONTACT
                                        </Button>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
