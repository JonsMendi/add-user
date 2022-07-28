import ReactDOM from "react-dom";
import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
import { Fragment } from "react";

// Under to make possible the use of Portals, in this case for modal and backdrop.
// To not interfere with the structure of the main root ("id="root""), we create Portals
// to render them outside like an overlay.

// Const that holds the backdrop and then will be displayed by the "backdrop-root"
// in index.html by ReactDOM.createPortal() in ErrorModal const.
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseModal} />;
};

// Const that holds the Modal himself and then will be displayed by the "modal-root"
// in index.html by ReactDOM.createPortal() in ErrorModal const.
const ModalCard = (props) => {
  return (
    //  Method to close modal (onCloseModal) defined in "AddUserForm" and passed here as props.
    //  the onClick event is used both in the Button and in the backdrop div to make possible
    //  the close possibility through clicking out of the modal as well.
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
  );
};

// Under is where we call the "Portals" through ReactDOM.createPortal().
const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalCard
          title={props.title}
          message={props.message}
          onCloseModal={props.onCloseModal}
        />,
        document.getElementById("modal-root")
      )}
      ;
    </Fragment>
  );
};

export default ErrorModal;
