import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <a href="/" className='logo'>"LOGO GOES HERE"</a>
        <div>
        <a href="/projects">"projects"</a>
        </div>
<a href="/about">"about"</a>
      <button>Hire Me</button>
    </div>
  )
}

export default Navbar