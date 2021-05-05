import React from 'react';

const Modal =(props)=>{

    return(
        <div className="modal">
            <div className="modal-container">
                <h2>Please enter your query and select a search engine!</h2>
                <button className="search-button" onClick={()=>{props.modal(false)}}>Close</button>
            </div>
        </div>
    )
}
export default Modal