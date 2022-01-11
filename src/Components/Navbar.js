import React from 'react';
import * as reactbootrap from 'react-bootstrap';

const Navbar = () => {
  return (
      <div>
        <reactbootrap.Navbar bg="light" variant='light' expand="sm">
          <reactbootrap.Container>
            <reactbootrap.Navbar.Brand href="/">
              {/* <img alt="" src="/logo.png" width="30" height="30"
                className="d-inline-block align-top"/>{' '} */}
                Marcus mod Madspil
              </reactbootrap.Navbar.Brand>
            <reactbootrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <reactbootrap.Navbar.Collapse id="basic-navbar-nav">
              <reactbootrap.Nav className="me-auto">
                <reactbootrap.Nav.Link href="/">Forside</reactbootrap.Nav.Link>
                <reactbootrap.Nav.Link href="/search">Søgning</reactbootrap.Nav.Link>
                <reactbootrap.Nav.Link href="/list">Opskriftsliste</reactbootrap.Nav.Link>
              </reactbootrap.Nav>
            </reactbootrap.Navbar.Collapse>
          </reactbootrap.Container>
        </reactbootrap.Navbar> 
      </div>
    );
}


export default Navbar;