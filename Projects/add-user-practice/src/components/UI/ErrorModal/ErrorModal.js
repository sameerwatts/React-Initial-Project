import React, { Fragment } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";

import classes from "./errorModal.module.css";


const ErrorModal = (props) => {
  return <Fragment>
      <div className={classes.backdrop} onClick={props.onConfirm} />
       <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.errorMessage.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.errorMessage.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button type='button' onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  </Fragment>;
};

export default ErrorModal;
