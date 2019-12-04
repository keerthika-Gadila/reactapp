import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import Registration from './Components/Registration';
import Login from './Components/Login';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/react/">
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Login</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Register</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/Login" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Login</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Register</NavLink>
              </div>
              <Switch>
                <Route exact path="/" component={Registration}/>
            <Route path="/Login" component={Login}/>
          </Switch>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
