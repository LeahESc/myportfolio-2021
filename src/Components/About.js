import React from 'react'
import leahpic from '../images/leahpic.png'
import {Grid} from 'semantic-ui-react'
// import Navbar from './Navbar'

export default function About() {
    return (
        <div className="about">
            {/* <Navbar /> */}
            <Grid columns={2}>
                <Grid.Column width={6}>
                    <div className="img-container">
                    <img src={leahpic}></img>
                    </div>
            </Grid.Column>
            <Grid.Column width={10}>
                <h2 className="about-me">About me.</h2>
                <p className="about-me"> 
                    I'm an inquisitive and driven full-stack software engineer who thrives in collaborative environments. As a developer, I'm continually inspired and motivated to learn about and experiment with new technologies and programming languages. Coding is empowering; it allows me to be an architect, artist, builder, and craftsman all at once.  
                    <br/>
                    <br/>
                    After majoring in Art History + Creative Writing in college, I transitioned into marketing which gave me the ability to weave my story-telling skills with my passion for designing eye-catching and communicative materials. I enjoyed marketing but always felt like I was just outside of the action until I had the opportunity to redesign and build a brand new website for a non-profit organization. Working on the website opened my eyes to the world of programming. It was the most fulfilled I had felt in my professional career. I loved being able to play around with custom CSS stylesheets and learning how to craft my own styles and layout. I was hooked. 
                    <br/>
                </p>
            </Grid.Column>
            <Grid.Row>
    
            </Grid.Row>
            <Grid.Row>
    
            </Grid.Row>
            </Grid>
        </div>
    )
}
