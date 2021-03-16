import React, { Component } from 'react'
import pho from '../images/pho.png'
import TechSkills from './TechSkills'
import phomovie from '../images/phomovie.mp4'
import {Grid, Column} from 'semantic-ui-react'

class Home extends Component {
    
    render() {
        return (
            <>
            <div className="intro">
                <Grid columns={3}>
                    <Grid.Column width={10}>
                    {/* <div class="intro--title"> */}
                        <h1 className="intro--title"> Hi,</h1>
                        <h1 className="intro--title"> I'm Leah</h1>
                    {/* </div> */}
                    
                </Grid.Column>
                <Grid.Column width={6}>
                    <div className="pho-bowl">
                         {/* <img src={pho}/> */}
                        <video controls autoPlay loop muted> 
                        <source src={phomovie} type="video/mp4"></source>
                        </video>
                    </div>
                </Grid.Column>
                </Grid>
                <div className="intro--subtitle">
                        Full Stack Software Engineer + lover of pho
                </div>
                <Grid.Row>
                <TechSkills />
                </Grid.Row>
            </div>
            </>
        )
    }
}
export default Home;