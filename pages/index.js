import styled from 'styled-components';
import Header from '../components/header';
import React from 'react';
import Home from '../components/home';
import News from '../components/news';
import Contact from '../components/contact';
import About from '../components/about';

class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: 'Home',
    };
  }

  toggleMenu = () => {}
  focus = (event) => {}

  handleClick = (e, page) => {
    this.setState({
      active: e
    });
  }

  pageComponent = () => {
    switch(this.state.active) {
      case 'Home': return <Home />;
      case 'News': return <News />;
      case 'Contact': return <Contact />;
      case 'About': return <About />;
    }
  }

  render() {
    return (
      <div className="page">
        <div className="index">
          <Header onClick={this.toggleMenu.bind(this)} toggleMenu={this.toggleMenu} active={this.state.active} />
          <div className={"topnav " + (this.state.active ? ' change' : null)} id="myTopnav">
            <a href="#home" onClick={this.handleClick.bind(this, 'Home')} data-id="Home">Home</a>
            <a href="#news" onClick={this.handleClick.bind(this, 'News')}>News</a>
            <a href="#contact" onClick={this.handleClick.bind(this, 'Contact')}>Contact</a>
            <a href="#about" onClick={this.handleClick.bind(this, 'About')}>About</a>
          </div>
          <h3>Traci Thompson | Full Stack Developer</h3>
        </div>
        <div>
          {this.pageComponent()}
        </div>
        <style jsx>{`
          .index {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }

          h3 {
            width: 100%;
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

          .topnav {
            opacity: 0;
            width: 10%;
          }

          .topnav.change {
            opacity: 100;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 10%;
          }

          a {
            text-decoration: none;
            color: white;
            font-family: 'Cinzel', serif;
          }
        `}</style>
      </div>
    );
  }
};

export default Index;