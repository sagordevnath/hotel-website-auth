import React from "react";
import './Header.css'
import logo from '../../../Images/logo.jpg'
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <Navbar bg="info" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img height="30px" width="90px" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Brand href="#">Nath International</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div className="navbar">
            <Link to="/">HOME</Link>
            <Link to="/services">SERVICES</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
            { user ? <Link onClick={logout} to="/login">LOGOUT</Link> : <Link to="/login">LOG IN</Link>}
            </div>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
