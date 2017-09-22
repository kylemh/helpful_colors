import React, { Component } from 'react';
import Logo from '../Components/Logo';
import ColorSearch from './ColorSearch';

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <Logo />
        <ColorSearch />
      </header>
    );
  }
}

export default Header;
