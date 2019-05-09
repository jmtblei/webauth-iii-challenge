import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

import './App.css';
import LoginPage from './Auth/LoginPage';
import UsersPage from './Landing/UsersPage';


function App(props) {
  function logout() {
    localStorage.removeItem('jwt');
    props.history.push('/login');
  }

  return (
    <div>
      <header>
        <NavLink to="/login">Login</NavLink>
        &nbsp;|&nbsp;
        <NavLink to="/users">Users</NavLink>
        &nbsp;|&nbsp;
        <button type="button" onClick={logout}>Logout</button>
      </header>
      <main>
        <Route path="/login" component={LoginPage} />
        <Route path="/users" component={UsersPage} />
      </main>
    </div>
  );
}

export default withRouter(App);
