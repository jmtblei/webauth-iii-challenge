import React from 'react';
import axios from 'axios';

import Auth from '../Auth/Authentication';

class UsersPage extends React.Component {
  state = {
    users: []
  };

  render() {
    // console.log(this.state.users)
    return (
      <>
        <h2>Users in your department</h2>
        <div>
          {this.state.users.map(user => (
            <div key={user.id}>
            <h4>User:</h4><p>{user.username}</p> <h4>Department:</h4><p>{user.department}</p></div>
          ))}
        </div>
      </>
    );
  }

  componentDidMount() {
    const endpoint = '/users';
    // const endpoint = 'http://localhost:5000/api/users';
    // const token = localStorage.getItem('jwt');
    // const requestConfig = {
    //   headers: {
    //     authorization: token,
    //   },
    // };
    axios
      // .get(endpoint, requestConfig)
      .get(endpoint)
      .then(res => {
          console.log(res.data)
        this.setState({ users: res.data });
      })
      .catch(err => console.error(err));
  }
}

export default Auth(UsersPage);