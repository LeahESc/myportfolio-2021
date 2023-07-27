import React from 'react';
import _rea from '../images/_rea.png';
import _jav from '../images/_jav.png';
import _red from '../images/_red.png';
import _rai from '../images/_rai.png';
import _htm from '../images/_htm.png';
import _cas from '../images/_cas.png';
import _sq from '../images/_sq.png';

const TechSkills = () => { 
  return (
    <div className="technical-skills"  >
      <h2 className="technical-skills">Technical Skills</h2>
      <div className="tech-img-container">
        <img className="tech-skill" src={_rea} alt="react"></img>
        <img className="tech-skill" src={_red} alt="redux"></img>
        <img className="tech-skill" src={_jav} alt="javascript"></img>
        <img className="tech-skill" src={_rai} alt="rails"></img>
        <img className="tech-skill" src={_htm} alt="html"></img>
        <img className="tech-skill" src={_cas} alt="css"></img>
        <img className="tech-skill" src={_sq} alt="sql"></img>
      </div>
    </div>
  )
}

export default TechSkills;
