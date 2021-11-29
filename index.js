//function MyNavbar(props) {
  //return (
   // <nav>
 //     <h1>{props.mainText.toUpperCase()}</h1>
   //   <a href="ironhack.com">Iornhack</a>
     // <br />
      //<a href="reactjs.org">React</a>
    //</nav>
 // )}

//function MyFooter() {
 // return (
 //   <p>
//      <span>This is the first react application for the Ovelles Negres</span>
  //  </p>
//  );}

function PersonCard(props) {
  return (
    <div class="person-card">
      <p>Name: {props.person.name}</p>
      <p>Surname: {props.person.surname}</p>
      <p>Age: {props.person.age}</p>
      <p>Height: {props.person.height}</p>
    </div>
  );
}

function App() {
  const person = {
    name: "Julia",
    surname: "Janicka",
    age: 32,
    height: 170,
  };

  return <PersonCard person={person} />;
}
ReactDOM.render(<App />, document.getElementById("root"));
