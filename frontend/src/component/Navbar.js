import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>

    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
	    <div className="container">
	      <a className="navbar-brand" href="index.html">Clark</a>
	      <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav nav ml-auto">
	          <li className="nav-item"><Link to="/" className="nav-link"><span>Home</span></Link></li>
	          <li className="nav-item"><Link to="/about-section" className="nav-link"><span>About</span></Link></li>
	          <li className="nav-item"><Link to="/resume-section" className="nav-link"><span>Resume</span></Link></li>
	          <li className="nav-item"><Link to="/services-section" className="nav-link"><span>Services</span></Link></li>
	          <li className="nav-item"><Link to="/skills-section" className="nav-link"><span>Skills</span></Link></li>
	          <li className="nav-item"><Link to="/projects-section" className="nav-link"><span>Projects</span></Link></li>
	          <li className="nav-item"><Link to="/blog-section" className="nav-link"><span>My Blog</span></Link></li>
	          <li className="nav-item"><Link to="/contact-section" className="nav-link"><span>Contact</span></Link></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
	 </div>
  )
}

export default Navbar