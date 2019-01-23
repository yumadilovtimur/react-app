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
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { loginRequest } = this.props;
    loginRequest(this.state.input.username, this.state.input.password);
  };

  render() {
    const { isFetching } = this.props;

    if (isFetching) {
      return <CircularProgress color="primary" size={60} thickness={3} />;
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
            <input
              className="authform__input"
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.input.password}
              required
              placeholder="Пароль"
            />
            <button
              className="authform__submit"
              type="submit"
              onClick={this.handleSubmit}
            >
              Войти
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AuthForm;
