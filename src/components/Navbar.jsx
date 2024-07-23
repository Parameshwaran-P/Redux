import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
<div>
<h2>psh tech</h2>
</div>
<div>
<Link to='/'>Home</Link>
<Link to='/about'>About</Link>
<Link to='/contact'>Contact</Link>
<Link to='/users'>Users</Link>
</div>
    </div>
  )
}

export default Navbar