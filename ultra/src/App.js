import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import Login from './components/users/Login';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <NavLink to="/">Home</NavLink>
        &nbsp;|&nbsp;
        <NavLink to='/login'>Log In</NavLink>
        &nbsp;|&nbsp;
        <NavLink to="/users">Users</NavLink>
      </header>
      <main>
        <Route path='/login' component={Login}/>
        <Route path="/users" component={Users} />
      </main>
      </div>
    );
  }
}

export default App;
