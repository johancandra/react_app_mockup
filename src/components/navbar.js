import React from 'react';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>MyApp</h1>
      &nbsp;&nbsp;&nbsp;
      <ul>
        <li><a href="/home">User</a></li>
        <li><a href="/about">Siswa</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
