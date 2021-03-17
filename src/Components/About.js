import React from 'react'
import leahpic from '../images/leahpic.png'
import {Grid, Column} from 'semantic-ui-react'

export default function About() {
    return (
        <div className="about">
            <Grid columns={2}>
                <Grid.Column width={8}>
                    <div className="img-container">
                    <img src={leahpic}></img>
                    </div>
            </Grid.Column>
            <Grid.Column width={8}>
                <h2 className="about-me">About me.</h2>
                <p className="about-me"> I'm a Full-Stack Software Engineer proficient in React, Redux, Javascript, Ruby on Rails, SQL, and HTML/CSS. With a professional background in communications and marketing, I'm looking forward to fusing my technological skills with my penchant for effective design. In my time at the Flatiron School, I was able to exercise my aptitude for problem-solving and developed pretty exceptional debugging skills. I'm a quick learner, passionate about programming, and would make a great addition to any team.</p>
            </Grid.Column>
            <Grid.Row></Grid.Row>
            <Grid.Row></Grid.Row>
            <Grid.Row></Grid.Row>
            <Grid.Row></Grid.Row>
            <Grid.Row></Grid.Row>
            <Grid.Row></Grid.Row>
            <Grid.Row></Grid.Row>
            <Grid.Row></Grid.Row>
            </Grid>
        </div>
    )
}
