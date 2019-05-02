import styled from 'styled-components';
import Header from '../components/header';

export default () => (
  <div className="index">
    {/* <Header /> */}
    <div className="profile_text">
      <h3>Traci Thompson | Full Stack Developer</h3>
    </div>
    <div className="banner"></div>
    <style jsx>{`
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

      .profile_text {
        width: 100%;
        text-align: center;
        color: white;
        font-size: 3em; 
        line-height: .5;
        font-family: 'Cinzel', serif;
      }

      h1 {
        line-height: 0;
      }
    `}</style>
  </div>
);