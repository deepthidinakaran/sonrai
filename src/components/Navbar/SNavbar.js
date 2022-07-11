import React, { Component } from "react";
import logo from "./sonrai.svg";

import {
  Container,
  Navbar,
  Nav,
} from "react-bootstrap";
import "./SNavbar.css";
class SNavbar extends Component {
  
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Container>
          <img height="52" width="161" src={logo} className="logosize" />
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default SNavbar;
