import React from "react";
import { Navbar, Nav, } from "react-bootstrap";
import netflixLogo from "../assets/Netflix_logo.jpeg";
import profileLogo from "../assets/Netflix_profile_logo.png";
import { Link, useLocation, } from "react-router-dom";

const NavBar = (props) => {
  const location = useLocation();
  console.log("location", location);

  //const navigate = useNavigate();

  return (
    <Navbar
      variant="lg"
      expand="lg"
      style={{ backgroundColor: "black", color: "white" }}
    >
      <Navbar.Brand href="#">
        <img
          src={netflixLogo}
          style={{ width: "100px", height: "60px" }}
          alt=""
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Link to="/">
              <div className={location.pathname==="/" ? "nav-link active" :"nav-link"}>Home</div>
          </Link>
          <Link to="/tv-shows">
              <div className={location.pathname==="tv-shows" ? "nav-link active" :"nav-link"}>TV Shows</div>
          </Link>
          <Link to="/movie-details">
              <div className={location.pathname==="movie-details" ? "nav-link active" :"nav-link"}>Movie Details</div>
          </Link>
          <Nav.Link href="#">Movies</Nav.Link>
          <Nav.Link href="#">Recently Added</Nav.Link>
          <Nav.Link href="#pricing">My List</Nav.Link>
        </Nav>
        <Nav>
          <div className="d-flex">
            <i class="bi bi-search"></i>
            <p>KIDS</p>
            <i class="bi bi-bell"></i>
            <img
              src={profileLogo}
              alt=""
              style={{ width: "20px", height: "20px" }}
            />
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
