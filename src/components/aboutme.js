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
    My focus over the past 2 years in my professional career have been based around front-end JavaScript development for displays, data visualizations, and mapping.
  The first three applications' front-end listed under the work projects were built 100% by me. But, the GIS Data Converter project was a re-write of pre-existing PHP code, so some aspects were translated over. The other three I was pulled in to help on certain aspects, and I maintain these still. There are several other smaller displays, python tasks, that I have been a part of as well, such as writing archiving scripts in python.
Beyond the front-end scope, I hope to gain experience using Node.js.</p>
<br></br>
  <p>In my free time, I play ultimate frisbee on an elite level for Colorado Molly Brown, and have been able to represent the country at the U24 and U20 levels. I am actively coaching at Monarch High School, as well as over the summer at a youth league. I also enjoy climbing, skiing, and hiking when I'm not coding.</p>
</div>
</Col>
</Row>

</Container>
</Element>
    )
  }
}

export default About;
