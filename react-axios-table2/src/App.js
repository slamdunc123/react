import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './Navbar';
import Navigation from './Navigation';

// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

// import css
import './App.css';

// import pages
import Users from './Users';
import Users2 from './Users2';
import Users3 from './Users3';
import UFCFighters from './UFCFighters';
import UFCEvents from './UFCEvents';
import Countries from './Countries';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Navbar />
        <Navigation />

        <div className="container">
          {/* <ul>
            <li><Link to="/Users">Users</Link></li>
            <li><Link to="/Users2">Users2</Link></li>
            <li><Link to="/Users3">Users3</Link></li>
            <li><Link to="/Users4">Users4</Link></li>
          </ul> */}
          <hr/>
         <Switch>
           {/* Routes will go here */}
           <Route path="/" exact={true} component={Users} />
           <Route path="/Users" component={Users} />
           <Route path="/Users2" component={Users2} />
           <Route path="/Users3" component={Users3} />
           <Route path="/UFCFighters" component={UFCFighters} />
           <Route path="/UFCEvents" component={UFCEvents} />
           <Route path="/Countries" component={Countries} />
         </Switch>
          {/* <h1>Users.js</h1>
          <Users />
          <h1>Users2.js</h1>
          <Users2 />
          <h1>Users3.js</h1>
          <Users3 />
          <h1>Users4.js</h1>
          <Users4 /> */}
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
