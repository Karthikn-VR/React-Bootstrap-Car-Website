import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Navbar.css';
import Login from '../Login/Login';
import SignIn from '../Login/SignUp';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark glass-navbar">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-3 me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/collections">Collections</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/CarModels">3D View</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">About Us</Link>
              </li>
            </ul>

            <div className="d-flex nav-btn">
              
              <button
                type="button"
                className=" btn btn-dark btn-outline-light me-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalCenter"
              >
                Log in
              </button>

               <button
                type="button"
                className="btn btn-outline-light"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalCenter1"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </nav>

     
      <Login />
      <SignIn />
    </>
  );
};

export default Navbar;
