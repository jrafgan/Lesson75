import React from 'react';
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

const Toolbar = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <LinkContainer to="/" exact><a>Shop</a></LinkContainer>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <LinkContainer to="/" exact>
          <NavItem>Products</NavItem>
        </LinkContainer>
        <LinkContainer to="/register" exact>
          <NavItem>Sign Up</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Toolbar;