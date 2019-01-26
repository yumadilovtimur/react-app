import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {
  handleClick = () => {
    const { logout } = this.props;
    logout();
  };
  render() {
    const { isAuthorize } = this.props;
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
            {isAuthorize ? (
              <button className="header__link" onClick={this.handleClick}>
                Выйти
              </button>
            ) : (
              <NavLink
                className="header__link"
                activeClassName="header__link--active"
                to="/login"
              >
                Войти
              </NavLink>
            )}
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
