import { ChatEngine } from 'react-chat-engine';

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

import './App.css';

import LoginForm from './components/LoginForm';

import { LinkContainer } from "react-router-bootstrap";

const projectID = '91ab2466-2b27-4441-97ba-23aa187737fc'

export default class App extends Component {
  
if (!localStorage.getItem('username')) return <LoginForm />;

  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav activeKey={window.location.pathname}>
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Matches</Nav.Link>
              <LinkContainer to="/chat">
                <Nav.Link href="#">Chats</Nav.Link>
              </LinkContainer>
              <Nav.Link href="#">Events</Nav.Link>
              <Nav.Link href="#">Account</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

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
            <h3>Interests</h3>
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
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Upcoming Events</Card.Title>
              <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
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
