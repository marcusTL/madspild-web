import React from 'react';
import * as reactbootrap from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const Navbar = () => {
  return (
      <div>
        <reactbootrap.Navbar bg="light" variant='light' expand="sm">
          <reactbootrap.Container>
            <reactbootrap.Navbar.Brand href="Frontpage">
              {/* <img alt="" src="/logo.png" width="30" height="30"
                className="d-inline-block align-top"/>{' '} */}
                Marcus mod Madspild
              </reactbootrap.Navbar.Brand>
            <reactbootrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <reactbootrap.Navbar.Collapse id="basic-navbar-nav">
              <reactbootrap.Nav className="me-auto">
                <reactbootrap.Nav.Link href="Frontpage">Forside</reactbootrap.Nav.Link>
                <reactbootrap.Nav.Link href="Search">Søgning</reactbootrap.Nav.Link>
                <reactbootrap.Nav.Link href="List">Opskriftsliste</reactbootrap.Nav.Link>
              </reactbootrap.Nav>
            </reactbootrap.Navbar.Collapse>
          </reactbootrap.Container>
        </reactbootrap.Navbar> 
      </div>
    );
}


export default Navbar;
