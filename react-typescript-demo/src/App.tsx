import "./App.css";
import Button from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
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
      {/* <Greet name="Shreeyansh" isloggedIn={false} /> */}
      {/* <Person name={personName} />
      <PersonList names={nameList} /> */}
      {/* <Status status="loading" />
      <Heading>PlaceHolder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Dicaprio!</Heading>
      </Oscar> */}
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;
