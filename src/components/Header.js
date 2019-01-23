import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {
  render() {
    const { logout } = this.props;
    return (
      <div className="container container--with-shadow">
        <header className="header">
          <span className="header__logo">Loft Taxi</span>
          <nav className="header__navigation">
            <NavLink
              className="header__link"
              activeClassName="header__link--active"
              to="/map"
            >
              Карта
            </NavLink>
            <NavLink
              className="header__link"
              activeClassName="header__link--active"
              to="/profile"
            >
              Профиль
            </NavLink>
            <button className="header__link">Выйти</button>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
