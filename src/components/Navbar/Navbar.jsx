import React from 'react';
import './Navbar.css';
import ThemeButton from '../General/ThemeButton';
import { useContextAPI } from '../../App';

const Navbar = () => {
  const {isDarkTheme} = useContextAPI();

  return (
    <header className={`navbar container ${isDarkTheme? 'dark-theme' : ''}`}>
      <h1 className='navbar__logo'>User API</h1>
      <ThemeButton />
    </header>
  )
}

export default Navbar;