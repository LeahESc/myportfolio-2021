import React, { Component } from 'react'
import _rea from '../images/_rea.png'
import _jav from '../images/_jav.png'
import _red from '../images/_red.png'
import _rai from '../images/_rai.png'
import _htm from '../images/_htm.png'
import _cas from '../images/_cas.png'
import _sq from '../images/_sq.png'
import { Item } from 'semantic-ui-react'

class TechSkills extends Component {
    render() {
        return (
            <div className="technical-skills">
                <h2 className="technical-skills">Technical Skills</h2>
                <div className="tech-imgs">
                    <img className="tech-skill" src={_rea}></img>
                    <img className="tech-skill" src={_red}></img>
                    <img className="tech-skill" src={_jav}></img>
                    <img className="tech-skill" src={_rai}></img>
                    <img className="tech-skill" src={_htm}></img>
                    <img className="tech-skill" src={_cas}></img>
                    <img className="tech-skill" src={_sq}></img>
                </div>
            </div>
        )
    }
}
export default TechSkills