import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./home.jsx"
import { Resume } from "./resume.jsx"

import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <nav>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
              <img src={logo} width="30" height="30" className="d-inline-block align-top"/>
              Home
            </Navbar.Brand>
            <Nav>
              <Nav.Link href="#/about">About Me</Nav.Link>
              <Nav.Link href="#/resume">Resume</Nav.Link>
              <Nav.Link href="#/projects" disabled>Projects</Nav.Link>
            </Nav>
          </Navbar>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
