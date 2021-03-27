import React, { Component } from 'react'
import pho from '../images/pho.png'
import TechSkills from './TechSkills'
import phomovie from '../images/phomovie.mp4'
import {Grid, Column} from 'semantic-ui-react'
import Footer from './Footer'

class Home extends Component {
    
    render() {
        return (
            <div className="intro-header">
            <div className="intro-text">

                <h1 className="intro--title">
                    <span className="intro--title--first "> Hi,</span>
                    <span className="intro--title--second"> I'm Leah</span>
                </h1>

                <div className="intro--subtitle">
                        Full Stack Software Engineer + lover of pho 
                </div>
            </div>
                <Footer />
            </div>
        )
    }
}
export default Home;