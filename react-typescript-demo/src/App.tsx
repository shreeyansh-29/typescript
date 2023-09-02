import "./App.css";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import { Person } from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Tim",
      last: "Paine",
    },
    {
      first: "Michael",
      last: "Clark",
    },
    {
      first: "Jim",
      last: "Beam",
    },
  ];

  return (
    <div className="App">
      <Greet name="Shreeyansh" isloggedIn={false} />
      {/* <Person name={personName} />
      <PersonList names={nameList} /> */}
      <Status status="loading" />
      <Heading>PlaceHolder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Dicaprio!</Heading>
      </Oscar>
    </div>
  );
}

export default App;
