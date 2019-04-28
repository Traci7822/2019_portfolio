import styled from 'styled-components';
import Header from '../components/header';

export default () => (
  <div>
    <Header />
    <div className="banner">
      <div className="profile_text">
        <h1>Traci Thompson</h1>
        <h3>Full Stack Software Developer</h3>
      </div>
    </div>
    <style jsx>{`
      .banner {
        height: 90%;
        width: 95%;
        border: 1px solid black;
        margin: 0;
        position: absolute;
        top: 50%;
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
      }

      h1 {
        line-height: 0;
      }
    `}</style>
  </div>
);