import React from 'react';
import Header from './components/Header';
import AuthForm from './components/AuthForm';
import Map from './components/Map';
import Profile from './components/Profile';
import PrivateRoute from './components/PriviteRoute';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest, logout } from './actions/authorization';

class App extends React.Component {
  render() {
    const { isAuthorize } = this.props.authorization;
    const { loginRequest, logout } = this.props;

    return (
      <BrowserRouter>
        <React.Fragment>
          <Header logout={logout} />
          <Switch>
            <Route
              exact
              path="/login"
              render={props => (
                <AuthForm {...props} loginRequest={loginRequest} />
              )}
            />
            <PrivateRoute
              path="/map"
              component={Map}
              isAuthorize={isAuthorize}
            />
            <PrivateRoute
              path="/profile"
              component={Profile}
              isAuthorize={isAuthorize}
            />
            <Redirect to="/login" />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({ authorization: state.authorization });

const mapDispatchToProps = { loginRequest, logout };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
