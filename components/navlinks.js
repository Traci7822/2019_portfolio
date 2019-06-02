class NavLinks extends React.Component {
  constructor(props) {
    super(props);
  }


render() {
  return(
    <div>
      <a href="#home" className={this.props.hamburger ? ' change' : null} onClick={this.props.handleClick.bind(this, "Home")} >Home</a>
      <a href="#resume" className={this.props.hamburger ? ' change' : null} onClick={this.props.handleClick.bind(this, "Resume")} >Resume</a>
      <a href="#navlinks" className={this.props.hamburger ? ' change' : null} onClick={this.props.handleClick.bind(this, "Contact")}  >Contact</a>
      <style jsx>{`
        a {
          text-decoration: none;
          color: white;
          font-family: 'Cinzel', serif;
          font-size: 1.5em;
        }
        .change {
        }
      `}</style>
    </div>
  )};
}
export default NavLinks