import React from 'react';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends React.Component {
  render() {
    const { isAuthorize } = this.props;
    const { component: RouteComponent, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          isAuthorize ? <RouteComponent {...props} /> : <Redirect to="/" />
        }
      />
    );
  }
}

export default PrivateRoute;
