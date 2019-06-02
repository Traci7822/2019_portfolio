import styled from 'styled-components';
import Header from '../components/header';
import React from 'react';
import Home from '../components/home';
import NavLinks from '../components/navlinks';
import Resume from '../components/resume';
import Contact from '../components/contact';
import About from '../components/about';

class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: 'Home',
      hamburger: true,
    };
  }

  toggleMenu = () => {
    this.setState({
      hamburger: !this.state.hamburger
    });
  }

  focus = (event) => {}

  handleClick = (e) => {
    this.setState({
      active: e
    });
  }

  pageComponent = () => {
    switch(this.state.active) {
      case 'Home': return <Home handleClick={this.handleClick}/>;
      case 'Resume': return <Resume handleClick={this.handleClick}/>;
      case 'Contact': return <Contact handleClick={this.handleClick}/>;
      case 'About': return <About handleClick={this.handleClick}/>;
    }
  }

  render() {
    return (
      <div className="page">
        <div className="index">
          <Header onClick={this.toggleMenu.bind(this)} toggleMenu={this.toggleMenu} hamburger={this.state.hamburger} />
          {this.state.hamburger ? <div style={{width : "10%"}}></div> : <NavLinks hamburger={this.state.hamburger} handleClick={this.handleClick}/>}
          <h3 id="name">Traci Thompson | Full Stack Developer</h3>
        </div>
        <div className="content">
          {this.pageComponent()}
        </div>
        <style jsx>{`
          #name {
            margin-right: 10%;
          }
          .index {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }

          h3 {
            width: 75%;
            text-align: center;
            color: white;
            font-size: 2.2em; 
            line-height: .5;
            font-family: 'Cinzel', serif;
            margin-top: 50px;
          }

          h1 {
            line-height: 0;
          }
        `}</style>
      </div>
    );
  }
};

export default Index;