import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = ()=>{
      logOut()
      .then()
      .catch(error=>console.error(error))
    }
  return (
    <div>
      <Navbar bg="light" expand="lg" className=" mb-4">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}  
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <Nav.Link href="#">Career</Nav.Link>
            </Nav>
            {user && <FaUserCircle style={{ fontSize: "30px" }}></FaUserCircle>}
            <NavLink to="/login">
              {user ? (
                <Button onClick={handleLogOut} variant="dark" className="ms-2">
                  Log Out
                </Button>
              ) : (
                <Button variant="dark" className="ms-2">
                  Login
                </Button>
              )}
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
