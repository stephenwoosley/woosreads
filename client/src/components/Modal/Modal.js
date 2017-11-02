import React from 'react';
import UpdateForm from '../Form/UpdateForm';
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek'
import _ from 'lodash'


const Modal = props => {
  return(
    <div className="modal is-active">
      <div 
        className="modal-background"
        onClick={() => props.flipModal()}
      >
      </div>
      <div className="modal-card">
      
        <header className="modal-card-head">
          <p className="modal-card-title">Modal title</p>
          <button 
            className="delete" 
            aria-label="close"
            onClick={() => props.flipModal()}
          >
          </button>
        </header>
        <section className="modal-card-body">
     
          {/* <UpdateForm 
            handleInputChange = {props.handleInputChange}
            title = {props.title}
            category= {props.category}
            author= {props.author}
            rating= {props.rating}
            submit= {props.handleFormSubmit}
            wantToRead={props.wantToRead}
            flipFavorite= {props.flipFavorite}
            showExtraFields={props.showExtraFields}
          /> */}
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success">Save changes</button>
          <button 
            className="button"
            onClick={() => props.flipModal()}
          >
            Cancel
          </button>
        </footer> 
      </div>
    </div>
  );

}

export default Modal;