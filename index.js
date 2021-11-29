function MyNavbar(props) {
  return (
    <nav className={"menu"}>
      <h1>{props.mainText.toUpperCase()}</h1>
      <a href="https://www.ironhack.com/es">Ironhack</a>
      <a href="https://www.ironhack.com/es">React</a>
    </nav>
  );
}
function MyFooter() {
  return (
    <p>
      <span>This is the first react App for the Ovelles Negres</span>
    </p>
  );
}
function PersonCard(props) {
  return (
    <div className={"person-card"}>
      <p>Name: {props.person.name}</p>
      <p>Surname: {props.person.surname}</p>
      <p>Nationality: {props.person.nationality}</p>
    </div>
  );
}
function App() {
  const person = {
    name: "Julia",
    surname: "Janicka",
    nationality: "Polish",
  };
  return (
    <div>
      <MyNavbar id={"my-navbar"} className={"cicio"} mainText={"heading"} />{" "}
      {/*This is equivalent to call a function MyNavbar (mainText=heading)*/}
      <PersonCard person={person} />
      <MyFooter />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
