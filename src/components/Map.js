import React from 'react';
import { Link } from 'react-router-dom';
import './Map.scss';
import CircularProgress from '@material-ui/core/CircularProgress';
import MapBox from './MapBox';

class Map extends React.Component {
  address1Ref = React.createRef();
  address2Ref = React.createRef();

  componentDidMount() {
    const { addressesRequest } = this.props;
    addressesRequest();
  }

  handleSubmit = event => {
    event.preventDefault();
    const { orderRequest } = this.props;
    orderRequest(
      this.address1Ref.current.value,
      this.address2Ref.current.value
    );
  };

  orderReset = () => {
    const { orderReset } = this.props;
    orderReset();
  };

  render() {
    const { personalDataSaved, addressesData, order } = this.props;
    console.log(order);

    if (personalDataSaved) {
      if (addressesData.isFetching) {
        return (
          <div className="container">
            <div className="map">
              <div className="map__loading-window">
                <CircularProgress color="primary" size={60} thickness={3} />
              </div>
            </div>
            <MapBox order={order} className="mapbox" />
          </div>
        );
      }

      if (addressesData.error !== null) {
        return (
          <div className="container">
            <div className="map">
              <div className="map__dialog-window">
                <h2 className="map__title">Ошибка</h2>
                <div className="map__text">{addressesData.error}</div>
                <div className="map__text">
                  Перезагрузите страницу и попробуйте снова.
                </div>
              </div>
            </div>
            <MapBox order={order} className="mapbox" />
          </div>
        );
      }

      if (order.coordinates.length > 0) {
        return (
          <div className="container">
            <div className="map">
              <div className="map__dialog-window">
                <h2 className="map__title">Заказ размещён</h2>
                <div className="map__text">
                  Ваше такси уже едет к вам. Прибудет приблизительно через 10
                  минут.
                </div>
                <button onClick={this.orderReset} className="map__link">
                  Сделать новый заказ
                </button>
              </div>
            </div>
            <MapBox order={order} className="mapbox" />
          </div>
        );
      }

      return (
        <div className="container">
          <div className="map">
            <div className="map__dialog-window">
              <h1 className="map__title">Вызов такси</h1>
              <form onSubmit={this.handleSubmit} className="map__htmlform">
                <select
                  ref={this.address1Ref}
                  name="address1"
                  className="map__select-input"
                >
                  {addressesData.addresses.map(item => (
                    <option key={item} className="map__option-of-select">
                      {item}
                    </option>
                  ))}
                </select>
                <select
                  ref={this.address2Ref}
                  name="address2"
                  className="map__select-input"
                >
                  {addressesData.addresses.map(item => (
                    <option key={item} className="map__option-of-select">
                      {item}
                    </option>
                  ))}
                </select>
                <button className="map__button" type="submit">
                  Вызвать такси
                </button>
              </form>
            </div>
          </div>
          <MapBox order={order} className="mapbox" />
        </div>
      );
    }

    return (
      <div className="container">
        <div className="map">
          <div className="map__dialog-window">
            <h2 className="map__title">Заполните платёжные данные</h2>
            <div className="map__text">
              Укажите информацию о банковской карте, чтобы сделать заказ
            </div>
            <Link className="map__link" to="/profile">
              Перейти в профиль
            </Link>
          </div>
        </div>
        <MapBox order={order} className="mapbox" />
      </div>
    );
  }
}

export default Map;
