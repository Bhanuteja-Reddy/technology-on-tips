import React from 'react'

const Header = () => {
    return (
        <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">
          <a href="index.html" className="logo" style={{marginRight:2}}><img src="assets/img/logo.jpg" alt="" className="img-fluid"/>
          </a><h4 className="logo mr-auto"><a href="index.html">Technology On Tips</a></h4>
          
    
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active"><a href="index.html">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
    
            </ul>
          </nav>
          <a href="#about" className="get-started-btn scrollto">Get Started</a>
    
        </div>
      </header>
    )
}

export default Header
