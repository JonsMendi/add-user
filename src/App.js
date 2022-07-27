import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/AddForm/AddUser";
import UsersDisplay from "./components/DisplayUsers/UsersDisplay";

function App() {
  // addUser will contain the updated "usersList".
  // This means that every time one new user is added, he will be saved in "addUser" and therefore
  // inserted in the "userList" array as a new object.
  const [addUser, setAddUser] = useState([]);

  const addUserHandler = (user) => {
    setAddUser((previousState) => {
      console.log("Arrived at App.js as props", user);
      return [user, ...previousState];
    });
  };

  return (
    <div className="App">
      <AddUser addOnUser={addUserHandler} />
      <UsersDisplay users={addUser} />
    </div>
  );
}

export default App;
