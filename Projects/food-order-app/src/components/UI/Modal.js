import React, { Fragment, useContext } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import CartContext from "../../store/cart-context";

const Backdrop = () => {
  const ctx = useContext(CartContext);
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
