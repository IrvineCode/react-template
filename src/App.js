import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Main from './components/Main';

const Nav = () => {
  return (
    <nav>
      <Link to="/">home</Link>
      &nbsp;
      &nbsp;
      <Link to="/tos">tos</Link>
      &nbsp;
      &nbsp;
      <Link to="/signup">signup</Link>
    </nav>
  )
}

const TOS = () => {
  return (
    <div>TOS page</div>
  )
}

const SignUp = () => {
  return (
    <div>
      <h1>sign up</h1>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={Main} />
          <Route path="/tos" component={TOS} />
          <Route path="/signup" component={SignUp} />
        </div>
      </Router>
    )
  }
}

export default App;
