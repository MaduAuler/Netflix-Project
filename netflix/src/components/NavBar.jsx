import React from "react"
import { Navbar, Nav, Icon} from 'react-bootstrap';
import netflixLogo from '../assets/Netflix_logo.jpeg';
import profileLogo from '../assets/Netflix_profile_logo.png';

const NavBar = (props) => {
    return (
        <Navbar variant="lg" expand="lg" style={{backgroundColor:"black", color:"white"}} >
            <Navbar.Brand href="#">
                <img src={netflixLogo} style={{width:"100px", height:"60px"}} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">TV Shows</Nav.Link>
                <Nav.Link href="#">Movies</Nav.Link>
                <Nav.Link href="#">Recently Added</Nav.Link>
                <Nav.Link href="#pricing">My List</Nav.Link>
                </Nav>
                <Nav>
                    <div className="d-flex">
                        <i class="bi bi-search"></i>
                        <p>KIDS</p>
                        <i class="bi bi-bell"></i>
                        <img src={profileLogo} alt="Profile picture" style={{width:"20px", height:"20px"}} />

                    </div>
                
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}

export default NavBar;