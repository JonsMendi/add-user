import React, { useState, Fragment, useRef } from "react";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUserForm.module.css";

const AddUserForm = (props) => {
  const addingUser = useRef();
  const addingAge = useRef();
  const [error, setError] = useState();

  const handleCloseModal = () => {
    setError(null);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const addedUserInput = addingUser.current.value;
    const addedAgeInput = addingAge.current.value;
    if (addedUserInput.trim().length === 0) {
      // if the setError function is activated the title and message variables and their values
      // will be set on "error" variable by "setError".
      // then, when rendering it's possible to reach the information through "error.title or error.message".
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name (non-empty)",
      });
      return;
    } else if (addedAgeInput === "") {
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
        name: addedUserInput,
        age: new Date(addedAgeInput),
      };
      console.log(userData);
      //send the data back to parent component.
      props.onSaveNewUser(userData);
      // under we set the state of each input to empty again.
      // here we changed the node value to nothing.
      // This is an approach that should not be used at all in other situations.
      addingUser.current.value = "";
      addingAge.current.value = "";
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
            ref={addingUser}
          />
          <label htmlFor="age">Age</label>
          <input id="age" type="date" ref={addingAge} />
          <Button type="submit">Add Person</Button>
        </form>
      </div>
    </Fragment>
  );
};

export default AddUserForm;
