import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="container">
      <div className="text-center">
        <img src={logo} alt="" />
        <p>
          <small>Journalism Without Fear or Favour</small>
        </p>
        <h6>{moment().format("dddd, MMMM D YYYY")}</h6>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="fw-bold" speed={100}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <Nav.Link href="#">Career</Nav.Link>
            </Nav>
            <p>Profile</p>
              <Button variant="dark">Dark</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
