import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, IconButton} from 'react-mdl'
import portfolioCard from '../assets/portfolioSS.png'
import mdssCard from '../assets/MDSS.png';
import scCard from '../assets/SCSS.png';
import ftCard from '../assets/FTSS.png';
import { Element } from 'react-scroll';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import YouTube from 'react-youtube'
class Project extends Component {
  constructor(props){
    super(props);
    this.state = {activeTab: 0}
    this.DemoMDSSYoutube = this.DemoMDSSYoutube.bind(this);
  }
  toggleDemo(){
    // this.setState({demo:'www.google.com'})
    return(<Alert variant="light">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
    Aww yeah, you successfully read this important alert message. This example
    text is going to run a bit longer so that you can see how spacing within an
    alert works with this kind of content.
  </p>
  <hr />
  <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
  </p>
    </Alert>)
  }

  DemoMDSSYoutube() {
  const [show, setShow] = React.useState(false);

  if (show) {

    return (
      <Alert variant="light" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>&nbsp;</Alert.Heading>
        <YouTube videoId="_wDq7r4BWJk" opts={{height: '390', width: '400', playerVars: {autoplay: 1}
      }}/>

      </Alert>
    );
  }
  return <Button style={{'background-color':'#BE93C5', 'border-color':'#BE93C5'}} onClick={() => setShow(true)}>Show Demo</Button>;
}
DemoSCYoutube() {
const [show, setShow] = React.useState(false);

if (show) {

  return (
    <Alert variant="light" onClose={() => setShow(false)} dismissible>
      <Alert.Heading>&nbsp;</Alert.Heading>
      <YouTube videoId="H-E6FKToP2M" opts={{height: '390', width: '400', playerVars: {autoplay: 1}
    }}/>

    </Alert>
  );
}
return <Button style={{'background-color':'#BE93C5', 'border-color':'#BE93C5'}} onClick={() => setShow(true)}>Show Demo</Button>;
}

toggleCategories(){
  //this.setState({demo: 'MDSS'})

  if(this.state.activeTab === 0){

    return(
      /*Work Tab*/

      <div className="projects-grid">
      <Card shadow={5} style={{width:'450px', margin:'auto'}}>
        <Card.Img variant="top" style={{color:'#fff', height:'450px', background:"url(" + mdssCard +") center / cover"}}/>
        <Card.Body>
        <Card.Title style={{color:'#000'}}>DIA MDSS Display</Card.Title>
        <Card.Text>
          Single-page web/mobile-web app for Denver Airport Decision Support System. My role was building out the front-end portion that makes GoLang API requests based on the region/site IDs. Tech Used: Javascript, HTML/CSS, Highcharts, Bootstrap
        </Card.Text>
          <this.DemoMDSSYoutube/>
      </Card.Body>
      </Card>
    </div>
    )
  }else if(this.state.activeTab === 1){
    return(
      /*React Tab*/
      <div className="projects-grid">
      <Card shadow={5} style={{width:'450', margin:'auto'}}>
        <Card.Img variant="top" style={{color:'#fff', height:'450px', background:"url(" + portfolioCard +") center / cover"}}/>
        <Card.Body>
        <Card.Title style={{color:'#000'}}>React Portfolio</Card.Title>
        <Card.Text>
          First React Project involving creating a React based portfolio site. Tech Used: React, React-MDL, React Router DOM
        </Card.Text>
          <Button style={{'background-color':'#BE93C5', 'border-color':'#BE93C5'}} href="https://github.com/nhng5827/nhng5827.github.io">GitHub</Button>
        {/*<CardMenu style={{color: '#fff'}}>
          <IconButton name="share"/>
        </CardMenu> */}
      </Card.Body>
      </Card>
    </div>
    )
  }else if(this.state.activeTab === 2){
    return(
      <div className="school-grid">
      <Card shadow={5} style={{width:'450px', margin:'auto'}}>
        <Card.Img variant="top" style={{color:'#fff', height:'450px', background:"url(" + scCard +") center / cover"}}/>
        <Card.Body>
        <Card.Title style={{color:'#000'}}>Sweet Cow Graphics Project</Card.Title>
        <Card.Text>
          Re-made the Sweet Cow Louisville shop for my graphics final project. Tech Used: C++, OpenGL, GLUT
        </Card.Text>

          <this.DemoSCYoutube/>&nbsp;
          <Button style={{'background-color':'#BE93C5', 'border-color':'#BE93C5'}} href="https://github.com/nhng5827/GraphicsFinal">GitHub</Button>
      </Card.Body>
      </Card>
      <Card shadow={5} style={{width:'450px', margin:'auto'}}>
        <Card.Img variant="top" style={{color:'#fff', height:'450px', background:"url(" + ftCard +") center / cover"}}/>
        <Card.Body>
        <Card.Title style={{color:'#000'}}>Entreprenurial Capstone Project</Card.Title>
        <Card.Text>
          Re-made the Sweet Cow Louisville shop for my graphics final project. Tech Used: C++, OpenGL, GLUT
        </Card.Text>

          <this.DemoSCYoutube/>&nbsp;
          <Button style={{'background-color':'#BE93C5', 'border-color':'#BE93C5'}} href="https://github.com/sendacrate/sendacrate.github.io">GitHub</Button>
      </Card.Body>
      </Card>
    </div>
    )
  }
}

  render(){
    return(
      <Element id='projects' name='projects'>
      <div className="category-tabs">
        <div className="project-header">
        <h2>Projects</h2>
      </div>
        <Tabs activeTab ={this.state.activeTab} onChange ={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>Work</Tab>
          <Tab>React</Tab>
          <Tab>School</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              {this.toggleCategories()}
            </Cell>
          </Grid>
      </div>
    </Element>
    )
  }
}

export default Project;
