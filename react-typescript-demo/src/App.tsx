import "./App.css";
import Greet from "./components/Greet";
import { Person } from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Tim',
      last: 'Paine'
    },
    {
      first: 'Michael',
      last: 'Clark'
    },
    {
      first: 'Jim',
      last: 'Beam'
    }
  ]

  return (
    <div className="App">
      <Greet name="Shreeyansh" messageCount={10} isloggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
