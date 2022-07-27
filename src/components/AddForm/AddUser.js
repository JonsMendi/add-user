import AddUserForm from "./AddUserForm";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const saveNewUser = (newEnteredUser) => {
    console.log("Arrived at AddNewUser as props", newEnteredUser);
    const userData = {
      ...newEnteredUser,
      // attribute a random id.
      id: Math.random().toString(),
    };
    props.addOnUser(userData);
  };

  return (
    <div className={styles["addUser-wrapper"]}>
      <AddUserForm onSaveNewUser={saveNewUser} />
    </div>
  );
};

export default AddUser;
