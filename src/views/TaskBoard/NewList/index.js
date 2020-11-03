import React from "react";
import del from "../../../assets/delete.png";
import close from "../../../assets/cancel.png";
import "./style.css";

export const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName} onBlur={handleClose}>
      <section className="modal-main">{children}</section>
    </div>
  );
};
