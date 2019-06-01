class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

render() {
  return(
    <div>
      <a href="mailto:Traci@Thompson.Codes" targer="_href">Traci@Thompson.Codes</a>
      <style jsx>{`
        a {
          text-decoration: none;
          color: white;
          font-family: 'Cinzel', serif;
          font-size: 3em;
        }
      `}</style>
      </div>
  )};
}
export default Contact