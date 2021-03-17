import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

// export default class Navbar extends Component {
const Navbar = () => { 

    return (
        < div >
            <nav className="navbar" >
                <NavLink to='/'
                    style={{
                        color: "white",
                        padding: "1em"
                    }}
                    activeStyle={{
                        color: "#ff82e4"
                    }} >
                    Home
                </NavLink>
                <NavLink to='/about'
                    style={{
                        color: "white",
                        padding: "1em"
                    }}
                    activeStyle={{
                        color: "#ff82e4"
                    }} >
                    About
                </NavLink>
                <NavLink to='/work'
                    style={{
                        color: "white",
                        padding: "1em"
                    }}
                    activeStyle={{
                        color: "#ff82e4"
                    }} >
                    My Work
                </NavLink>
              
            </nav>
        </div>
    )
}

export default Navbar
