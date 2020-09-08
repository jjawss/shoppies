import React from "react";

function Modal(props) {
  function closeModal(props) {
    props.setModal(false);
  }

  return (
    <div>
      <div class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <span class="close" onClick={() => closeModal(props)}>
              &times;
            </span>
            <h2>{props.selectedMovie["Title"]}</h2>
          </div>
          <div class="modal-body">
            <img src={props.selectedMovie["Poster"]}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
