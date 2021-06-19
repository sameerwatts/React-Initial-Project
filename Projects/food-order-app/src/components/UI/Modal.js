import React, { Fragment, useContext } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import OrderContext from "../../order-context/OrderContext";

const Backdrop = () => {
  const ctx = useContext(OrderContext);
  return <div onClick={ctx.hideCartHandler} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => (
  <div className={classes.modal}>{props.children}</div>
);

const portalEl = document.getElementById("overlays");

const Modal = (props) => {

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        portalEl
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalEl
      )}
    </Fragment>
  );
};

export default Modal;
