import React from 'react';

class Profile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Профиль</h2>
        <span>Способ оплаты</span>
        <form>
          <input type="text" />
          <input type="number" />
          <input type="date" />
          <input type="number" />
        </form>
      </React.Fragment>
    );
  }
}

export default Profile;
