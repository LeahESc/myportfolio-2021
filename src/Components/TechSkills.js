import React, { Component } from 'react'
import reactimg from '../images/reactimg.png'
import js from '../images/js.png'
import rls from '../images/rls.png'
import ht from '../images/ht.png'
import cascade from '../images/cascade.png'
import sqlimg from '../images/sqlimg.png'
import { Item } from 'semantic-ui-react'

class TechSkills extends Component {
    render() {
        return (
            <div className="technical-skills">
                <h2 className="technical-skills">Technical Skills</h2>
                <div className="tech-imgs">
                    <img className="tech-skill" src={reactimg}></img>
                    <img className="tech-skill" src={js}></img>
                    <img className="tech-skill" src={rls}></img>
                    <img className="tech-skill" src={ht}></img>
                    <img className="tech-skill" src={cascade}></img>
                    <img className="tech-skill" src={sqlimg}></img>
                </div>
            </div>
        )
    }
}
export default TechSkills