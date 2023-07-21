import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Emsheader() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" style={{padding:'0px'}}>
        <Container>
          <Navbar.Brand>
            <Link to={''}>
              <img
                alt=""
                src="https://cdn4.iconfinder.com/data/icons/banking-flat-outline/614/981_-_Administration-512.png"
                width="60"
                height="60"
                className="d-inline-block align-top"
              />{' '}
            </Link>
              Employee Management
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Emsheader