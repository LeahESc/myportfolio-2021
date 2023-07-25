import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="intro-header">
        <div className="intro">
          <h1 className="intro--title">
            <span className="intro--title--first "> Hi,</span>
            <span className="intro--title--second"> I'm Leah</span>
          </h1>
          <div className="intro--subtitle">
            Full Stack Software Engineer + lover of pho &#x1F35C;
          </div>
          <Link to="/about">
            <button className="btn btn-home btn-animated">About</button>
          </Link>
          <Link to="/work">
            <button className="btn btn-home btn-animated">Work</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home;
