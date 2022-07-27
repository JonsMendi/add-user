const UsersDate = (props) => {
  const day = props.age.toLocaleString("en-US", { day: "2-digit" });
  const month = props.age.toLocaleString("en-US", { month: "long" });
  const year = props.age.getFullYear();

  return (
    <div>
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
};
export default UsersDate;
