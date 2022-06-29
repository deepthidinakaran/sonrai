import React, { Component } from "react";
// import Page1 from "../Page1";
// import Page2 from "../Page2";
// import Page3 from "../Page3";
import { Link } from "react-router-dom";
import logo from "./sonrai.svg";

import {
  Container,
  Row,
  Navbar,
  Nav,
  Button,
  NavDropdown,
  Image,
  Col,
  Popover,
} from "react-bootstrap";
import "./SNavbar.css";
class SNavbar extends Component {
  state = { clicked: false };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Container>
          <img height="52" width="161" src={logo} className="logosize" />
          <Nav className="me-auto">
            {/* <Nav.Link href="#table">Page 1</Nav.Link>

            <Nav.Link href="#barchart">Page 2</Nav.Link>
            <Nav.Link href="#sankey">Page 3</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>

      // <nav className="NavbarItems">
      //   <h1 className="navbar-logo"></h1>
      //   <div className="menu-icon" onClick={this.handleclick}></div>
      // </nav>
    );
  }
}

export default SNavbar;
