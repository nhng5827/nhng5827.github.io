import React, {Component} from 'react';
import {Element} from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class Contact extends Component {
  render() {
    return (
      <Element id='contact' name='contact'>
      <Container fluid="fluid" className="contact-container">
        <Row>
          <Col>
            <div className="contact-header">
              <h2>Contact Me</h2>
            </div>
          </Col>
        </Row>
      <Row></Row>
        <Row>
          {/* <Col></Col> */}
          <Col>
            <div className="contact-symbols">
              <i class="fas fa-phone"></i>
            </div>
            <div className="contact-info">303-406-3618</div>
          </Col>
          <Col>
            <div className="contact-symbols">
              <i class="far fa-envelope"></i>
            </div>
            <div className="contact-info">nhi.q.nguyen@colorado.edu</div>
          </Col>
        </Row>
      </Container>
    </Element>
  )
  }
}

export default Contact;
