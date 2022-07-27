import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <div>
      {/* Method to close modal (onCloseModal) defined in "AddUserForm" and passed here as props.
        the onClick event is used both in the Button and in the backdrop div to make possible 
        the close possibility through clicking out of the modal as well. */}
      <div className={classes.backdrop} onClick={props.onCloseModal} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onCloseModal}>Ok!</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
