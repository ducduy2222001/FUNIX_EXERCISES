import { Fragment } from "react";
import ReactDOM from "react-dom";
import clasees from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={clasees.backdrop} onClick={props.onHideCart}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={clasees.modal}>
      <div className={clasees.content}>{props.children}</div>
    </div>
  );
};

const protalElemnt = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={props.onHideCart} />,
        protalElemnt
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        protalElemnt
      )}
    </Fragment>
  );
};

export default Modal;
