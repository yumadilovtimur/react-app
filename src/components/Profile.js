import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.scss';

class Profile extends React.Component {
  state = {
    input: {
      owner: this.props.personalData.owner || '',
      cardNumber: this.props.personalData.cardNumber || '',
      dateOfEnd: this.props.personalData.dateOfEnd || '',
      cardCvv: this.props.personalData.cardCvv || ''
    },
    error: {
      owner: '',
      cardNumber: '',
      dateOfEnd: '',
      cardCvv: ''
    },
    send: false
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
          [event.target.name]: ''
        }
      });
    }
  };

  handleChangeCardNumber = event => {
    this.handleChange(event);
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
          [event.target.name]: ''
        }
      });
    }
  };

  handleChangeCardCvv = event => {
    this.handleChange(event);
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
          [event.target.name]: ''
        }
      });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const { savePersonalData } = this.props;
    const inputs = this.state.input;
    const errors = this.state.error;
    const { owner, cardNumber, dateOfEnd, cardCvv } = inputs;

    for (let key in inputs) {
      if (inputs[key] === '') {
        this.setState({
          error: {
            ...this.state.error,
            [key]: 'Это обязательное поле'
          }
        });
      } else {
        this.setState({
          error: {
            ...this.state.error,
            [key]: ''
          }
        });
      }
    }

    let regexp = /^[a-z\d]+$/i;
    if (regexp.test(owner)) {
      this.setState({
        error: {
          ...this.state.error,
          owner: ''
        }
      });
    } else {
      this.setState({
        error: {
          ...this.state.error,
          owner: 'Разрешены только латинские символы и цифры!'
        }
      });
    }

    if (cardNumber.length !== 16) {
      this.setState({
        error: {
          ...this.state.error,
          cardNumber: 'В номере карты должно быть 16 цифр'
        }
      });
    } else {
      this.setState({
        error: {
          ...this.state.error,
          cardNumber: ''
        }
      });
    }

    if (cardCvv.length !== 3) {
      this.setState({
        error: {
          ...this.state.error,
          cardCvv: 'CVV состоит из 3 цифр'
        }
      });
    } else {
      this.setState({
        error: {
          ...this.state.error,
          cardCvv: ''
        }
      });
    }

    const errorsValues = Object.values(errors);
    const noErrors = errorsValues.every(value => {
      return value === '';
    });

    if (noErrors) {
      this.setState({
        send: true
      });
      savePersonalData(owner, cardNumber, dateOfEnd, cardCvv);
    }
  };

  render() {
    if (this.state.send) {
      return (
        <div className="container">
          <div className="profile">
            <div className="profile__error-window">
              <h2 className="profile__title">Профиль</h2>
              <span className="profile__text">
                Платёжные данные обновлены. Теперь вы можете заказывать такси.
              </span>
              <Link className="profile__link" to="/map">
                Перейти на карту
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return (
      <React.Fragment>
        <div className="container">
          <div className="profile">
            <form className="profile__htmlform">
              <h2 className="profile__title">Профиль</h2>
              <span className="profile__subtitle">Способ оплаты</span>
              <div className="profile__htmlform-item">
                <input
                  type="text"
                  value={this.state.input.owner}
                  name="owner"
                  onChange={this.handleChange}
                  required
                  placeholder="Имя владельца"
                  className="profile__input"
                />
                <span className="profile__input-error">
                  {this.state.error.owner}
                </span>
              </div>
              <div className="profile__htmlform-item">
                <input
                  type="number"
                  value={this.state.input.cardNumber}
                  name="cardNumber"
                  onChange={this.handleChangeCardNumber}
                  required
                  placeholder="Номер карты"
                  className="profile__input"
                />
                <span className="profile__input-error">
                  {this.state.error.cardNumber}
                </span>
              </div>
              <div className="profile__htmlform-item">
                <input
                  type="date"
                  value={this.state.input.dateOfEnd}
                  name="dateOfEnd"
                  onChange={this.handleChange}
                  required
                  placeholder="Дата окончания действия"
                  className="profile__input"
                />
                <span className="profile__input-error">
                  {this.state.error.dateOfEnd}
                </span>
              </div>
              <div className="profile__htmlform-item">
                <input
                  type="number"
                  value={this.state.input.cardCvv}
                  name="cardCvv"
                  onChange={this.handleChangeCardCvv}
                  required
                  placeholder="CVV"
                  className="profile__input"
                />
                <span className="profile__input-error">
                  {this.state.error.cardCvv}
                </span>
              </div>
              <button
                className="profile__submit"
                type="submit"
                onClick={this.handleSubmit}
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
