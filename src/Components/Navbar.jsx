import React from 'react';
import { Link } from "react-router-dom";


const Navbar = (props) => {
  

  return (
    <nav className='navBar' >
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/favs">Favs</Link></li>
      <li><button className='buttonChangeTheme' onClick={props.themeChange}> Change theme </button></li>
      </ul>
    </nav>
  )
}

export default Navbar