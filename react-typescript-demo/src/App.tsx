import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import { Person } from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import { Toast } from "./components/TemplateLiterals/Toast";
import { Private } from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import User from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
// import { List } from "./generics/List";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    { id: 1, first: "Tim", last: "Paine" },
    {
      first: "Michael",
      last: "Clark",
      id: 2,
    },
    {
      first: "Jim",
      last: "Beam",
      id: 3,
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
      {/* <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} /> */}
      {/* <Container styles={{ border: "1px solid black", margin: "1rem" }} /> */}
      {/* <ThemeContextProvider>
        <Box  />
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <Private isLoggedIn={true} component={Profile} /> */}
      {/* <List
        items={["Batman", "Superman", "Spiderman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      {/* <List items={nameList} onClick={(item) => console.log(item)} /> */}
      <Toast position="left-center" />
    </div>
  );
}

export default App;
