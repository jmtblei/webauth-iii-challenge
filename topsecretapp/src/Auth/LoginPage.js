import React from 'react';
import axios from 'axios';

class LoginPage extends React.Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <>
        <h2>Login</h2>
        <form onSubmit={this.submitForm}>
          <div>
            <label htmlFor="username" />
            <input
              id="username"
              onChange={this.handleChange}
              value={this.state.username}
              type="text"
              placeholder="Username"
            />
          </div>
          <div>
            <label htmlFor="password" />
            <input
              id="password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </>
    );
  }

  handleChange = event => {
    const { id, value } = event.target;

    this.setState({ [id]: value });
  };

  submitForm = event => {
    event.preventDefault();
    const URL = 'http://localhost:5555/api';

    axios
      .post(`${URL}/login`, this.state)
      .then(res => {
        localStorage.setItem('jwt', res.data.token);
        this.props.history.push('/users');
      })
      .catch(err => {
        console.error('Login Error', err);
      });
  };
}

export default LoginPage;