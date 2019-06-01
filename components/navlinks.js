class NavLinks extends React.Component {
  constructor(props) {
    super(props);
  }


render() {
  return(
    <div>
      <a href="#home" className={this.props.hamburger ? ' change' : null} >Home</a>
      <a href="#resume" className={this.props.hamburger ? ' change' : null} >Resume</a>
      <a href="#navlinks" className={this.props.hamburger ? ' change' : null} >NavLinks</a>
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