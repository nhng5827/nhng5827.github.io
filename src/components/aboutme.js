import React, { Component } from 'react';
import {Element} from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class About extends Component {
  render(){
    return(
      <Element id='about' name='about'>
      <Container fluid="fluid" className="contact-container">
        <Row>
          <Col>
      <div className="about-header"><h2>About Me</h2></div>

    </Col>
    {/* <Col></Col> */}
  </Row>
<Row>
  <Col>
  <div className="about-text">
  <p>I'm a software engineer based in Boulder, CO with a passion for coding.
    My focus over the past 2 years in my professional career have been based around front-end JavaScript development for displays and data visualizations.
  These various displays and single-page webapps were built ground-up with only the addition of Bootstrap and jQuery libraries, or using the Ext JS Framework.
  Each of them feature interactive charts using Highcharts plotting packages that I have spent a lot of time with learning on my own.
Though the tech stack doesn't range very far at my current job, I have been teaching myself React to expand my skills.
Beyond the front-end scope, I hope to gain experience using Node.js.</p>
</div>
</Col>
</Row>

</Container>
</Element>
    )
  }
}

export default About;
