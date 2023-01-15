import React from 'react';
import './Header.css'
import holberton from '../assets/holberton.jpg'

function Header() {
  return (
    <div className="Header">
        <img src={ holberton } className="App-logo" alt="logo" />
        <h1>School dashboard</h1>          
    </div>   
  );
}

export default Header;
