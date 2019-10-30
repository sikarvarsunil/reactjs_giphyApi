import React from 'react';
const Modal = ({ handleClose, show, children }) => {
  
    return (
      <div className={show ? "modal display-block" : "modal display-none"}>
        <section className="modal-main">
          {children}
          <button className="close-btn" onClick={handleClose}>X</button>
        </section>
      </div>
    );
  };
  export default Modal