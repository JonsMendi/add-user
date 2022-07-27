import UsersData from "./UsersData";

const UsersDisplay = (props) => {
  return (
    <div>
      <div>
        {props.users.map((item) => {
          return <UsersData key={item.id} name={item.name} age={item.age} />;
        })}
      </div>
    </div>
  );
};

export default UsersDisplay;
