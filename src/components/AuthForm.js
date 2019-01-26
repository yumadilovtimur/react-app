import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './AuthForm.scss';

class AuthForm extends React.Component {
  state = {
    input: {
      username: '',
      password: ''
    },
    error: {
      username: null,
      password: null
    }
  };

  handleChange = event => {
    this.setState({
      input: {
        ...this.state.input,
        [event.target.name]: event.target.value
      },
      error: {
        ...this.state.error,
        username: null,
        password: null
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { loginRequest } = this.props;
    if (this.state.input.password.length >= 6) {
      loginRequest(this.state.input.username, this.state.input.password);
    } else {
      this.setState({
        error: {
          ...this.state.error,
          password: 'Пароль должен содержать не менее 6 символов'
        }
      });
    }
  };

  render() {
    const { isFetching, error } = this.props;

    if (isFetching) {
      return (
        <div className="authform">
          <CircularProgress color="primary" size={60} thickness={3} />
        </div>
      );
    }

    return (
      <div className="container">
        <div className="authform">
          <form className="authform__htmlform" onSubmit={this.handleSubmit}>
            <span className="authform__title">Войти</span>
            <input
              className="authform__input"
              type="email"
              name="username"
              onChange={this.handleChange}
              value={this.state.input.username}
              required
              placeholder="Имя пользователя"
            />
            {this.state.error.username ? (
              <div className="authform__input-error">
                {this.state.error.username}
              </div>
            ) : null}
            <input
              className="authform__input"
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.input.password}
              required
              placeholder="Пароль"
            />
            {this.state.error.password ? (
              <div className="authform__input-error">
                {this.state.error.password}
              </div>
            ) : null}
            <button
              className="authform__submit"
              type="submit"
              onClick={this.handleSubmit}
            >
              Войти
            </button>
            {error !== null ? (
              <div className="authform__error">{error}</div>
            ) : null}
          </form>
        </div>
      </div>
    );
  }
}

export default AuthForm;
