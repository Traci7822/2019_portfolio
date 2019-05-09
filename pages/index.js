import styled from 'styled-components';
import Header from '../components/header';
import React from 'react';

class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  toggleMenu = () => {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    return (
      <div className="page">
        <div className="index">
          <Header onClick={this.toggleMenu.bind(this)} toggleMenu={this.toggleMenu} active={this.state.active} />
          <div className={"topnav " + (this.state.active ? ' change' : null)} id="myTopnav">
            <a href="#home" className="active">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
          <h3>Traci Thompson | Full Stack Developer</h3>
        </div>
        <div className="banner"></div>
        <style jsx>{`
          .index {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
          .banner {
            height: 80%;
            width: 95%;
            border: 15px solid white;
            margin: 0;
            position: absolute;
            top: 55%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: url("../static/traci-mountain.jpg");
            background-size: cover;
            background-position: left;
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
            width: 0;
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