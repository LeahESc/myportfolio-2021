import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

// export default class Navbar extends Component {
const Navbar = () => { 

    return (
        < div >
            <nav className="navbar" >
                <NavLink to='/'
                    activeStyle={{
                        fontWeight: "bold",
                        color: "white",
                        background: "black"
                    }} >
                    Home
                </NavLink>
                <Link to='/about'
                    activeStyle={{
                        fontWeight: "bold",
                        color: "white",
                        background: "black"
                    }} >
                    About
                </Link>
                <NavLink to='/work'
                    activeStyle={{
                        fontWeight: "bold",
                        color: "white",
                        background: "black"
                    }} >
                    My Work
                </NavLink>
            </nav>
        </div>
    )
}

export default Navbar
