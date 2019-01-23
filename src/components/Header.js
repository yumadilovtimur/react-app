import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    const { logout } = this.props;
    return (
      <header>
        <span>LoftTaxi</span>
        <nav>
          <NavLink to="/map">Карта</NavLink>
          <NavLink to="/profile">Профиль</NavLink>
          <button>Выйти</button>
        </nav>
      </header>
    );
  }
}

export default Header;
