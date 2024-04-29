import React from "react";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
import Logo from '../../assets/images/crm.png'
import { Link, useNavigate } from "react-router-dom";
import { LinkContainer} from "react-router-bootstrap"

export const Header = () => {

    const navigate = useNavigate();

    return (
        <Navbar collapseOnSelect bg="info" expand="md">
            <Navbar.Brand className="ms-3">
                <img src={Logo} alt="Logo" width="50px"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id = "basic-navbar-nav">
                <Nav className="ms-auto me-3">
                    <Link to ="/dashboard" className="ms-3">Dashboard</Link>
                    <Link to ="/tickets" className="ms-3">Tickets</Link>
                    <Link to="/" className="ms-3">Logout</Link>
                    {/* <LinkContainer to="/dashboard"><Nav.Link className="ms-3">Dashboard</Nav.Link></LinkContainer>
                    <LinkContainer to="/tickets"><Nav.Link className="ms-3">Tickets</Nav.Link></LinkContainer>
                    <Nav.Link className="ms-3" onClick={() => navigate('/')}>Logout</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}