import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import Dropdown from './dropdown';
import logo from '../imagenes/logo.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

return (
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <div style={{height: '50%', width: '40%'}}>
                    <img className='logoi' src={logo} />
                </div>
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to='/marcos' className='nav-links'onClick={closeMobileMenu}>
              Marcos de Seguridad <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/recomendaciones'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Recomendaciones
            </Link>
          </li>
        </ul>
      </nav>
  );
}
export default Navbar;