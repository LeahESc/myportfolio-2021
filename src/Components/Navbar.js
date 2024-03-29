import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

const Navbar = () => { 
  return (
    <div>
      <nav className="navbar navbar-light">
        <Link to='/'>
          <Icon name='home' size='big' color='yellow'/>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar;