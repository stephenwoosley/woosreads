import React from 'react';
import UpdateForm from '../Form/UpdateForm';
// import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek';
// import _ from 'lodash';


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
          <h2>Title:{props.selectedBook.title}</h2>
          <h2>Author:{props.selectedBook.author}</h2>
          <h2>Category:{props.selectedBook.category}</h2>
          <h2>Favorite:{props.selectedBook.favorite}</h2>
          <h2>WantToRead:{props.selectedBook.wantToRead}</h2>
          <h2>Rating:{props.selectedBook.rating}</h2>
          <h2>Note:{props.selectedBook.note}</h2>
          <h2>Date:{props.selectedBook.date}</h2>
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