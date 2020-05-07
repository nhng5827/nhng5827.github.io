import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import profilepic from '../assets/prof.png'
class Landing extends Component {
  render(){
    return(
      <div style={{width: '100%', margin:'auto'}}>
      <Grid className="landing-grid">
      <Cell col={12}>
      <img className="profile-pic" alt="prof" src={profilepic} />
      <div className="banner-text">
        <h1>NHI NGUYEN</h1>
        <hr>
        </hr>
        <h2>Software Engineer</h2>
        <p>Javascript | jQuery | Python | HTML/CSS | Highcharts | JSON | Bootstrap | Bash Scripting | Photoshop</p>
        <span>React | Ext JS | MySQL | OpenLayers | Leaflet | HTML5 | SASS</span>
        <div className="social-links">
          {/*LinkedIn*/}
          <a href="https://www.linkedin.com/in/nhi-q-nguyen/" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          {/*GitHub*/}
          <a href="https://github.com/nhng5827" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      </Cell>
  </Grid>
      </div>
    )
  }
}

export default Landing;
