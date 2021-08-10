import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../assets/css/barraNavegacion.css';

const BarraNavegacion = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
			    <Container>
			    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
			    <Nav className="me-auto">
			      <Nav.Link href="#home">Home</Nav.Link>
			      <Nav.Link href="#features">Features</Nav.Link>
			      <Nav.Link href="#pricing">Pricing</Nav.Link>
			    </Nav>
			    <form className="d-flex m-2">
			        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
			        <button className="btn btn-outline-success btn-header" type="submit">Search</button>
			    </form>
				<ul className="navbar-nav">
			        <span className="button-register-login m-2">
			            <li className="nav-item">
			              <a className="nav-link btn btn-outline-success btn-header" href="/login">Login</a>
			            </li>
			        </span>
			        <span className="button-register-login m-2">
			            <li className="nav-item">
			              <a className="nav-link btn btn-outline-success btn-header" href="/register/create">Register</a>
			            </li>
			        </span>
			    </ul>
			    </Container>
			</Navbar>
			<div className="titulo-logo row" style={{marginTop:'5%',marginLeft:'40%'}}>
				<div className="col-lg-auto"><img src="./images/logo.png" alt="logo-principal"/></div>
				<div className="col-lg-auto"><h1>Sakura</h1></div>
			</div>
			<div className="background-image">
				<img src="./images/nav-background.jpg" alt="paisaje-bicicleta"/>
			</div>
		</>
	)
}

export default BarraNavegacion