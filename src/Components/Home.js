import React from 'react'
import { Link } from 'react-router-dom'
import TechSkills from './TechSkills'
import Footer from './Footer'

export default function Home() {
    return (
        <>
        <div className="intro-header">
            <div className="intro">

                <h1 className="intro--title">
                    <span className="intro--title--first "> Hi,</span>
                    <span className="intro--title--second"> I'm Leah</span>
                </h1>

                <div className="intro--subtitle">
                        Full Stack Software Engineer + lover of pho 
                </div>
                
                <Link to="/about">
                <button className="btn btn-home btn-animated">About</button>
                </Link>
                <Link to="/work">
                <button className="btn btn-home btn-animated">Work</button>
                </Link>
                {/* <Link to="/technical skills">
                <button className="btn btn-home">Technical Skills</button>
                </Link> */}

            </div>
    </div>
    <Footer />
    </>
    )
}

