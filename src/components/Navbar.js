import React from 'react'
import {Link} from 'gatsby'

const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const Navbar = () => {
  return (
    <nav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about/">About</Link> 
      </li>
      <li>
        <Link to="/locations/">Locations</Link>
      </li>
    </nav>
  )
}

export default Navbar
