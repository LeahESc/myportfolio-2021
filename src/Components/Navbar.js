import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

// export default class Navbar extends Component {
const Navbar = () => { 

    return (
        < div >
            <nav className="navbar" >
                <Link to='/'
                    style={{
                        color: "black",
                        padding: "1em"
                    }}
                    activeStyle={{
                        
                        color: "white",
                        // background: "black"
                    }} >
                    Home
                </Link>
                <Link to='/about'
                    style={{
                        color: "black",
                        padding: "1em"
                    }}
                    activeStyle={{
                        
                        color: "white",
                        background: "black"
                    }} >
                    About
                </Link>
                <Link to='/work'
                    style={{
                        color: "black",
                        padding: "1em"
                    }}
                    activeStyle={{
                        color: "white",
                        background: "black",
                        padding: "0em"
                    }} >
                    My Work
                </Link>
            </nav>
        </div>
    )
}

export default Navbar
