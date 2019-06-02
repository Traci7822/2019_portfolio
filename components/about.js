import ContactLinks from './contactlinks';
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

toggleLinks = () => {
  this.setState({
    show: !this.state.show,
  });
}
showLinks = () => {
  return <ContactLinks />
}
render() {
  return(
    <div className="about">
      <p>My unique background helps me to view software development through a creative lens. </p>
      <p>I come from an upbrining immersed in visual arts, years spent learning and working in the culinary arts,
        and continued education in multiple areas with a focus towards Public Health and federal grant work.</p>

      <p>As a Full Stack Developer I can provide custom services depending upon your needs. Please contact me using
        any of the methods below if you would like to discuss a potential project.</p>
      <a href="#contact_links"><img src="../static/arrows.png" onClick={this.toggleLinks} /></a>
      <div id="contact_links">
        {this.state.show ? this.showLinks() : null}
      </div>
      <style jsx>{`
        .about {
          color: white;
          font-family: 'Cinzel', serif;
          width: 80%;
          font-size: 2em;
          margin-top: 3%;
        }
      `}</style>
    </div>
  )};
}
export default About