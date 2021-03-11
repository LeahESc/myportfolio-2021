import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

// export default class Navbar extends Component {
const Navbar = () => { 

    return (
        < div >
            <nav className="navbar" style={{background: '#ffecfc'}}>
                <NavLink to='/'
                    activeStyle={{
                        fontWeight: "bold",
                        color: "white",
                        background: "black"
                    }} >
                    Home
                </NavLink>
                <NavLink to='/about'
                    activeStyle={{
                        fontWeight: "bold",
                        color: "white",
                        background: "black"
                    }} >
                    About
                </NavLink>
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
