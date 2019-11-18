import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './header.style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as Logo } from '../../assets/icon.svg'

const Header = () =>(
  <Navbar expand="lg" variant="light" bg="light">
    <Navbar.Brand href="/"><Logo className='logo' /></Navbar.Brand>
    <Nav.Item><Link to="/" className='option nav-link'>Лодочные моторы</Link></Nav.Item>
    <Nav.Item><Link to="boats" className='option nav-link'>Лодки ПВХ</Link></Nav.Item>
    <Nav.Item><Link to="yachts" className='option nav-link'>Катера</Link></Nav.Item>
  </Navbar>
)

export default Header;