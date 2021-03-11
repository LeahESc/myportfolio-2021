import React, { Component } from 'react'
import pho from '../images/pho.png'
import TechSkills from './TechSkills'
import {Grid, Column} from 'semantic-ui-react'

class Home extends Component {
    
    render() {
        return (
            <div className="intro">
                <Grid columns={3}>
                    <Grid.Column width={9}>
                    <div className="intro--title">
                        <h1> Hi, I'm Leah Schlackman</h1>
                    </div>
                    <div className="intro--subtitle">
                        Full Stack Software Engineer + lover of pho
                    </div>
                </Grid.Column>
                <Grid.Column width={5}>
                    <div className="pho-bowl">
                        <img src={pho}/>
                    </div>
                </Grid.Column>
                </Grid>
                {/* <TechSkills /> */}
                
            </div>
        )
    }
}
export default Home;