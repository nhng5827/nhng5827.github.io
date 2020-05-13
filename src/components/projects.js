import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, IconButton} from 'react-mdl'
import portfolioCard from '../assets/portfolioSS.png'
import mdssCard from '../assets/MDSS.png';
import scCard from '../assets/SCSS.png';
import ftCard from '../assets/FTSS.png';
import vrCard from '../assets/VRSS.png';
import { Element } from 'react-scroll';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import YouTube from 'react-youtube';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class Project extends Component {
  constructor(props){
    super(props);
    this.state = {activeTab: 0,demo:''}
    this.DemoYoutube = this.DemoYoutube.bind(this);
  }

DemoYoutube() {
const [show, setShow] = React.useState(false);
console.log(this.state.demo)
var vidID;
vidID = this.state.demo
if (show) {

  return (
    <Alert variant="light" onClose={() => setShow(false)} dismissible>
      <Alert.Heading>&nbsp;</Alert.Heading>
      <YouTube videoId={vidID} opts={{height: '390', width: '400', playerVars: {autoplay: 1}
    }}/>

    </Alert>
  );
}
return <Button style={{'background-color':'#BE93C5', 'border-color':'#BE93C5'}} onClick={() => setShow(true)}>Show Demo</Button>;
}

toggleCategories(){
  if(this.state.activeTab === 0){
    return(
      /*Work Tab*/
      <div className="work-grid">
        <CardDeck className="work-cards">
      <Card shadow={5} style={{width:'450px', margin:'auto'}} onClick ={() => this.setState({demo: "_wDq7r4BWJk"})}>
        <Card.Img variant="top" style={{color:'#fff', height:'450px', background:"url(" + mdssCard +") center / cover"}}/>
        <Card.Body>
        <Card.Title style={{color:'#000'}}>DIA MDSS Display</Card.Title>
        <Card.Text>
          Single-page web/mobile-web app for Denver Airport Decision Support System. My role was building out the front-end portion that makes GoLang API requests based on the region/site IDs. Tech Used: Javascript, HTML/CSS, Highcharts, Bootstrap
        </Card.Text>
          <this.DemoYoutube/>
      </Card.Body>
      </Card>
    </CardDeck>
    </div>
    )
  }else if(this.state.activeTab === 1){
    return(
      /*React Tab*/
      <div className="react-grid">
        <CardDeck className="react-cards">
      <Card shadow={5} style={{width:'450', margin:'auto'}}>
        <Card.Img variant="top" style={{color:'#fff', height:'450px', background:"url(" + portfolioCard +") center / cover"}}/>
        <Card.Body>
        <Card.Title style={{color:'#000'}}>React Portfolio</Card.Title>
        <Card.Text>
          First React Project involving creating a React based portfolio site. Tech Used: React, React-MDL, React-Bootstrap, React-YouTube
        </Card.Text>
          <Button style={{'background-color':'#BE93C5', 'border-color':'#BE93C5'}} href="https://github.com/nhng5827/nhng5827.github.io">GitHub</Button>
      </Card.Body>
      </Card>
    </CardDeck>
    </div>
    )
  }else if(this.state.activeTab === 2){
    return(
      /*School Tab*/
      <div className="school-grid">
        <CardDeck className="school-cards">
      <Card shadow={5} style={{width:'450px'}} onClick ={() => this.setState({demo: "H-E6FKToP2M"})}>
        <Card.Img variant="top" style={{color:'#fff', height:'450px', background:"url(" + scCard +") center / cover"}}/>
        <Card.Body>
        <Card.Title style={{color:'#000'}}>Sweet Cow Graphics Project</Card.Title>
        <Card.Text>
          Re-made the Sweet Cow Louisville shop for my graphics final project. Created objects, textures, shadows to accurately render a virtual version of the shop. Tech Used: C++, OpenGL, GLUT
        </Card.Text>
          <this.DemoYoutube/>&nbsp;
          <Button style={{'background-color':'#BE93C5', 'border-color':'#BE93C5'}} href="https://github.com/nhng5827/GraphicsFinal">GitHub</Button>
      </Card.Body>
      </Card>
      <Card shadow={5} style={{width:'450px'}} onClick ={() => this.setState({demo: "IM8rUX7QuC4"})}>
        <Card.Img variant="top" style={{color:'#fff', height:'430px', background:"url(" + ftCard +") center / cover"}}/>
        <Card.Body>
        <Card.Title style={{color:'#000'}}>Entreprenurial Capstone Project</Card.Title>
        <Card.Text>
          Senior Entreprenurial Capstone project MVP of a trip and budget all-in-one app. The app wasn't finished by the end of the semester, but a lot was learned along the way with regards to start-ups. Tech Used: Javascript, Boostrap, Node.js, MongoDB
        </Card.Text>
          <this.DemoYoutube/>&nbsp;
          <Button style={{'background-color':'#BE93C5', 'border-color':'#BE93C5'}} href="https://github.com/sendacrate/sendacrate.github.io">GitHub</Button>
      </Card.Body>
      </Card>

      <Card shadow={5} style={{width:'450px'}} onClick ={() => this.setState({demo: "Df1K4sB7FDk"})}>
        <Card.Img variant="top" style={{color:'#fff', height:'430px', background:"url(" + vrCard +") center / cover"}}/>
        <Card.Body>
        <Card.Title style={{color:'#000'}}>VR Final Project</Card.Title>
        <Card.Text>
          Intro to VR Final Group Project. One of the group members had a trip in Africa and filmed 3D videos. We encapsulated the videos in various theme placards, and clicking each placard would bring up 4 different videos to choose from. Tech Used: C#, Unity, Samsung Phone
        </Card.Text>
          <this.DemoYoutube/>&nbsp;
          <Button style={{'background-color':'#BE93C5', 'border-color':'#BE93C5'}} href="https://github.com/nhng5827/ZimVR">GitHub</Button>
      </Card.Body>
      </Card>
  </CardDeck>
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
        <Tabs TabIndicatorProps={{style: {background:'green'}}} activeTab ={this.state.activeTab} onChange ={(tabId) => this.setState({activeTab: tabId})} ripple>
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
