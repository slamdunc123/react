import React, { Component } from 'react';
import '../styles/App.css';

import Hello from './HelloComponent';
import About from './AboutComponent';
import Books from './BooksComponent';
import Home from './HomeComponent';
// import NoMatch from './NoMatchComponent';

// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
        <ul>
          <li><Link to="/hello">Hello</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/books">Books</Link></li>
        </ul>
          <hr/>
          <Switch>
          {/* Routes will go here */}
          <Route path="/" exact={true} component={Home} />
          <Route path="/hello" component={Hello} />
          <Route path="/hello/goodmorning" render={() => { return      <h1>Goodmorning</h1> }} />
          <Route path="/about" component={About} />
          <Route path="/books" component={Books} />
          {/* <Route component={NoMatch}/> */}
          </Switch>
      </div>
  </div>
  </Router>
    );
  }
}
export default App;