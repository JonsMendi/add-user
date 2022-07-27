import "./Card.css";

const Card = (props) => {
  // under, it allows other classes being added to the card class.
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};
export default Card;
