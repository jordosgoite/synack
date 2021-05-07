import React from 'react';
import PropTypes from 'prop-types';

const Modal = (props) => (
  <div className="modal">
    <div className="modal-container">
      <h2>Please enter your query and select a search engine!</h2>
      <button className="search-button" type="button" onClick={() => { props.modal(false); }}>Close</button>
    </div>
  </div>
);
Modal.propTypes = {
  modal: PropTypes.bool,
};

Modal.defaultProps = {
  modal: true,
};
export default Modal;
