import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
    <Navbar className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <Container>
    <Link to={"/"} style={{textDecoration:'none'}}>
    <Navbar.Brand>
      
        
          <img
            alt=""
            src="https://i.postimg.cc/1RkKKfBq/upload-video-3197626-2670118.png"
            width="80"
            height="50"
            className="d-inline-block "
          />{' '}
          <h1><span>V</span>ideo <span>U</span>ploader</h1>
        </Navbar.Brand>
        </Link>
    </Container>
  </Navbar>
  </div>
  )
}

export default Header