import React from 'react';
import Header from './components/Header';
import AuthForm from './components/AuthForm';
import Map from './components/Map';
import Profile from './components/Profile';
import PrivateRoute from './components/PriviteRoute';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest, logout } from './actions/authorization';
import { savePersonalData } from './actions/personal';
import { addressesRequest } from './actions/addresses';
import { orderRequest, orderReset } from './actions/order';

class App extends React.Component {
  render() {
    const { isAuthorize, isFetching, error } = this.props.authorization;
    const { isSaved } = this.props.personal;
    const {
      loginRequest,
      logout,
      savePersonalData,
      addressesRequest,
      addresses,
      orderRequest,
      order,
      orderReset
    } = this.props;

    return (
      <BrowserRouter>
        <div className="wrapper">
          <Header logout={logout} isAuthorize={isAuthorize} />
          <Switch>
            {isAuthorize ? null : (
              <Route
                exact
                path="/login"
                render={props => (
                  <AuthForm
                    {...props}
                    loginRequest={loginRequest}
                    isFetching={isFetching}
                    error={error}
                  />
                )}
              />
            )}
            <PrivateRoute
              path="/map"
              component={Map}
              isAuthorize={isAuthorize}
              personalDataSaved={isSaved}
              addressesData={addresses}
              addressesRequest={addressesRequest}
              orderRequest={orderRequest}
              order={order}
              orderReset={orderReset}
            />
            <PrivateRoute
              path="/profile"
              component={Profile}
              isAuthorize={isAuthorize}
              savePersonalData={savePersonalData}
              personalData={this.props.personal}
            />
            {isAuthorize ? <Redirect to="/map" /> : <Redirect to="/login" />}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  authorization: state.authorization,
  personal: state.personal,
  addresses: state.addresses,
  order: state.order
});

const mapDispatchToProps = {
  loginRequest,
  logout,
  savePersonalData,
  addressesRequest,
  orderRequest,
  orderReset
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
