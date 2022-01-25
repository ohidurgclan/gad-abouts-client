import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
  const { users, logOut } = useAuth();
    return (
      <>
        <Navbar className="header-section" collapseOnSelect expand="lg">
          <Container>
            <Navbar className="logo" as={NavLink} to="/">Gad Abouts</Navbar>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end nav-bar">
              <Nav.Link as={NavLink} to="/home" activeStyle={{ fontWeight: "bold", color: "#34d1ff" }}>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/blogs" activeStyle={{ fontWeight: "bold", color: "#34d1ff" }}>Blogs</Nav.Link>
              <Nav.Link as={NavLink} to="/about" activeStyle={{fontWeight: "bold",color: "#34d1ff"}}>About</Nav.Link>
              <Nav.Link as={NavLink} to="/contact" activeStyle={{ fontWeight: "bold", color: "#34d1ff" }}>Contact</Nav.Link>
              {users?.email ? <Button onClick={logOut} variant="light">Logout</Button> :
              <Nav.Link as={NavLink} to="/login" activeStyle={{fontWeight: "bold",color: "#1bbde4"}}>Login</Nav.Link>}
              <Navbar.Text className="ms-2 text-light">
                {users?.displayName}
              </Navbar.Text>
              </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;