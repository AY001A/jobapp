import React from 'react'
import logo from '../../src/assets/logo.svg'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid">
    <Link to="/">
      <img src={logo} className="navbar-brand" alt=''/>
    </Link>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link className="nav-link" to="/">
              Companies
            </Link>
          </li>

          <li class="nav-item">
            <Link className="nav-link" to="/">
              Candidates
            </Link>
          </li>

          <li class="nav-item">
            <Link className="nav-link" to="/Todos">
              Assessment
            </Link>
          </li>

          <li class="nav-item">
            <Link className="nav-link" to="/">
              Post a Job
            </Link>
          </li>

          <li class="nav-item">
            <Link className="nav-link" to="/">
              Career Advice
            </Link>
          </li>

          
          
          
        </ul>
        <form className="d-flex navButtons">
          <button className="signupbtn btn" type="submit ">Sign up</button>
          <button className="loginbtn px-4 btn " type="submit ">Login</button>
        </form>
      </div>
    </div>
  </nav>

  )
}

export default Navbar