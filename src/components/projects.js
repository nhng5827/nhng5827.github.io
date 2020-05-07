import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText,CardActions, Button, CardMenu, IconButton} from 'react-mdl'
import portfolioCard from '../assets/portfolioSS.png'
import mdssCard from '../assets/MDSS.png'
class Project extends Component {
  constructor(props){
    super(props);
    this.state = {activeTab: 0}
  }
toggleCategories(){
  if(this.state.activeTab === 0){
    return(
      /*Work Tab*/
      <div className="projects-grid">
      <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
        <CardTitle style={{color:'#000', height:'350px', background:"url(" + mdssCard +") center / cover"}}>DIA MDSS Display</CardTitle>
        <CardText>
          Single-page web/mobile-web app for Denver Airport Decision Support System. My role was building out the front-end portion. Tech Used: Javascript, HTML/CSS, Highcharts, Bootstrap
        </CardText>
         <CardActions border>
          <Button colored>Demo</Button>
        </CardActions>
        {/*<CardMenu style={{color: '#fff'}}>
          <IconButton name="share"/>
        </CardMenu> */}
      </Card>
    </div>

    )
  }else if(this.state.activeTab === 1){
    return(
      /*React Tab*/
      <div className="projects-grid">
      <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
        <CardTitle style={{color:'#fff', height:'350px', background:"url(" + portfolioCard +") center / cover"}}>React Portfolio</CardTitle>
        <CardText>
          First React Project involving creating a React based portfolio site. Tech Used: React, React-MDL, React Router DOM
        </CardText>
         <CardActions border>
          <Button colored>GitHub</Button>
        </CardActions>
        {/*<CardMenu style={{color: '#fff'}}>
          <IconButton name="share"/>
        </CardMenu> */}
      </Card>
    </div>
    )
  }else if(this.state.activeTab === 2){
    return(
      <div><h1>School</h1></div>
    )
  }
}

  render(){
    return(
      <div className="category-tabs">
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
    )
  }
}

export default Project;
