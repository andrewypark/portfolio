import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <a href="#hero" className='logo'>"LOGO GOES HERE"</a>
      <a href="#projects">"projects"</a>
      <a href="#contact">"contact"</a>
      <button>Hire Me</button>
    </div>
  )
}

export default Navbar