import React from 'react';
import PropTypes from 'prop-types';
import { DEVICES } from '../enums';

const NavbarItem = ({label, onClick}) => (
  <a className="navbar-brand" href="#" onClick={onClick}>{label}</a>
)

const Navbar = ({onClick}) => {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavbarItem label='Powerbar' onClick={() => onClick(DEVICES.POWERBAR)} />
    <NavbarItem label='Disco' onClick={() => onClick(DEVICES.DISCO)} />
  </nav>
  );
}

Navbar.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Navbar;