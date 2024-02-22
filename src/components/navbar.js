import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props){
    return (
        <nav className = " navbar navbar-expand-lg navbar-dark  bg-black">
  <div className="container-fluid">
    <Link className="navbar-brand text-secondary" to="/">{props.textfile}</Link>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-secondary" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-secondary" to="/About">About</Link>
        </li>
      </ul>
     
      <div className="d-flex">
        <div className="bg-info rounded-circle mx-2" onClick={()=>{props.toggleMode('info')}} style={{height:'20px', width:'20px', cursor:'pointer'}}></div>
        <div className="bg-success rounded-circle mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'20px', width:'20px', cursor:'pointer'}}></div>
        <div className="bg-warning rounded-circle mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'20px', width:'20px', cursor:'pointer'}}></div>
        <div className="bg-danger rounded-circle mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'20px', width:'20px', cursor:'pointer'}}></div>
      </div>

      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}

      {/* <div className="form-check form-switch mx-3">
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode==='light'?'light':'light'}`} htmlFor="flexSwitchCheckDefault">Darkmode Enable</label>
</div> */}
    </div>
  </div>
</nav>
    )
}

Navbar.propTypes={textfile: propTypes.string}

Navbar.defaultProps={ textfile: "textutils"}