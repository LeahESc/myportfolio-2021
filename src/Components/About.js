import React from 'react'
import leahpic from '../images/leahpic.png'
import TechSkills from './TechSkills'

export default function About() {
    return (
        <>
        <div className="about">
            <div className="about-container">
                <div className="img-container">
                    <img src={leahpic} alt="leah schlackman"></img>
                </div>
                
                <div className="about-me-container">
                    <h2 className="about-me">About me.</h2>
                    <p className="about-me"> 
                        I'm an inquisitive and driven full-stack developer who thrives in collaborative environments. As an engineer, I'm continually inspired and motivated to learn about and experiment with new technologies and programming languages. Coding is empowering; it allows me to be an architect, artist, builder, and craftsman all at once.  
                        <br/>
                        <br/>
                        After majoring in Art History + Creative Writing in college, I transitioned into marketing which gave me the ability to weave my story-telling skills with my passion for designing eye-catching and communicative materials. I enjoyed marketing but always felt like I was just outside of the action until I had the opportunity to redesign and build a brand new website for a non-profit organization. Working on the website opened my eyes to the world of programming. It was the most fulfilled I had felt in my professional career. From that point on I was hooked. 
                        <br/>
                    </p>

                    <a href="https://drive.google.com/file/d/12WeKZ47bxmbOuh07gVqKsIZHDOCQB5xx/view?usp=sharing" className="btn btn-work btn-animated">resume</a> 
                    <a href="/work" className="btn btn-work btn-animated">work</a> 
                </div>
                
            </div>
        </div>
        
        <TechSkills/>
        </>  
    )
}
