import UsersDate from "./UsersDate";
import Card from "../UI/Card";
import styles from "./UsersData.module.css";

const UsersData = (props) => {
  return (
    <Card className={styles["usersData-wrapper"]}>
      <div className="usersData-items">
        <h3>{props.name}</h3>
        <UsersDate age={props.age} />
      </div>
    </Card>
  );
};
export default UsersData;
