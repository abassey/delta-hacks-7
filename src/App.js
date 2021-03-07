import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';

import './App.css';

import LoginForm from './components/LoginForm';

import { HashRouter as Router, NavLink, Route } from 'react-router-dom';
import Chat from './Chat';

const projectID = '91ab2466-2b27-4441-97ba-23aa187737fc'

export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Navbar bg="dark" expand="lg">
              <Nav justify variant="pills">
                <Nav.Item><NavLink exact to="/">Home </NavLink></Nav.Item>
                <Nav.Item><NavLink exact to="/"> Matches </NavLink></Nav.Item>
                <Nav.Item><NavLink exact to="/Chat"> Chats </NavLink></Nav.Item>
                <Nav.Item><NavLink exact to="/"> Events </NavLink></Nav.Item>
                <Nav.Item><NavLink exact to="/"> Account </NavLink></Nav.Item>
              </Nav>
          </Navbar>
          <Route exact path="/" />
          <Route exact path="/" />
          <Route exact path="/"  />
          <Route exact path="/Chat" component={Chat} />
        </Router>
        

        <section data-section="home-header">
          <Jumbotron fluid>
            <Container>
              <h1>Welcome Home, John!</h1>
              <p>
              Here's what's happened since the last time you were here...
              </p>
            </Container>
          </Jumbotron>
        </section>

        <section data-section="interests">
          <div>
            <h3>Current Interests</h3>
            <ListGroup horizontal>
              <ListGroup.Item>Data Science</ListGroup.Item>
              <ListGroup.Item>Cybersecurity</ListGroup.Item>
              <ListGroup.Item>Artificial Intelligence</ListGroup.Item>
              <ListGroup.Item>Mathematical Finance</ListGroup.Item>
            </ListGroup>
            <br/>
          </div>
        </section>

        <section data-section="home-events">
        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Title>Missed Messages</Card.Title>
              <Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item action href="#Chat">Data Science is Rad!</ListGroup.Item>
                  <ListGroup.Item action href="#link1">WFM Tips and Tricks</ListGroup.Item>
                  <ListGroup.Item action href="#link2">Are the Robots Going To Take Over?</ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Upcoming Events</Card.Title>
              <Card.Text>
                <Accordion defaultActiveKey="0">
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      Intro To Data Science
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>Held by: Mr. LotoTalk</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                      Mathematics and Forensics
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>Held by: Miss Fibonacci</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Hashtags You Follow</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        </section>
      </div>
    )
  }
}
