import React from 'react';

class Profile extends React.Component {
  state = {
    input: {
      owner: '',
      cardNumber: '',
      dateOfEnd: '',
      cardCvv: ''
    },
    error: {
      owner: null,
      cardNumber: null,
      dateOfEnd: null,
      cardCvv: null
    }
  };

  handleChange = event => {
    this.setState({
      input: {
        ...this.state.input,
        [event.target.name]: event.target.value
      }
    });

    if (event.target.value === '') {
      this.setState({
        error: {
          ...this.state.error,
          [event.target.name]: 'Это обязательное поле'
        }
      });
    } else {
      this.setState({
        error: {
          ...this.state.error,
          [event.target.name]: null
        }
      });
    }

    if (event.target.name === 'cardNumber') {
      if (event.target.value.length !== 16) {
        this.setState({
          error: {
            ...this.state.error,
            [event.target.name]: 'В номере карты 16 цифр'
          }
        });
      } else {
        this.setState({
          error: {
            ...this.state.error,
            [event.target.name]: null
          }
        });
      }
    }

    if (event.target.name === 'cardCvv') {
      if (event.target.value.length !== 3) {
        this.setState({
          error: {
            ...this.state.error,
            [event.target.name]: 'CVV состоит из 3 цифр'
          }
        });
      } else {
        this.setState({
          error: {
            ...this.state.error,
            [event.target.name]: null
          }
        });
      }
    }
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <h2>Профиль</h2>
        <span>Способ оплаты</span>
        <form>
          <div>
            <input
              type="text"
              value={this.state.input.owner}
              name="owner"
              onChange={this.handleChange}
              required
              placeholder="Имя владельца"
            />
            <span>{this.state.error.owner}</span>
          </div>
          <div>
            <input
              type="number"
              value={this.state.input.cardNumber}
              name="cardNumber"
              onChange={this.handleChange}
              required
              placeholder="Номер карты"
            />
            <span>{this.state.error.cardNumber}</span>
          </div>
          <div>
            <input
              type="date"
              value={this.state.input.dateOfEnd}
              name="dateOfEnd"
              onChange={this.handleChange}
              required
              placeholder="Дата окончания действия"
            />
            <span>{this.state.error.dateOfEnd}</span>
          </div>
          <div>
            <input
              type="number"
              value={this.state.input.cardCvv}
              name="cardCvv"
              onChange={this.handleChange}
              required
              placeholder="CVV"
            />
            <span>{this.state.error.cardCvv}</span>
          </div>
          <button type="submit" onClick={this.handleSubmit}>
            Сохранить
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Profile;
