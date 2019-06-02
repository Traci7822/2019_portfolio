class NavLinks extends React.Component {
  constructor(props) {
    super(props);
  }


render() {
  return(
    <div className="navlinks">
      <a href="#home" className={this.props.hamburger ? ' change' : null} onClick={this.props.handleClick.bind(this, "Home")} >Home</a>
      <br />
      <a href="#resume" className={this.props.hamburger ? ' change' : null} onClick={this.props.handleClick.bind(this, "Resume")} >Resume</a>
      <br />
      <a href="#about" className={this.props.hamburger ? ' change' : null} onClick={this.props.handleClick.bind(this, "About")} >About Me</a>
      <style jsx>{`
        a {
          text-decoration: none;
          color: white;
          font-family: 'Cinzel', serif;
          font-size: 1.3em;
        }

        .navlinks {
          width: 10%;
        }
      `}</style>
    </div>
  )};
}
export default NavLinks