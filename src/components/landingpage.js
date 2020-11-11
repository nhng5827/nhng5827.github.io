import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profilepic from '../assets/prof.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
class Landing extends Component {
  render() {
    return (<div style={{
        width: '100%',
        margin: 'auto'
      }}>
      <Container fluid="fluid" className="landing-grid">
        <Row>
          <Col>
          <LazyLoadImage
            alt="profile"
            className="profile-pic"
            effect="blur"
            src={profilepic} // use normal <img> attributes as props
            />
            {/*<img className="profile-pic" alt="prof" src={profilepic}/>*/}
            <div className="banner-text">
              <h1 style={{color:'#BE93C5'}}>NHI NGUYEN</h1>
              <hr></hr>
              <h2 style={{color:'#7BC6CC'}}>Software Engineer</h2>
              <p>JavaScript | jQuery | Python | HTML/CSS | Highcharts | Bootstrap | Bash Scripting | Photoshop</p>
              <span>React | Angular | Ext JS | MySQL | Java | OpenLayers | Leaflet | HTML5 | SASS | Typescript</span>
              <div className="social-links">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/nhi-q-nguyen/" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
                {/* GitHub */}
                <a href="https://github.com/nhng5827" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>)
  }
}

export default Landing;
