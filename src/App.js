import logo from './resources/logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Main from './main';
import { Component } from 'react';

const noNavPages = [] //TODO add game

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
        {this.renderNav(noNavPages.includes(window.location.href.split('/').pop()))}
        <Main />
      </div>
    );
  }

  renderNav(ignore) {

    if (ignore) {
      return
    }

    return (
      <nav>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img src={logo} width="30" height="30" className="d-inline-block align-top"/>
            Home
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/about">About Me</Nav.Link>
            <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
            <Nav.Link href="/projects" disabled>Projects</Nav.Link>
          </Nav>
        </Navbar>
      </nav>
    )
  }
}

export default App;
