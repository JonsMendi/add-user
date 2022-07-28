import React, { useState, Fragment } from "react";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUserForm.module.css";

const AddUserForm = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const handleCloseModal = () => {
    setError(null);
  };

  const userNameSubmit = (event) => {
    console.log("Name", enteredUser);
    setEnteredUser(event.target.value);
  };

  const userAgeSubmit = (event) => {
    console.log("Age", enteredAge);
    setEnteredAge(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredUser.trim().length === 0) {
      // if the setError function is activated the title and message variables and their values
      // will be set on "error" variable by "setError".
      // then, when rendering it's possible to reach the information through "error.title or error.message".
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name (non-empty)",
      });
      return;
    } else if (enteredAge === "") {
      // if the setError function is activated the title and message variables and their values
      // will be set on "error" variable by "setError".
      // then, when rendering it's possible to reach the information through "error.title or error.message".
      setError({
        title: "Invalid Input",
        message: "Please enter a valid date (non-empty)",
      });
      return;
    } else {
      const userData = {
        name: enteredUser,
        age: new Date(enteredAge),
      };
      console.log(userData);
      //send the data back to parent component.
      props.onSaveNewUser(userData);
      // under we set the state of each input to empty again.
      // this is fully accomplished setting the value of each input
      // to variable that holds the data from the specific input (enteredUser and enteredAge).
      setEnteredUser("");
      setEnteredAge("");
    }
  };

  return (
    <Fragment>
      {/* If an error happens the ErrorModal will be executed */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCloseModal={handleCloseModal}
        />
      )}
      <div className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Type your name"
            value={enteredUser}
            onChange={userNameSubmit}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="date"
            value={enteredAge}
            onChange={userAgeSubmit}
          />
          <Button type="submit">Add Person</Button>
        </form>
      </div>
    </Fragment>
  );
};

export default AddUserForm;
