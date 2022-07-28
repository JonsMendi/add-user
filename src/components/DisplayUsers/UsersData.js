import UsersDate from "./UsersDate";
import Card from "../UI/Card";
import styles from "./UsersData.module.css";

const UsersData = (props) => {
  return (
    <Card className={styles["usersData-wrapper"]}>
      <div className={styles["usersData-items"]}>
        <h3>Name: </h3>
        <h4>{props.name}</h4>
        <UsersDate age={props.age} />
      </div>
    </Card>
  );
};
export default UsersData;
