import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <ul>
        <li><a href="#hero" className='logo'>"LOGO GOES HERE"</a></li>
        <li><a href="#projects">"projects"</a></li>
        <li><a href="#contact">"contact"</a></li>
      </ul>
      <button>Hire Me</button>
    </div>
  )
}

export default Navbar