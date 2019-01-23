import React from 'react';

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
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          name="username"
          onChange={this.handleChange}
          value={this.state.input.username}
        />
        <input
          type="password"
          name="password"
          onChange={this.handleChange}
          value={this.state.input.password}
        />
        <button type="submit" onClick={this.handleSubmit}>
          Войти
        </button>
      </form>
    );
  }
}

export default AuthForm;
