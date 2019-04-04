import React, { Component } from 'react';
import {Route, NavLink, withRouter, Switch} from 'react-router-dom';
import Login from './components/users/Login';
import Users from './components/users/Users';
import './App.css';

class App extends Component {

  logout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/login');
  };

  render() {
    return (
      <div className="App">
      <header>
        <NavLink to="/">Home</NavLink>
        &nbsp;|&nbsp;
        <NavLink to='/login'>Log In</NavLink>
        &nbsp;|&nbsp;
        <NavLink to="/users">Users</NavLink>
        &nbsp;|&nbsp;
        <button onClick={this.logout}>Logout</button>

      </header>
      <main>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/login' component={Login}/>
        <Route path="/users" component={Users} />
        </Switch>
      </main>
      </div>
    );
  }
}

function Home(props) {
  return <h1>Welcome HOME!</h1>
}

export default withRouter(App);
